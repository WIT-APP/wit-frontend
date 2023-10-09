import FAQItem from "@/components/help-page/FAQItem";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


  test('renders ProjectBio component with correct content', async() => {
    render(<FAQItem />);

      const title = screen.getByText(/Preguntas Frecuentes/i);
      expect(title).toBeTruthy();

      const question1 = screen.getByText(/¿La barra superior que uso tiene?/i)
      expect(question1).toBeTruthy();

      userEvent.click(question1)
      await waitFor(() => {
          const answer1 = screen.getByText(
              /Una vez que hayas iniciado sesión en nuestra plataforma, lo primero que notarás en tu pantalla es la lista de aplicantes preaprobados./i
          );
          expect(answer1).toBeTruthy();

      })    
  });