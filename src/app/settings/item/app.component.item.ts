import { Component } from '@angular/core';

import {AppSetButtonComponent} from './set-button/app.component.set-button';

@Component({
    selector: 'app-item',
    templateUrl: 'app.component.item.html',
})
export class AppItemComponent {
  // Усечение строки использовать ?
  str = '34875253-4200-FDE4-EC9A-0...';
  toggleBtn(event: any) {
    event.preventDefault();
    const closeBurger = document.querySelector('.menu__option');
    closeBurger.classList.toggle('burger__menu--close');
  }
}
