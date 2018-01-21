import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-exit',
  templateUrl: 'app.component.buttonExit.html'
})

export class AppButtonExitComponent {
  public buttonsExit = BTN_EXIT;
}

const BTN_EXIT = [
  { 'id': 1, 'name': 'Выйти из системы' },
  { 'id': 2, 'name': 'Сохранить' }
];
