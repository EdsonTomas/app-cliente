import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindo ao angular 11';
  curso:string = 'Angular com spring boot';
  professor:string = 'Edson Tomas';
}
