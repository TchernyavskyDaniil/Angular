import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMapComponent} from './map/app.component.map';
import {AppBurgerComponent} from './burger/app.component.burger';
import {AppUserMenuComponent} from './settings/user-menu/app.component.user-menu';
import {AppItemComponent} from './settings/item/app.component.item';
import {AppButtonComponent} from './settings/user-menu/button/app.component.button';
import {AppCurrentUserComponent} from './settings/current-user/app.component.current-user';
import {AppButtonExitComponent} from './settings/user-menu/buttonExit/app.component.buttonExit';
import {AppHeaderComponent} from './settings/current-user/header/app.component.header';
import {AppSubHeaderComponent} from './settings/current-user/sub-header/app.component.sub-header';
import {AppSetButtonComponent} from './settings/item/set-button/app.component.set-button';
import {AppAlertMesComponent} from './settings/user-menu/button/alert-mes/app.component.alert-mes';
import {AppTreeComponent} from './tree/app.component.tree';
import {TreeModule} from 'angular-tree-component';
import {AppPopUpComponent} from './pop-up/app.component.pop-up';


@NgModule({
  declarations: [
    AppComponent,
    AppBurgerComponent,
    AppMapComponent,
    AppUserMenuComponent,
    AppItemComponent,
    AppButtonComponent,
    AppCurrentUserComponent,
    AppButtonExitComponent,
    AppHeaderComponent,
    AppSubHeaderComponent,
    AppSetButtonComponent,
    AppAlertMesComponent,
    AppTreeComponent,
    AppPopUpComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
