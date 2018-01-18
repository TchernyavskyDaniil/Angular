import { Component } from '@angular/core';

import { AppUserMenuComponent } from './component.user-menu/app.component.user-menu';

@Component({
    selector: 'app-burger',
    templateUrl: 'app.component.burger.html',
})
export class AppBurgerComponent {
    clicked(event: any) {
        event.preventDefault();
        const ButtonToggle = document.querySelector('.burger__menu');
        ButtonToggle.classList.toggle('burger__menu--close');
    }
}
