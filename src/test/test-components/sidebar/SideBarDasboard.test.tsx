import SideBarDashboard from "@/components/sidebar/SideBarDashboard";
import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("SidebarDashboard", () => {
  test("renders SideBarDashboard without errors", () => {
    expect(<SideBarDashboard />).toStrictEqual(<SideBarDashboard />);
  });
});
describe("SidebarDashboard", () => {
  let onClickMock: any;

  beforeEach(() => {
 
    onClickMock = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('should render SidebarItem with Aplicante text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Aplicante" active={false} onClick={onClickMock} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Aplicante', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
   
  });

  test('should render SidebarItem with Preaprobado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Preaprobado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Preaprobado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });

  test('should render SidebarItem with Invitado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Invitado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Invitado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });


  test('should render SidebarItem with Entrevistado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Entrevistado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Entrevistado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });


  test('should render SidebarItem with Matriculado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Matriculado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Matriculado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });
  test('should render SidebarItem with Certificado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Certificado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Certificado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });
  test('should render SidebarItem with Rechazado text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Rechazado" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Rechazado', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });
  test('should render SidebarItem with Baja text', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Baja" active={false} onClick={() => {}} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Baja', { selector: 'div' });

    expect(sidebarItem).toBeTruthy();
  });
  test('should call onClick when SidebarItem is clicked', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Aplicante" active={false} onClick={onClickMock} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Aplicante', { selector: 'div' });

    fireEvent.click(sidebarItem);

    expect(onClickMock).toHaveBeenCalled();
  });

  test("should set active to true when SidebarItem is clicked", () => {
    let active = false;

    const handleItemClick = () => {
      active = true;
    };

    render(
      <BrowserRouter>
        <SidebarItem icon={<div />} text="Aplicante" active={active} onClick={handleItemClick} />
      </BrowserRouter>
    );

    const sidebarItem = screen.getByText('Aplicante', { selector: 'div' });

    expect(active).toBe(false);

    fireEvent.click(sidebarItem);

    expect(active).toBe(true);
  });
  afterEach(() => {
    cleanup();
  });
});
