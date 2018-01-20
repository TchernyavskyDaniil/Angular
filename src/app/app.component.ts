import { Component } from '@angular/core';

import { AppBurgerComponent } from './burger/app.component.burger';
import { AppMapComponent } from './map/app.component.map';
import {AppTreeComponent} from './tree/app.component.tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
}
