export interface Applicant {
  id?: string | number;
  fecha_de_applicacion?: Date;
  nombre?: string;
  apellidos?: string;
  correo_electronico?: string;
  telefono?: number | string;
  estado?: string;
  genero?: string;
  fecha_de_nacimiento?: Date;
  pais_de_nacimiento?: string;
  documento_de_identidad?: string;
  tipo_documento_identidad?: string;
  numero_documento_id?: string;
  direccion?: string;
  ciudad?: string;
  provincia?: string;
  codigo_postal?: number;
  pais_de_residencia?: string;
  programa_cursar?: string;
  permiso?: string;
  colectivo?: string[];
  educacion?: string;
  estudio_mas_alto?: string;
  situacion_profesional?: string;
  intereses_actuales?: string;
  dedicacion_semanal?: number;
  acceso_internet_dispositivos?: string;
  formacion_online?: boolean;
  razones_para_unir?: string;
  encontrar_programa?: string;
  mas_informacion?: string;
  observaciones?: string;
  invitaciones?: number;
}


export interface CreateApplicant {
  nombre: string;
  apellidos: string;
  correo_electronico: string;
  telefono: string;
  genero: string;
  fecha_de_nacimiento: string;
  pais_de_nacimiento: string;
  tipo_documento_identidad: string;
  documento_de_identidad: string;
  numero_documento_id: string;
  direccion: string;
  ciudad: string;
  provincia: string;
  codigo_postal: string;
  pais_de_residencia: string;
  programa_cursar: string;
  permiso: string;
  colectivo: string[];
  educacion: string;
  estudio_mas_alto: string;
  situacion_profesional: string;
  intereses_actuales: string;
  dedicacion_semanal: string;
  acceso_internet_dispositivos: string;
  formacion_online: string;
  razones_para_unir: string;
  encontrar_programa: string;
  mas_informacion: string,
  invitaciones?: number
}
