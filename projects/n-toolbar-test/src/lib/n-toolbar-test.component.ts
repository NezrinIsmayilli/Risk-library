import { Component, Input } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './sso.config';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-n-toolbar-test',
  templateUrl: './n-toolbar-test.component.html'
})
export class NToolbarTestComponent {
  showFiller = false;
  @Input() appName: string;
  @Input() headerColor: string;
  @Input() footerColor: string;

  constructor(
      private oauthService: OAuthService,
      private router: Router){
      this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      if (!this.oauthService.hasValidIdToken()) {
        this.oauthService.initLoginFlow();
      }else{
        this.oauthService.loadUserProfile().then(() => {
          const url = localStorage.getItem('currentURL');
          if (url) {
            this.router.navigateByUrl(url);
            localStorage.setItem('currentURL', '');
          }
        });
      }
    });
  }

  logout(){
    this.oauthService.logOut();
  }

}
