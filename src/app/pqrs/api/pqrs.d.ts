export interface PQRS {
  titulo: string,
  descripcion: string,
  correo: string,
  tipoPqrs: string,
  anonimo: boolean,
  nombre?: string,
  apellido?: string,
  cedula?: string,
  // semillero: string,
}

export interface Semilleros {
  id: number,
  name: string,
  id_grupo: number,
  id_lider: number,
  lineaInvestigacion: string,
  descripcion: string,
  logo: string,
}
