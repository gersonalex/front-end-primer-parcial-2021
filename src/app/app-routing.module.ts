import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaClinicaAgregarComponent } from './components/ficha-clinica/ficha-clinica-agregar/ficha-clinica-agregar.component';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';

const routes: Routes = [
  { path: '', component: FichaClinicaComponent },
  { path: 'ficha-clinica-agregar', component: FichaClinicaAgregarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
