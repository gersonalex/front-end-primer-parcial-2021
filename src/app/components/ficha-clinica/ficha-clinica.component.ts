import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  FichaFiltroForm!: FormGroup;

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

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private subCategoriaService: SubcategoriaService,
    private personaService: PersonaService,
    private fichaClinicaService: FichaClinicaService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.categoriaService.getCategorias().subscribe(
      (data) => (this.categorias = data.lista),
      (error) => console.log('no se pudieron conseguir las categorias')
    );

    this.fichaClinicaService.getFichasClinicas().subscribe(
      (data) => (this.fichasClinicas = data.lista),
      (error) => console.log('no se pudieron conseguir las fichas clinicas')
    );
  }

  initializeForm(): void {
    this.FichaFiltroForm = this.fb.group({
      fechaDesde: '',
      fechaHasta: '',
      empleadoNombre: '',
      clienteNombre: '',
      categoria: '',
      subcategoria: '',
    });
  }

  categoriaSeleccionar() {
    this.getSubcategorias();
  }

  getSubcategorias() {
    this.subCategoriaService
      .getSubCategorias(this.FichaFiltroForm.value.categoria)
      .subscribe(
        (data) => {
          this.subcategorias = data.lista;
        },
        (error) => console.log('no se pudieron conseguir los paises')
      );
  }

  // fechaDesdeChange($event: any) {
  //   this.fechaDesde = $event.target.value;
  // }

  // fechaHastaChange($event: any) {
  //   this.fechaHasta = $event.target.value;
  //   // console.log('El empleado es: ' + this.empleado);
  // }

  obtenerEmpleados() {
    // this.personaService.getEmpleados().subscribe(
    //   (data) => console.log(data.lista),
    //   (error) => console.log('no se pudieron conseguir los empleados')
    // );
    // this.personaService.getPersonaNombre(this.empleadoNombre).subscribe(
    //   (data) => console.log(data.lista),
    //   (error) => console.log('no se pudo conseguir la persona')
    // );
    // this.personaService.getPersonaLike(this.empleadoNombre).subscribe(
    //   (data) => console.log(data.lista),
    //   (error) => console.log('no se pudo conseguir la persona')
    // );
  }

  buscarFicha() {
    // let fichasRangoFechas = this.fichaClinicaService.getFichasRangoFechas(
    //   this.fechaDesde.toISOString().split('T')[0].replaceAll('-', ''),
    //   this.fechaHasta.toISOString().split('T')[0].replaceAll('-', '')
    // );
    //TRAER LOS EMPLEADOS Y LOS CLIENTES A TRAVES DEL NOMBRE, UTILIZAR EL RECURSO PARA OBTENER PERSONAS PARA ACCEDER
    // let fichasPaciente = this.fichaClinicaService.getFichasPaciente();
    // let fichasFisio = this.fichaClinicaService.getFichasFisioterapeuta();
    // let fichasSubcategoria = this.fichaClinicaService.getFichasSubcategoria(
    //   this.subcategoria.idTipoProducto
    // );
  }

  filtrarFichas(): void {
    console.log(this.FichaFiltroForm);
  }
}
