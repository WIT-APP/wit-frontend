import * as Yup from 'yup';

export interface FormValues {
    [key: string]: string;
  }

  
export const validationSchema = () => (
    Yup.lazy(() =>
          
        Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Campo Obligatorio'),
    apellidos: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Los apellidos son obligatorios'),
    correo_electronico: Yup.string()
    .email('Formato de correo electrónico inválido')
    .required('Campo Obligatorio'),
    telefono: Yup.string()
    .required('Campo Obligatorio')
    .min(9, 'El número de teléfono debe tener al menos 9 dígitos')
    .test('is-valid-number', 'El número de teléfono no es válido', (value) => {
      // Check if the value is a valid string
      return typeof value === 'string' && /^\d{9,}$/.test(value);
    }),
    genero: Yup.string().required('Campo Obligatorio'),
    fecha_de_nacimiento: Yup.string()
    .required('La fecha de nacimiento es obligatoria'),
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
    dedicacion_semanal: Yup.string().required('Campo Obligatorio'),
    acceso_internet_dispositivos: Yup.string().required('Campo Obligatorio'),
    razones_para_unir: Yup.string().required('Campo Obligatorio'),
    encontrar_programa: Yup.string().required('Campo Obligatorio'),

  })
  ))