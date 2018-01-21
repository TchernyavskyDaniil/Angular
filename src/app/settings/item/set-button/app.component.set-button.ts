import { Component } from '@angular/core';

@Component({
  selector: 'app-set-button',
  templateUrl: 'app.component.set-button.html'
})

export class AppSetButtonComponent {
  public setButtons = SET_BTN;
  openSet(event: any) {
    event.preventDefault();
    const menuComponent = document.querySelector('.menu__components');
    menuComponent.classList.toggle('visually-hidden');
  }
}

const SET_BTN = [
  { 'id': 1, 'name': 'Общие' },
  { 'id': 2, 'name': 'Профиль' },
  { 'id': 3, 'name': 'Язык интерфейса' },
  { 'id': 4, 'name': 'Карты' },
  { 'id': 5, 'name': 'Мониторинг' },
  { 'id': 6, 'name': 'О программе' }
];
