import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

import { SubcategoriaService } from 'src/app/services/subcategoria.service';
import { Subcategoria } from 'src/app/models/subcategoria';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FichaClinicaService } from 'src/app/services/ficha-clinica.service';
import { FichaClinica } from 'src/app/models/fichaClinica';

@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css'],
  providers: [Categoria, Subcategoria],
})
export class FichaClinicaComponent implements OnInit {
  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];
  fichasClinicas: FichaClinica[] = [];

  //Para la tabla
  displayedColumns: string[] = [
    'fecha',
    'profesional',
    'cliente',
    'categoria',
    'subcategoria',
    'acciones',
  ];

  // @Input() categoria: Categoria = new Categoria();
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria | undefined;
  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();
  empleadoNombre: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private subCategoriaService: SubcategoriaService,
    private personaService: PersonaService,
    private fichaClinicaService: FichaClinicaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => (this.categorias = data.lista),
      (error) => console.log('no se pudieron conseguir las categorias')
    );

    this.fichaClinicaService.getFichasClinicas().subscribe(
      // (data) => (this.categorias = data.lista),
      (data) => (this.fichasClinicas = data.lista),
      (error) => console.log('no se pudieron conseguir las fichas clinicas')
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
    // console.log('El empleado es: ' + this.empleado);
  }

  obtenerEmpleados() {
    // this.personaService.getEmpleados().subscribe(
    //   (data) => console.log(data.lista),
    //   (error) => console.log('no se pudieron conseguir los empleados')
    // );
    // this.personaService.getPersonaNombre(this.empleadoNombre).subscribe(
    //   (data) => console.log(data.lista),
    //   (error) => console.log('no se pudo conseguir la persona')
    // );

    this.personaService.getPersonaLike(this.empleadoNombre).subscribe(
      (data) => console.log(data.lista),
      (error) => console.log('no se pudo conseguir la persona')
    );

    console.log(this.fichasClinicas);
  }
}
