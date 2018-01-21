import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app.component.header.html'
})

export class AppHeaderComponent {

  public header = NAME;
}

// Не использовал

const NAME = [
  { 'id': 1, 'name': 'Газов Рустам' },
  { 'id': 2, 'name': 'Настройки' }
];
