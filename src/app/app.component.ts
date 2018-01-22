import { Component } from '@angular/core';

import { AppBurgerComponent } from './burger/app.component.burger';
import { AppMapComponent } from './map/app.component.map';
import {AppTreeComponent} from './tree/app.component.tree';
import {AppPopUpComponent} from './pop-up/app.component.pop-up';
import {AppContainerComponent} from './settings/container/app.component.container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
}
