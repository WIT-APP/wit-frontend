import { useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  Users,
  UserCheck,
  X,
  MailCheck,
  MessageSquarePlus,
  GraduationCap,
  DoorOpen,
  Settings,
  LifeBuoy,
  ClipboardSignature,
} from "lucide-react";

export default function SideBarDashboard() {
  const [activeItem, setActiveItem] = useState("Aplicante");

  const handleItemClick = (text) => {
    // Update the activeItem state when a sidebar item is clicked
    setActiveItem(text);
  };

  return (
    <div>
      <Sidebar>
        <SidebarItem
          icon={<Users size={20} />}
          text="Aplicante"
          active={activeItem === "Aplicante"}
          onClick={() => handleItemClick("Aplicante")}
        />
        <SidebarItem
          icon={<UserCheck size={20} />}
          text="Preaprobado"
          active={activeItem === "Preaprobado"}
          onClick={() => handleItemClick("Preaprobado")}
        />
        <SidebarItem
          icon={<X size={20} />}
          text="Rechazado"
          active={activeItem === "Rechazado"}
          onClick={() => handleItemClick("Rechazado")}
        />
        <SidebarItem
          icon={<MailCheck size={20} />}
          text="Invitado"
          active={activeItem === "Invitado"}
          onClick={() => handleItemClick("Invitado")}
        />
        <SidebarItem
          icon={<MessageSquarePlus size={20} />}
          text="Entrevistado"
          active={activeItem === "Entrevistado"}
          onClick={() => handleItemClick("Entrevistado")}
        />
        <SidebarItem
          icon={<ClipboardSignature size={20} />}
          text="Matriculado"
          active={activeItem === "Matriculado"}
          onClick={() => handleItemClick("Matriculado")}
        />
        <SidebarItem
          icon={<GraduationCap size={20} />}
          text="Certificado"
          active={activeItem === "Certificado"}
          onClick={() => handleItemClick("Certificado")}
        />
        <SidebarItem
          icon={<DoorOpen size={20} />}
          text="Baja"
          active={activeItem === "Baja"}
          onClick={() => handleItemClick("Baja")}
        />
        <hr className="my-3" />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Ajustes"
          active={activeItem === "Ajustes"}
          onClick={() => handleItemClick("Ajustes")}
        />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Ayuda"
          active={activeItem === "Ayuda"}
          onClick={() => handleItemClick("Ayuda")}
        />
      </Sidebar>
    </div>
  );
}
