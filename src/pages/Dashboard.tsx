import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde React Router

function Dashboard() {
  const navigate = useNavigate(); // Obtiene la función de navegación

  // Supongamos que tienes información de usuario disponible, como un objeto 'user'.
  const user = {
    name: 'Nombre del Usuario',
    email: 'usuario@example.com',
    // ...otros datos del usuario
  };

  // Función para navegar a la página de perfil del usuario
  const goToProfile = () => {
    navigate('/perfil'); // Cambia la ruta según tus necesidades
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        {/* Contenido del sidebar */}
        <ul>
          <li>Inicio</li>
          <li>Nuevos Aspirantes</li>
          <li>Aspirantes a revisar</li>
          <li>Entrevistas</li>
          <li>Seguimientos</li>
          <li onClick={goToProfile}>Perfil</li> {/* Agrega un elemento para ir al perfil */}
        </ul>
      </div>
      <div className="main-content">
        {/* Contenido principal */}
        <div>
          <h1>Bienvenido, {user.name}</h1>
          <p>Email: {user.email}</p>
          {/* Muestra otros detalles del usuario aquí */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

