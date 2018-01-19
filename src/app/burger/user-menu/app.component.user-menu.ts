import { Component } from '@angular/core';

import { AppItemComponent } from '../../item/app.component.item';
import { AppButtonComponent } from './button/app.component.button';
import { AppCurrentUserComponent } from './current-user/app.component.current-user';
import { AppButtonExitComponent } from './buttonExit/app.component.buttonExit';
import {AppSubHeaderComponent} from './current-user/sub-header/app.component.sub-header';

@Component({
    selector: 'app-user-menu',
    templateUrl: 'app.component.user-menu.html',
})

export class AppUserMenuComponent {
  openClick(event: any) {
    event.preventDefault();
    const buttonOpen = document.querySelector('.menu__option');
    buttonOpen.classList.toggle('burger__menu--close');
  }
}
