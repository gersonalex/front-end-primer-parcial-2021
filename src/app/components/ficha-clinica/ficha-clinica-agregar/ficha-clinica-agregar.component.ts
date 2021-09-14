import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Subcategoria } from 'src/app/models/subcategoria';

@Component({
  selector: 'app-ficha-clinica-agregar',
  templateUrl: './ficha-clinica-agregar.component.html',
  styleUrls: ['./ficha-clinica-agregar.component.css'],
})
export class FichaClinicaAgregarComponent implements OnInit {
  fecha: any = null;
  empleadoNombre: string = '';
  clienteNombre: string = '';
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria = new Subcategoria();

  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];

  constructor() {}

  ngOnInit(): void {}
}
