import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';
import { Subcategoria } from 'src/app/models/subcategoria';

@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css'],
  providers: [Categoria, Subcategoria],
})
export class FichaClinicaComponent implements OnInit {
  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];

  // @Input() categoria: Categoria = new Categoria();
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria | undefined;
  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();

  constructor(
    private categoriaService: CategoriaService,
    private subCategoriaService: SubcategoriaService
  ) {}

  changeCategoria($event: any) {
    console.log($event.target.value);
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => (this.categorias = data.lista),
      (error) => console.log('no se pudieron conseguir las categorias')
    );
  }

  categoriaSeleccionar(target: Categoria) {
    this.categoria = target;
    console.log(this.categoria);
    this.getSubcategorias();
  }

  getSubcategorias() {
    this.subCategoriaService.getSubCategorias(this.categoria).subscribe(
      (data) => {
        this.subcategorias = data.lista;
        console.log(this.subcategorias);
      },
      (error) => console.log('no se pudieron conseguir los paises')
    );
  }

  fechaDesdeChange($event: any) {
    this.fechaDesde = $event.target.value;
  }

  fechaHastaChange($event: any) {
    this.fechaHasta = $event.target.value;
  }
}
