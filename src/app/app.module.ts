import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMapComponent} from './map/app.component.map';
import {AppBurgerComponent} from './burger/app.component.burger';
import {AppUserMenuComponent} from './burger/user-menu/app.component.user-menu';
import {AppItemComponent} from './item/app.component.item';
import {AppButtonComponent} from "./burger/user-menu/button/app.component.button";
import {AppCurrentUserComponent} from "./burger/user-menu/current-user/app.component.current-user";
import {AppButtonExitComponent} from "./burger/user-menu/buttonExit/app.component.buttonExit";
import {AppHeaderComponent} from "./burger/user-menu/current-user/header/app.component.header";
import {AppSubHeaderComponent} from "./burger/user-menu/current-user/sub-header/app.component.sub-header";
import {AppSetButtonComponent} from './item/set-button/app.component.set-button';


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
    AppSetButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
