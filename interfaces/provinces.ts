export interface IProvince {
    nombre_completo: string;
    fuente: string;
    iso_id: string;
    nombre: string;
    id: string;
    categoria: string;
    iso_nombre: string;
    centroide: {
        lat: number;
        lon: number;
    };
}
