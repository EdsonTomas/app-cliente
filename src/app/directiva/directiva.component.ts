import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaDeCursos: string[] = ['TypeScript','javascript','Java SE','c#','php'];
  habilitar:boolean = true;
  constructor() { }
  habilitarListaDeCursos():void{
    this.habilitar = (this.habilitar == true)?false:true
  }
}
