import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("SidebarItem rendering", () => {
  test("renders SidebarItem without errors", () => {
    const sidebarItem = render(
      <BrowserRouter>
        <SidebarItem
          icon={undefined}
          text={""}
          active={false}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </BrowserRouter>
    );

    expect(sidebarItem).toBeTruthy();
  });
  
test("renders SidebarItem with expanded context", () => {
  const mockIcon = <div data-testid="mock-icon" />;
  const text = "SomeText";
  const active = false;
  const onClick = vi.fn();

  render(
    <BrowserRouter>
      <SidebarItem icon={mockIcon} text={text} active={active} onClick={onClick} />
    </BrowserRouter>
  );

  expect(screen.getByTestId("mock-icon")).toBeTruthy();
  expect(screen.getAllByText(text)).toBeTruthy();

});
});
