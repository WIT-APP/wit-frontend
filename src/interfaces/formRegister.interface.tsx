import * as Yup from 'yup';
import { CreateApplicant } from './applicant.interface';

export interface FormValues {
    [key: string]: string;
  }

const isMinimumAge = (value:string)=>{
  const birthDate = new Date(value).getFullYear()
  const minimumDate = new Date();
  const compared= minimumDate.getFullYear()-18
  return birthDate < compared;
}
const isMaximumAge = (value: string) => {
  const birthDate = new Date(value);
  const maximumBirthDate = new Date();
  maximumBirthDate.setFullYear(maximumBirthDate.getFullYear() - 100);
  return birthDate > maximumBirthDate;
};

export const validationSchema = () => (
    Yup.lazy(() =>
          
        Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'El nombre es muy corto!')
    .max(50, 'El nombre es demasiado largo!')
    .required('Campo Obligatorio'),
    apellidos: Yup.string()
    .required('Campo Obligatorio'),
    correo_electronico: Yup.string()
    .required('Campo Obligatorio')
    .test('is-valid-email', 'Formato de correo electrónico inválido', (value) => {
      return typeof value === 'string' && /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(value);
    }),
    telefono: Yup.string()
    .required('Campo Obligatorio')
    .min(9, 'El número de teléfono debe tener al menos 8 dígitos')
    .max(12, 'El número de teléfono debe tener como máximo 11 caracteres')
    .test('is-valid-number', 'El número de teléfono no es válido', (value) => {
      return typeof value === 'string' && /^\d{9,}$/.test(value);
    }),
    genero: Yup.string().required('Campo Obligatorio'),
    fecha_de_nacimiento: Yup.string()
    .required('La fecha de nacimiento es obligatoria')
    .test('is-minimum-age', 'Debe tener al menos 18 años de edad', function (value) {
      return isMinimumAge(value);
    })
    .test('is-maximum-age', 'Rango de edad elevado', function (value) {
      return isMaximumAge(value);
    }),
    numero_documento_id: Yup.string().required('Campo Obligatorio'),
    documento_de_identidad: Yup.string().required('Campo Obligatorio'),
    direccion: Yup.string().required('Campo Obligatorio'),
    ciudad: Yup.string().required('Campo Obligatorio'),
    provincia: Yup.string().required('Campo Obligatorio'),
    pais_de_residencia: Yup.string().required('Campo Obligatorio'),
    codigo_postal: Yup.string().required('Campo Obligatorio'),
    programa_cursar: Yup.string().required('Campo Obligatorio'),
    colectivo: Yup.array().required('Campo Obligatorio'),
    educacion: Yup.string().required('Campo Obligatorio'),
    estudio_mas_alto: Yup.string().required('Campo Obligatorio'),
    situacion_profesional: Yup.string().required('Campo Obligatorio'),
    intereses_actuales: Yup.string().required('Campo Obligatorio'),
    dedicacion_semanal: Yup.string()    
    .required('Campo Obligatorio')
    .test('is-valid-number', 'El número de horas o formato no es válido', (value) => {
      const numericValue = parseInt(value);
      return !isNaN(numericValue) && numericValue >= 0 && numericValue <= 24;
    })
    .min(1, 'El número de horas debe ser mayor o igual a 1')
    .max(24, 'El número de horas debe ser menor o igual a 24'),
    acceso_internet_dispositivos: Yup.string().required('Campo Obligatorio'),
    razones_para_unir: Yup.string().required('Campo Obligatorio'),
    encontrar_programa: Yup.string().required('Campo Obligatorio'),

  })
  ))

  export const initialValues: CreateApplicant = {
    nombre: '',
    apellidos: '',
    correo_electronico: '',
    telefono: '',
    genero: '',
    fecha_de_nacimiento: '',
    numero_documento_id: '',
    documento_de_identidad: '',
    tipo_documento_identidad: '',
    permiso: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    pais_de_residencia: '',
    codigo_postal:'' ,
    programa_cursar: '',
    colectivo: [],
    educacion: '',
    estudio_mas_alto: '',
    situacion_profesional: '',
    intereses_actuales: '',
    dedicacion_semanal: '',
    acceso_internet_dispositivos: '',
    formacion_online: 'No',
    razones_para_unir: '',
    encontrar_programa: '',
    mas_informacion: '',
    pais_de_nacimiento: ''
  };