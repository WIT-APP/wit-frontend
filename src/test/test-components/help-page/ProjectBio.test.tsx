import ProjectBio from "@/components/help-page/ProjectBio";
import { render, screen, } from "@testing-library/react";


  test('renders ProjectBio component with correct content', async() => {
    render(<ProjectBio />);
    
      const intro = screen.getByText(/Una vez que hayas iniciado sesión en nuestra plataforma, lo primero que notarás en tu pantalla es la lista de aplicantes preaprobados. Estos aplicantes cumplen con los requisitos de residencia en España y no tienen correos duplicados. En esta página, encontrarás una tabla con herramientas útiles para gestionar a los aplicantes de manera eficiente. En el panel izquierdo del dashboard, encontrarás una barra de opciones que te permitirá navegar entre aplicantes en diferentes estados. Hay un total de 10 estados disponibles./i);
      expect(intro).toBeTruthy();

  });