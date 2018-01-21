import { Component } from '@angular/core';

import {AppSetButtonComponent} from './set-button/app.component.set-button';

@Component({
    selector: 'app-item',
    templateUrl: 'app.component.item.html',
})
export class AppItemComponent {
  toggleBtn(event: any) {
    event.preventDefault();
    const closeBurger = document.querySelector('.menu__option');
    closeBurger.classList.toggle('burger__menu--close');
  }
}
