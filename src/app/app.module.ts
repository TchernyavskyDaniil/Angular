import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMapComponent} from './component.map/app.component.map';
import {AppBurgerComponent} from './component.burger/app.component.burger';
import {AppUserMenuComponent} from './component.burger/component.user-menu/app.component.user-menu';
import {AppItemComponent} from './component.burger/component.user-menu/component.item/app.component.item';


@NgModule({
  declarations: [
    AppComponent,
    AppBurgerComponent,
    AppMapComponent,
    AppUserMenuComponent,
    AppItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
