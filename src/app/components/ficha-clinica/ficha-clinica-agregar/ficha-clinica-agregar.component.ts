import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Subcategoria } from 'src/app/models/subcategoria';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ficha-clinica-agregar',
  templateUrl: './ficha-clinica-agregar.component.html',
  styleUrls: ['./ficha-clinica-agregar.component.css'],
})
export class FichaClinicaAgregarComponent implements OnInit {
  nuevaFichaForm: FormGroup;

  fecha: any = null;
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria = new Subcategoria();

  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];

  constructor(private fb: FormBuilder) {
    // this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.nuevaFichaForm = this.fb.group({
      fecha: this.fecha,
      empleadoNombre: '',
      clienteNombre: '',
      motivo: '',
      diagnostico: '',
      observacion: '',
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.nuevaFichaForm);
  }

  guardarFicha(): void {}
}
