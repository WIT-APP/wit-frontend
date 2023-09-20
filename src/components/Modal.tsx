import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Applicant } from "./data-table/columns";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";

type ModalProps = Partial<Applicant> & {
  textButton: string | React.ReactNode;
};

function Modal({ textButton, nombre, programa_cursar, apellidos }: ModalProps) {
  const [mensaje, setMensaje] = useState(
    `Hola ${nombre}! Soy Daniela, de Somos F5. Te escribo para recordarte que mañana nos vemos en la Sesión de Selección para el BOOTCAMP DE ${programa_cursar?.toUpperCase()} :) La sesión empieza a las 15:30h (hora peninsular). Hablaremos del programa y haremos una entrevista personal. Por favor, confírmame si estarás. La asistencia es obligatoria para entrar en el bootcamp. Aquí te dejo el enlace de Zoom: https://us06web.zoom.us/j/6368867811 Un saludo, Dani`
  );

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>{textButton}</DialogTrigger>
      <DialogContent className="max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-green my-5 ">
            Enviar mensaje de WhtasApp a {nombre} {apellidos} para invitarlo a
            la Sesión de Selección
          </DialogTitle>
          <DialogDescription>
            <Textarea
              value={mensaje}
              onChange={handleTextareaChange}
              style={{ height: "auto", minHeight: "200px" }}
            />
          </DialogDescription>
        </DialogHeader>
        <Button variant="ghost">
          Atras
        </Button>
        <Button className="bg-green hover:bg-yellow">
          <IoLogoWhatsapp className="mr-2 h-4 w-4" /> Enviar Mensaje
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
