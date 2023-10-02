import FAQItem from "@/components/help-page/FAQItem";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


  test('renders ProjectBio component with correct content', async() => {
    render(<FAQItem />);

      const title = screen.getByText(/Preguntas Frecuentes/i);
      expect(title).toBeTruthy();

      const question1 = screen.getByText(/¿Cuáles son las ventajas de usar Work in Tech en lugar de métodos manuales tradicionales?/i)
      expect(question1).toBeTruthy();

      userEvent.click(question1)
      await waitFor(() => {
          const answer1 = screen.getByText(
              /Work in Tech elimina la necesidad de gestionar aspirantes de forma manual, lo que ahorra tiempo y reduce errores./i
          );
          expect(answer1).toBeTruthy();

      })    
  });