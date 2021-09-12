import { Categoria } from './categoria';
import { Persona } from './persona';
import { Subcategoria } from './subcategoria';

export class FichaClinica {
  fechaHora!: string;
  idEmpleado!: Persona;
  idCliente!: Persona;
  //   idCategoria!: Categoria;
  idTipoProducto!: Subcategoria;
}
