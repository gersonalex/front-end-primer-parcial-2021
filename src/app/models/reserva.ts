import { Categoria } from './categoria';
import { Persona } from './persona';
import { Subcategoria } from './subcategoria';

export class Reserva {
  fechaHora!: string;
  idEmpleado!: Persona;
  idCliente!: Persona;
  observacion!: string;
}
