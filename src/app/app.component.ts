import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  articulos:articulo[] = [
    {
      nombre: 'Bici',
      costo: '3000'
    },
    {
      nombre: 'Smart Tv',
      costo: '2500'
    },
    {
      nombre: 'Libro',
      costo: '320'
    },
    {
      nombre: 'Celular',
      costo: '1000'
    },
    {
      nombre: 'Laptop',
      costo: '2199'
    },
    {
      nombre: 'Teclado',
      costo: '2000'
    },
    {
      nombre: 'Audifonos',
      costo: '1700'
    },
  ]
  mostrar = true;

  alternaLista() {
    this.mostrar = !this.mostrar;
  }

}

type articulo = {nombre:string; costo:string};
