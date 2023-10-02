import { render, screen } from "@testing-library/react";
import FAQPage from "@/pages/HelpPage";


test('renders FAQPage component', () => {
    render(<FAQPage />);

    const projectBioElement = screen.getByTestId("project-bio");
    expect(projectBioElement).toBeTruthy();

     const faqItemElement = screen.getByTestId("faq-item");
    expect(faqItemElement).toBeTruthy();

    const witLogoElement = screen.getByAltText('Work in Tech Logo');
    expect(witLogoElement).toBeTruthy();
  });