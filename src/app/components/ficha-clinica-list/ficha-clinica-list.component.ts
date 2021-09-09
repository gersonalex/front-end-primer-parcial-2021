import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-ficha-clinica-list',
  templateUrl: './ficha-clinica-list.component.html',
  styleUrls: ['./ficha-clinica-list.component.css'],
})
export class FichaClinicaListComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => (this.categorias = data.lista),
      (error) => console.log('no se pudieron conseguir los paises')
    );
  }
}
