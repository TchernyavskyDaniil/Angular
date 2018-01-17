// Храним модули

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppComponentBurger } from "./app.component.burger";
import { AppComponentMap } from "./app.component.map";
import { AppComponentUserMenu } from "./app.component.user-menu";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AppComponentBurger, AppComponentMap, AppComponentUserMenu],
    bootstrap: [AppComponent]
})
export class AppModule {

}