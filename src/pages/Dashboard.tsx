import Sidebar, { SidebarItem } from "../components/sidebar/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { Outlet, useLoaderData, Link } from "react-router";

export async function action() {
  const tables = await createTable();
  return { tables };
}

function Dashboard() {
  const { tables } = useLoaderData();
  // const navigate = useNavigate(); // Obtiene la función de navegación

  // // Supongamos que tienes información de usuario disponible, como un objeto 'user'.
  // const user = {
  //   name: 'Nombre del Usuario',
  //   email: 'usuario@example.com',
  //   // ...otros datos del usuario
  // };

  // // Función para navegar a la página de perfil del usuario
  // const goToProfile = () => {
  //   navigate('/perfil'); // Cambia la ruta según tus necesidades
  // };

  // return (
  //   <div className="dashboard">
  //     <div className="sidebar">
  //       {/* Contenido del sidebar */}
  //       <ul>
  //         <li>Inicio</li>
  //         <li>Nuevos Aspirantes</li>
  //         <li>Aspirantes a revisar</li>
  //         <li>Entrevistas</li>
  //         <li>Seguimientos</li>
  //         <li onClick={goToProfile}>Perfil</li> {/* Agrega un elemento para ir al perfil */}
  //       </ul>
  //     </div>
  //     <div className="main-content">
  //       {/* Contenido principal */}
  //       <div>
  //         <h1>Bienvenido, {user.name}</h1>
  //         <p>Email: {user.email}</p>
  //         {/* Muestra otros detalles del usuario aquí */}
  //       </div>
  //     </div>
  //   </div>
  // );
  return(
    <div >
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            alert
          />
          <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
          <SidebarItem icon={<UserCircle size={20} />} text="User" />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
          <SidebarItem icon={<Package size={20} />} text="Orders" alert />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <Outlet/>
    </div>
  
  )
}

export default Dashboard;

