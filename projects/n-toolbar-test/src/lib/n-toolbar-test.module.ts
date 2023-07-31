import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NToolbarTestComponent } from './n-toolbar-test.component';



@NgModule({
  declarations: [
    NToolbarTestComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    CommonModule
  ],
  exports: [
    NToolbarTestComponent
  ]
})
export class NToolbarTestModule { }
