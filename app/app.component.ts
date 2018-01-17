import { Component } from "@angular/core";

const todos = [
    {
        title: 'LOL',
        completed: true
    },
    {
        title: 'KEK',
        completed: false
    },
    {
        title: 'LOLS',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['style.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;
}

