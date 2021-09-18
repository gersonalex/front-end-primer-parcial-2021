import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from 'src/app/models/reserva';
import { PersonaService } from 'src/app/services/persona.service';
import { ReservaService } from 'src/app/services/reserva.service';
import {formatDate} from '@angular/common';
import { Persona } from 'src/app/models/persona';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBuscarClienteComponent } from './dialog-buscar-cliente/dialog-buscar-cliente.component';
import { DialogBuscarEmpleadoComponent } from './dialog-buscar-empleado/dialog-buscar-empleado.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  animal: string = '';
  name: string = '';

  ReservaFiltroForm!: FormGroup;
  reservas: Reserva[] = [];

  nombreCliente: string = '';
  clientes: Persona[] = [];
  cliente: Persona = new Persona;

  nombreEmpleado: string = '';
  empleados: Persona[] = [];
  empleado: Persona = new Persona;

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
    private reservaService: ReservaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
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
      fechaHasta: ''
    });

    this.cliente = new Persona;
    this.empleado = new Persona;
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

    this.reservaService.getReservasFiltro(this.empleado,this.cliente,
      this.ReservaFiltroForm.value['fechaDesde'],
      this.ReservaFiltroForm.value['fechaHasta']).subscribe(
      (data) => (this.reservas = data.lista),
      (error) => console.log('no se pudieron conseguir las reservas')
    );
  }


  openDialogCliente(): void {
    const dialogRef = this.dialog.open(DialogBuscarClienteComponent, {
      data: {nombreCliente: this.nombreCliente, cliente: this.cliente, clientes: this.clientes}
    });

    dialogRef.afterClosed().subscribe((result: Persona) => {
      console.log('The dialog was closed');
      this.cliente = result;
    });
  }

  openDialogEmpleado(): void {
    const dialogRef = this.dialog.open(DialogBuscarEmpleadoComponent, {
      data: {nombreEmpleado: this.nombreEmpleado, empleado: this.empleado, empleados: this.empleados}
    });

    dialogRef.afterClosed().subscribe((result: Persona) => {
      console.log('The dialog was closed');
      this.empleado = result;
    });
  }

  isNotEmptyObject(obj: {}) {
    return (obj && (Object.keys(obj).length !== 0));
  }

}



