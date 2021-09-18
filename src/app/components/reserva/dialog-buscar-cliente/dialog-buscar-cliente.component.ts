import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-dialog-buscar-cliente',
  templateUrl: './dialog-buscar-cliente.component.html',
  styleUrls: ['./dialog-buscar-cliente.component.css']
})
export class DialogBuscarClienteComponent implements OnInit{


  constructor(
    public dialogRef: MatDialogRef<DialogBuscarClienteComponent>,
    private personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) public datos: any) {}


  ngOnInit(): void {
    this.obtenerClientes();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  obtenerClientes() {
    this.personaService.getClienteLike(this.datos.nombreCliente).subscribe(
      (data) => (this.datos.clientes = data.lista),
      (error) => console.log('no se pudo conseguir la persona')
    );
 }

}
