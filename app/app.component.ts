// Храним компоненты

import { Component } from "@angular/core";

import { AppComponentBurger } from "./app.component.burger";

import { AppComponentMap } from "./app.component.map";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['style.css']
})
export class AppComponent {
}

