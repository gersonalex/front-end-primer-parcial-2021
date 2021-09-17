import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserva-agregar',
  templateUrl: './reserva-agregar.component.html',
  styleUrls: ['./reserva-agregar.component.css']
})
export class ReservaAgregarComponent implements OnInit {
  nuevaReservaForm!: FormGroup;

  fecha: any = null;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.nuevaReservaForm = this.fb.group({
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


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.nuevaReservaForm);
  }

  guardarReserva(): void {}
}
