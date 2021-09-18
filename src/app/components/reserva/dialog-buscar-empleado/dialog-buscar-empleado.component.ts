import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-dialog-buscar-empleado',
  templateUrl: './dialog-buscar-empleado.component.html',
  styleUrls: ['./dialog-buscar-empleado.component.css']
})
export class DialogBuscarEmpleadoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBuscarEmpleadoComponent>,
    private personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) public datos: any) {}


  ngOnInit(): void {
    this.obtenerEmpleados();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  obtenerEmpleados() {
    this.personaService.getEmpleadoLike(this.datos.nombreEmpleado).subscribe(
      (data) => (this.datos.empleados = data.lista),
      (error) => console.log('no se pudo conseguir la persona')
    );
 }

}
