import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { CategoriaService } from './services/categoria.service';
import { SubcategoriaService } from './services/subcategoria.service';
import { FichaClinicaAgregarComponent } from './components/ficha-clinica/ficha-clinica-agregar/ficha-clinica-agregar.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaAgregarComponent } from './components/reserva/reserva-agregar/reserva-agregar.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { DialogBuscarClienteComponent } from './components/reserva/dialog-buscar-cliente/dialog-buscar-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBuscarEmpleadoComponent } from './components/reserva/dialog-buscar-empleado/dialog-buscar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaClinicaComponent,
    FichaClinicaAgregarComponent,
    ReservaComponent,
    ReservaAgregarComponent,
    DialogBuscarClienteComponent,
    DialogBuscarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [CategoriaService, SubcategoriaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
