import { Component } from '@angular/core';

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
