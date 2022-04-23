export interface ILocalities {
  localidades: {
    municipio: { nombre: string; id: string };
    nombre: string;
    provincia: { nombre: string; id: string };
  }[];
  total: number;
  cantidad: number;
  parametros: {};
  inicio: number;
}
