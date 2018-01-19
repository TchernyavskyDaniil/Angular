import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'app.component.button.html'
})

export class AppButtonComponent {
  public buttons = BTN;
}

const BTN = [
  { 'id': 1, 'name': 'Уведомления' },
  { 'id': 2, 'name': 'Измерения' },
  { 'id': 3, 'name': 'Настройки' },
  { 'id': 4, 'name': 'Задачи'},
  { 'id': 5, 'name': 'Тех. поддержка'}
];

