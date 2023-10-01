import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent } from "@testing-library/react";
import { DocumentoIdentidad } from "@/components/ui/form/DocumentoIdentidad";



describe("DocumentoIdentidad component", () => {
    test('should render the question for "Documento de identidad"', () => {
      render(<DocumentoIdentidad />);
      
      expect(screen.getByText("Documento de Identidad")).toBeTruthy();
    });
  
  test('should render "indícanos qué tipo de documento de identidad" question when "Otro" is selected', () => {
    render(<DocumentoIdentidad />);
    
    fireEvent.click(screen.getByLabelText("Otro"));

    expect(screen.getByLabelText("Si dispones de otro documento de identidad, por favor indícanos qué tipo de documento de identidad")).toBeTruthy();
  });

  test('should render "Permiso" question when "NIE" or "Otro" is selected', () => {
    render(<DocumentoIdentidad />);
    
    fireEvent.click(screen.getByLabelText("NIE"));

    expect(screen.getByLabelText("Indica el carácter de tu permiso en España")).toBeTruthy();

    fireEvent.click(screen.getByLabelText("Otro"));

    expect(screen.getByLabelText("Indica el carácter de tu permiso en España")).toBeTruthy();
  });
});