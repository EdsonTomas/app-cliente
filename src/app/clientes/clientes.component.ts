import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes:Cliente[] = [
    {id:1,nome:'Edson', apelido:'tomas',email:'tomasedson1@hotmail.com',data:'2020-07-08'},
    {id:2,nome:'Ericsson', apelido:'junior',email:'Ericsson@hotmail.com',data:'2021-01-9'},
    {id:3,nome:'Mendes', apelido:'Ginga',email:'Mendes@hotmail.com',data:'2019-01-01'},
    {id:4,nome:'Rossana', apelido:'Ginga',email:'Rossana@hotmail.com',data:'2018-01-02'},
    {id:5,nome:'Wilian', apelido:'Mucenoho',email:'Wilian@hotmail.com',data:'2021-05-18'},
    {id:6,nome:'Hendrix', apelido:'Clilongu',email:'Hendrix@hotmail.com',data:'2021-01-18'},
    {id:7,nome:'Geofrey', apelido:'Winda',email:'Geofrey@hotmail.com',data:'2021-01-18'},
    {id:8,nome:'Bob', apelido:'Ginga',email:'Rossana@hotmail.com',data:'2021-01-18'},
    {id:9,nome:'Ana', apelido:'Bela',email:'Ana@hotmail.com',data:'2021-01-18'},
    {id:10,nome:'Mariza', apelido:'Paulina',email:'Mendes@hotmail.com',data:'2021-01-18'},
    {id:11,nome:'Noemia', apelido:'Paulo',email:'Noemia@hotmail.com',data:'2021-01-18'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
