/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Field, FieldProps } from 'formik';

interface CustomInputProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
  expandText: string;
  required: boolean;
  values: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, type, id, placeholder, expandText, required, values, ...rest }) => {
  return (
    <Field 
        name={name} 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        expandText={expandText} 
        required={required}>
        {(field: FieldProps<any>) => (
            <input
            {...field.field} // Use field.field to access the input field properties
            value={values[name] || ''}
            {...rest}
            />
        )}
    </Field>
  );
};

export default CustomInput;








  
  
  
