// NOT USED

import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-mes',
  templateUrl: 'app.component.alert-mes.html'
})

export class AppAlertMesComponent {
  public alerts = ALERT;

}

const ALERT = [
  { 'id': 1, 'task': false, 'alert': '3' },
  { 'id': 2, 'task': false, 'alert': false },
  { 'id': 3, 'task': false, 'alert': false },
  { 'id': 4, 'task': '364', 'alert': '26'},
  { 'id': 5, 'task': false, 'alert': false}
];
