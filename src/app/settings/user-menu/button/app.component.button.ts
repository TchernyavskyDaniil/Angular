import { Component } from '@angular/core';
import {AppAlertMesComponent} from "./alert-mes/app.component.alert-mes";

@Component({
  selector: 'app-button',
  templateUrl: 'app.component.button.html'
})

export class AppButtonComponent {
  public buttons = BTN;
  openClick(event: any) {
    event.preventDefault();
    const buttonOpen = document.querySelector('.menu__option');
    buttonOpen.classList.toggle('burger__menu--close');
  }
}

const BTN = [
  { 'id': 1, 'name': 'Уведомления', 'task': false, 'alert': '3', 'link': false },
  { 'id': 2, 'name': 'Измерения', 'task': false, 'alert': false , 'link': '../../../assets/img/tape.svg#tape'},
  { 'id': 3, 'name': 'Настройки', 'task': false, 'alert': false, 'link': false },
  { 'id': 4, 'name': 'Задачи', 'task': '364', 'alert': '26', 'link': false},
  { 'id': 5, 'name': 'Тех. поддержка', 'task': false, 'alert': false, 'link': '../../../assets/img/chat.svg#chat'}
];

