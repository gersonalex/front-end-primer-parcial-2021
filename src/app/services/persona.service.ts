import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { listadatos } from '../models/datos';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  endpoint = 'http://181.123.243.5:8080/stock-pwfe/persona';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<listadatos<Persona>> {
    let _endpoint =
      this.endpoint + '?ejemplo=' + encodeURI('{"soloUsuariosDelSistema":true}');

    return this.http.get<listadatos<Persona>>(_endpoint);
  }

  getPersonaNombre(nombre: string): Observable<listadatos<Persona>> {
    let _endpoint =
      this.endpoint + '?ejemplo=' + encodeURI('{"nombre":"' + nombre + '"}');
    return this.http.get<listadatos<Persona>>(_endpoint);
  }

  getPersonaLike(likeNameLastname: string): Observable<listadatos<Persona>> {
    let _endpointNombre =
      this.endpoint +
      '?like=S&ejemplo=' +
      encodeURI('{"nombre":"' + likeNameLastname + '"}');

    // let _endpointApellido =
    //   this.endpoint +
    //   '?like=S&ejemplo=' +
    //   encodeURI('{"apellido":"' + likeNameLastname + '"}');

    // let nombresLikeLength;
    // let apellidosLikeLength;

    // let nombresLike = this.http.get<listadatos<Persona>>(_endpointNombre);
    // let apellidosLike = this.http.get<listadatos<Persona>>(_endpointApellido);

    // nombresLike.subscribe((qwe) => {
    //   nombresLikeLength = qwe.totalDatos;
    //   console.log('longitud nombre: ' + nombresLikeLength);
    //   if (nombresLikeLength == 0) {
    //     console.log('nombre no esta vacio');
    //     return this.http.get<listadatos<Persona>>(_endpointApellido);
    //   }
    //   return null;
    // });

    return this.http.get<listadatos<Persona>>(_endpointNombre);
  }

  getClienteLike(likeNameLastname: string): Observable<listadatos<Persona>> {
    let _endpointNombre =
      this.endpoint +
      '?like=S&ejemplo=' +
      encodeURI('{"nombre":"' + likeNameLastname + '"'+',"soloUsuariosDelSistema":false}');

    return this.http.get<listadatos<Persona>>(_endpointNombre);
  }

  getEmpleadoLike(likeNameLastname: string): Observable<listadatos<Persona>> {
    let _endpointNombre =
      this.endpoint +
      '?like=S&ejemplo=' +
      encodeURI('{"nombre":"' + likeNameLastname + '"'+',"soloUsuariosDelSistema":true}');

    return this.http.get<listadatos<Persona>>(_endpointNombre);
  }
}
