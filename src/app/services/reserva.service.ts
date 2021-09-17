import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listadatos } from '../models/datos';
import { FichaClinica } from '../models/fichaClinica';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private endpoint = 'http://181.123.243.5:8080/stock-pwfe/reserva';
  filtro: string = '';

  constructor(private http: HttpClient) {}

  getReservas(): Observable<listadatos<Reserva>> {
    return this.http.get<listadatos<Reserva>>(this.endpoint);
  }

  getReservasRangoFechas(
    fechaDesde: string,
    fechaHasta: string
  ): Observable<listadatos<Reserva>> {
    let _endpoint =
      this.endpoint +
      encodeURI('?ejemplo={"fechaDesdeCadena":"' +
      fechaDesde +
      '","fechaHastaCadena":"' +
      fechaHasta +
      '"}');

    return this.http.get<listadatos<Reserva>>(_endpoint);
  }

  getReservasFiltro(
    empleado: string,
    cliente: string,
    fechaDesde: string,
    fechaHasta: string
  ): Observable<listadatos<Reserva>> {
    this.filtro = '?ejemplo={';
    if(cliente!=''){
      this.filtro=this.filtro+'?"idCliente":{"idPersona":1}';
    }
    if(empleado!=''){
      //si el filtro no esta vacio agrega la coma
      if(this.filtro != '?ejemplo={'){
        this.filtro=this.filtro+',';
      }else{
        //this.filtro=this.filtro+'?';
      }
      this.filtro=this.filtro+'"idEmpleado":{"idPersona":1}';
    }
    if(fechaDesde!=''){
      //si el filtro no esta vacio agrega la coma
      if(this.filtro != '?ejemplo={'){
        this.filtro=this.filtro+',';
      }else{
        //this.filtro=this.filtro+'?';
      }
      this.filtro=this.filtro+'"fechaDesdeCadena":'+formatDate(fechaDesde, 'yyyyMMdd', 'en');
    }
    if(fechaHasta!=''){
      //si el filtro no esta vacio agrega la coma
      if(this.filtro != '?ejemplo={'){
        this.filtro=this.filtro+',';
      }else{
        //this.filtro=this.filtro+'?';
      }
      this.filtro=this.filtro+'"fechaHastaCadena":'+formatDate(fechaHasta, 'yyyyMMdd', 'en');
    }

    let _endpoint =
      this.endpoint +
      encodeURI(this.filtro) + '}';

    return this.http.get<listadatos<Reserva>>(_endpoint);
  }

  getFichasPaciente(idPersona: number): Observable<listadatos<FichaClinica>> {
    let _endpoint =
      this.endpoint + '?ejemplo={"idCliente":{"idPersona":' + idPersona + '}}';
    return this.http.get<listadatos<FichaClinica>>(_endpoint);
  }

  getFichasFisioterapeuta(
    idEmpleado: number
  ): Observable<listadatos<FichaClinica>> {
    let _endpoint =
      this.endpoint +
      '?ejemplo={"idEmpleado":{"idPersona":' +
      idEmpleado +
      '}}';
    return this.http.get<listadatos<FichaClinica>>(_endpoint);
  }

  getFichasSubcategoria(
    idSubcategoria: number
  ): Observable<listadatos<FichaClinica>> {
    let _endpoint =
      this.endpoint +
      '?ejemplo={"idTipoProducto":{"idTipoProducto":' +
      idSubcategoria +
      '}}';
    return this.http.get<listadatos<FichaClinica>>(_endpoint);
  }
}
