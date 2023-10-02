import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { Applicant } from "@/interfaces/applicant.interface";
import { useUpdateApplicant } from "@/services/UpdateApplicant";

type ModalProps = Partial<Applicant> & {
  textButton: string | React.ReactNode;
  invitaciones: number;
  telefono: string | number;
  estado: string;
  id: string | number;
};

function Modal({
  textButton,
  nombre,
  programa_cursar,
  apellidos,
  telefono,
  invitaciones,
  estado,
  id,
}: ModalProps) {
  const updateApplicantMutation = useUpdateApplicant();
  const incrementInvitations = async () => {
    try {
      await updateApplicantMutation.mutateAsync({
        id,
        invitaciones: invitaciones + 1,
      });
      // Aquí puedes agregar código adicional si lo necesitas
    } catch (error) {
      console.error("Error al incrementar invitaciones:", error);
    }
  };

  const [open, setOpen] = useState(false);
  //   Refactorizar esta parte??
  const [mensaje, setMensaje] = useState(
    `Hola ${nombre}! Soy Daniela, de Somos F5. Te escribo para recordarte que mañana nos vemos en la Sesión de Selección para el BOOTCAMP DE ${programa_cursar?.toUpperCase()} :) La sesión empieza a las 15:30h (hora peninsular). Hablaremos del programa y haremos una entrevista personal. Por favor, confírmame si estarás. La asistencia es obligatoria para entrar en el bootcamp. Aquí te dejo el enlace de Zoom: https://us06web.zoom.us/j/6368867811 Un saludo, Dani`
  );

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje(event.target.value);
  };

  const handleSendMessage = (
    telefono: number | string,
    mensaje: string,
    invitaciones: number,
    id: string | number
  ): void => {
    const whatsappURL = `https://web.whatsapp.com/send?phone=34${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;

    const nuevasInvitaciones = invitaciones + 1;
    console.log(nuevasInvitaciones);
    console.log(estado);
    console.log(id);

    window.open(whatsappURL, "_blank");

    // Añadir funcionalidad para cambiar estado en la base de datos del campo estado a Invitado

    alert(mensaje + telefono);
    setOpen(false);
  };

  const handleCloseModal = () => {
    console.log("cerrar");

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <Button variant="secondary" onClick={handleCloseModal}>
          Atras
        </Button>
        <Button
          onClick={() => {
            incrementInvitations();
            handleSendMessage(telefono, mensaje, invitaciones, id);
          }}
          className="bg-green2 hover:bg-yellow2"
        >
          <IoLogoWhatsapp className="mr-2 h-4 w-4" /> Enviar Mensaje
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
