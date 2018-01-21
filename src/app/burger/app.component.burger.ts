import { Component } from '@angular/core';

import { AppUserMenuComponent } from '../settings/user-menu/app.component.user-menu';

@Component({
    selector: 'app-burger',
    templateUrl: 'app.component.burger.html',
})
export class AppBurgerComponent {
    clicked(event: any) {
        event.preventDefault();
        const ButtonToggle = document.querySelector('.burger__menu');
        const ButtonMenu = document.querySelector('.burger__svg');
        const ButtonCloseMenu = document.querySelector('.burger__svg-cross');
        ButtonToggle.classList.toggle('burger__menu--close');
        ButtonMenu.classList.toggle('burger__svg--close');
        ButtonCloseMenu.classList.toggle('burger__svg--close');
    }
}
