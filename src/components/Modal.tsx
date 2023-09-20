import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Applicant } from "./data-table/columns"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

  type ModalProps = Partial<Applicant> & {
    textButton: string | React.ReactNode

  }
  
function Modal({textButton,nombre, programa_cursar }: ModalProps) {
    const [mensaje, setMensaje] = useState(`Hola ${nombre}! Soy Daniela, de Somos F5. Te escribo para recordarte que mañana nos vemos en la Sesión de Selección para el BOOTCAMP DE ${programa_cursar?.toUpperCase()} :) La sesión empieza a las 15:30h (hora peninsular). Hablaremos del programa y haremos una entrevista personal. Por favor, confírmame si estarás. La asistencia es obligatoria para entrar en el bootcamp. Aquí te dejo el enlace de Zoom: https://us06web.zoom.us/j/6368867811 Un saludo, Dani`);

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMensaje(event.target.value);
      };
    
  return (
    <Dialog>
  <DialogTrigger>{textButton}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure absolutely sure { nombre }?</DialogTitle>
      <DialogDescription>
      <Textarea
  value={mensaje}
  onChange={handleTextareaChange}
/>



     
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Modal