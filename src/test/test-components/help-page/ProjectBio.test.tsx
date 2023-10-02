import ProjectBio from "@/components/help-page/ProjectBio";
import { render, screen, } from "@testing-library/react";


  test('renders ProjectBio component with correct content', async() => {
    render(<ProjectBio />);
    
      const intro = screen.getByText(/¡Bienvenido a Work in Tech, la solución tecnológica que ha llegado para revolucionar la forma en que gestionas a tus aspirantes y candidatos! /i);
      expect(intro).toBeTruthy();

  });