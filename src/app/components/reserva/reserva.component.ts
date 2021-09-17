import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from 'src/app/models/reserva';
import { PersonaService } from 'src/app/services/persona.service';
import { ReservaService } from 'src/app/services/reserva.service';
import {formatDate} from '@angular/common';
import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  ReservaFiltroForm!: FormGroup;
  reservas: Reserva[] = [];

  nombreCliente: string = '';
  clientes: Persona[] = [];

  nombreEmpleado: string = '';
  empleados: Persona[] = [];

  //Para la tabla
  displayedColumns: string[] = [
    'fecha',
    'profesional',
    'cliente',
    'observacion',
    'acciones',
  ];

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerEmpleados();
    this.initializeForm();

    //obtener reservas del dia actual
    this.reservaService.getReservasRangoFechas(formatDate(new Date(), 'yyyyMMdd', 'en'),formatDate(new Date(), 'yyyyMMdd', 'en')).subscribe(
      (data) => (this.reservas = data.lista),
      (error) => console.log('no se pudieron conseguir las reservas')
    );
  }

  initializeForm(): void {
    this.ReservaFiltroForm = this.fb.group({
      fechaDesde: '',
      fechaHasta: '',
      empleado: '',
      cliente: ''
    });
  }

  obtenerEmpleados() {
    this.personaService.getEmpleadoLike(this.nombreEmpleado).subscribe(
      (data) => (this.empleados = data.lista),
      (error) => console.log('no se pudo conseguir la persona')
    );
  }

  obtenerClientes() {
    this.personaService.getClienteLike(this.nombreCliente).subscribe(
      (data) => (this.clientes = data.lista),
      (error) => console.log('no se pudo conseguir la persona')
    );
 }

  filtrarReservas(): void {
    console.log(this.ReservaFiltroForm.value);

    this.reservaService.getReservasFiltro(this.ReservaFiltroForm.value['empleado'],this.ReservaFiltroForm.value['cliente'],
      this.ReservaFiltroForm.value['fechaDesde'],
      this.ReservaFiltroForm.value['fechaHasta']).subscribe(
      (data) => (this.reservas = data.lista),
      (error) => console.log('no se pudieron conseguir las reservas')
    );
  }

}

