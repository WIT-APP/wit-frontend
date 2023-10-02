import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Asegúrate de haber instalado Formik
import * as Yup from 'yup'; // Asegúrate de haber instalado Yup para las validaciones
import { InputText } from './InputText';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Formato de correo electrónico inválido')
        .required('El correo electrónico es obligatorio'),
    confirm_email: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Los correos electrónicos no coinciden')
        .required('La confirmación del correo electrónico es obligatoria'),
});

const MyForm = () => {
    const initialValues = {
        email: '',
        confirm_email: '',
    };

    const handleSubmit = (values) => {
        // Aquí puedes manejar la lógica de envío de datos
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <InputEmail id="email" type="text" name="email" />
                <ErrorMessage name="email" component="div" className="text-red-800 font-bold text-sm mt-1" />

                <InputEmail id="confirm_email" type="text" name="confirm_email" expandText="Confirma tu correo electrónico" />
                <ErrorMessage name="confirm_email" component="div" className="text-red-800 font-bold text-sm mt-1" />

                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    );
};

export default MyForm;
