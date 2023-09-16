export interface Applicant {
  id: number /* NO */;
  fecha_de_applicacion: Date /* NO */;
  nombre_apellidos: string /* LISTO */;
  correo_electronico: string /* LISTO */;
  telefono: number /* LISTO */;
  estado: string /* NO */;
  genero: string /* NOSE */;
  fecha_de_nacimiento: Date;
  pais_de_nacimiento: string;
  documento_de_identidad: string;
  numero_documento_id: string;
  direccion: string;
  ciudad: string;
  provincia: string;
  codigo_postal: number;
  pais_de_residencia: string;
  programa_cursar: string;
  permiso: string;
  colectivo: string[];
  educacion: string;
  estudio_mas_alto: string;
  situacion_profesional: string;
  intereses_actuales: string;
  dedicacion_semanal: number;
  acceso_internet_dispositivos: string;
  formacion_online: boolean;
  razones_para_unir: string;
  encontrar_programa: string;
  mas_informacion: string;
}
