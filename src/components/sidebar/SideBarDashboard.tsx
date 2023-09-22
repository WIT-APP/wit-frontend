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
} from "lucide-react";

export default function SideBarDashboard() {
  return (
    <div>
      <Sidebar>
        <SidebarItem icon={<Users size={20} />} text="Aplicante" alert />
        <SidebarItem icon={<UserCheck size={20} />} text="Preaprobado" />
        <SidebarItem icon={<X size={20} />} text="Rechazado" />
        <SidebarItem icon={<MailCheck size={20} />} text="Invitado" />
        <SidebarItem
          icon={<MessageSquarePlus size={20} />}
          text="Entrevistado"
        />
        <SidebarItem icon={<GraduationCap size={20} />} text="Matriculado" />
        <SidebarItem icon={<DoorOpen size={20} />} text="Baja" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </div>
  );
}
