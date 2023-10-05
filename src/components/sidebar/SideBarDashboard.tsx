import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Users,
  UserCheck,
  XSquare,
  CheckSquare,
  MailCheck,
  ShieldPlus,
  MessageSquarePlus,
  GraduationCap,
  DoorOpen,
  Settings,
  LifeBuoy,
  ClipboardSignature,
  LineChart,
  LogOut 
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { useAuth } from "@/hooks/authContext";
import { useNavigate } from "react-router-dom";

export default function SideBarDashboard() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate('/login');
  };

  return (
    <div>
      <Sidebar>
      <SidebarItem
          icon={<LineChart size={20} />}
          text="Estadisticas"
          active={activeItem === "Estadisticas"}
          onClick={() => handleItemClick("Estadisticas")}
        />
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
          icon={<MailCheck size={20} />}
          text="Invitado"
          active={activeItem === "Invitado"}
          onClick={() => handleItemClick("Invitado")}
        />
        <SidebarItem
          icon={<CheckSquare size={20} />}
          text="Confirmado"
          active={activeItem === "Confirmado"}
          onClick={() => handleItemClick("Confirmado")}
        />
        <SidebarItem
          icon={<MessageSquarePlus size={20} />}
          text="Entrevistado"
          active={activeItem === "Entrevistado"}
          onClick={() => handleItemClick("Entrevistado")}
        />
        <SidebarItem
          icon={<ShieldPlus size={20} />}
          text="Admitido"
          active={activeItem === "Admitido"}
          onClick={() => handleItemClick("Admitido")}
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
          icon={<XSquare size={20} />}
          text="Rechazado"
          active={activeItem === "Rechazado"}
          onClick={() => handleItemClick("Rechazado")}
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
        <SidebarItem
          icon={<LogOut size={20} />}
          text="Logout"
          active={activeItem === "Logout"}
          onClick={handleLogout}
        />
      </Sidebar>
    </div>
  );
}
