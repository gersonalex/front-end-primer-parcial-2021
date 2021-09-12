import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listadatos } from '../models/datos';
import { FichaClinica } from '../models/fichaClinica';

@Injectable({
  providedIn: 'root',
})
export class FichaClinicaService {
  private endpoint = 'http://181.123.243.5:8080/stock-pwfe/fichaClinica';

  constructor(private http: HttpClient) {}

  getFichasClinicas(): Observable<listadatos<FichaClinica>> {
    return this.http.get<listadatos<FichaClinica>>(this.endpoint);
  }
}
