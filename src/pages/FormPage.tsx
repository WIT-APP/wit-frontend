//carga los datos de react query para pasarselos al component form 
import React from 'react'
import { PersonalInfo } from '../components/form/PersonalInfo'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/Button'

export const FormPage = () => {
  return (
    <div>
        <PersonalInfo/>
        <Footer/>
        <Button children={'Siguiente'}/>
    </div>
    
  )
}
