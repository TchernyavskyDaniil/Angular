import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: 'app.component.sub-header.html'
})

export class AppSubHeaderComponent {

  public subHeader = SUB;
}

//Не использовал

const SUB = [
  { 'id': 1, 'name': 'менеджер' },
  { 'id': 2, 'name': 'программного обеспечения' }
];
