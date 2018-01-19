import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'app.component.button.html'
})

export class AppButtonComponent {
  public buttons = BTN;
  openClick(event: any) {
    if (BTN[2].name) {

    }
    event.preventDefault();
    const buttonOpen = document.querySelector('.menu__option');
    buttonOpen.classList.toggle('burger__menu--close');
  }
}

const BTN = [
  { 'id': 1, 'name': 'Уведомления' },
  { 'id': 2, 'name': 'Измерения' },
  { 'id': 3, 'name': 'Настройки' },
  { 'id': 4, 'name': 'Задачи'},
  { 'id': 5, 'name': 'Тех. поддержка'}
];

