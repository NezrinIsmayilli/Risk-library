import { Component, Input, OnInit } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-n-toolbar-test',
  templateUrl: './n-toolbar-test.component.html',
  styleUrls: ['./n-toolbar-test.component.tailwind.css']
})
export class NToolbarTestComponent implements OnInit{
  @Input() appName: string;
  @Input() authCodeFlowConfig: AuthConfig;
  year = new Date().getFullYear();

  constructor(
      private oauthService: OAuthService,
      private router: Router){}

  ngOnInit(): void {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(this.authCodeFlowConfig);
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
