import { Persona } from '../persona';
import { Subcategoria } from '../subcategoria';

export interface FichaClinicaAdd {
  motivoConsulta: string;
  diagnostico: string;
  observacion: string;
  idEmpleado: Persona;
  idCliente: Persona;
  idTipoProducto: Subcategoria;
}
