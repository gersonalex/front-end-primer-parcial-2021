import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Subcategoria } from 'src/app/models/subcategoria';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';

@Component({
  selector: 'app-ficha-clinica-agregar',
  templateUrl: './ficha-clinica-agregar.component.html',
  styleUrls: ['./ficha-clinica-agregar.component.css'],
})
export class FichaClinicaAgregarComponent implements OnInit {
  nuevaFichaForm!: FormGroup;

  fecha: any = null;
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria = new Subcategoria();

  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private subCategoriaService: SubcategoriaService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.categoriaService.getCategorias().subscribe(
      (data) => (this.categorias = data.lista),
      (error) => console.log('no se pudieron conseguir las categorias')
    );
  }

  initializeForm(): void {
    this.nuevaFichaForm = this.fb.group({
      fechaString: '',
      empleadoNombre: '',
      clienteNombre: '',
      categoria: '',
      subcategoria: '',
      motivo: '',
      diagnostico: '',
      observacion: '',
    });
  }

  categoriaSeleccionar() {
    this.getSubcategorias();
  }

  getSubcategorias() {
    this.subCategoriaService
      .getSubCategorias(this.nuevaFichaForm.value.categoria)
      .subscribe(
        (data) => {
          this.subcategorias = data.lista;
        },
        (error) => console.log('no se pudieron conseguir las subcategorias')
      );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.nuevaFichaForm);
  }

  guardarFicha(): void {}
}
