import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { CategoriaService } from './services/categoria.service';
import { SubcategoriaService } from './services/subcategoria.service';
import { FichaClinicaAgregarComponent } from './components/ficha-clinica/ficha-clinica-agregar/ficha-clinica-agregar.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaAgregarComponent } from './components/reserva/reserva-agregar/reserva-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaClinicaComponent,
    FichaClinicaAgregarComponent,
    ReservaComponent,
    ReservaAgregarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [CategoriaService, SubcategoriaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
