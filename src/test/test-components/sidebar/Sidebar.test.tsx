import Sidebar, { SidebarContext } from "@/components/sidebar/Sidebar";
import { render, fireEvent } from "@testing-library/react";

const mockChildren = (
  <li>
    <a href="#">Mock Child</a>
  </li>
);

describe("Sidebar Component", () => {
  test("should render correctly", () => {
    const { getByText } = render(<Sidebar>{mockChildren}</Sidebar>);

    expect(getByText("Mock Child")).toBeTruthy();
  });
  test("should render the image element", () => {
    const { getByAltText } = render(
      <SidebarContext.Provider value={{ expanded: true }}>
        <Sidebar>{mockChildren}</Sidebar>
      </SidebarContext.Provider>
    );
    const image = getByAltText("Work in tech logo");
    expect(image).toBeTruthy();
  });

  test("should render the p element", () => {
    const { getByText } = render(
      <SidebarContext.Provider value={{ expanded: true }}>
        <Sidebar>{mockChildren}</Sidebar>
      </SidebarContext.Provider>
    );
    const pElement = getByText("WORK IN TECH");
    expect(pElement).toBeTruthy();
  });

  test("should render the button element", () => {
    const { getByTestId } = render(
      <SidebarContext.Provider value={{ expanded: true }}>
        <Sidebar>{mockChildren}</Sidebar>
      </SidebarContext.Provider>
    );
    const button = getByTestId("toggle-button");
    expect(button).toBeTruthy();
  });

  test("should toggle expansion when button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <SidebarContext.Provider value={{ expanded: true }}>
        <Sidebar>{mockChildren}</Sidebar>
      </SidebarContext.Provider>
    );
    const img = getByRole("img", { name: "Work in tech logo" });

    expect(img.classList.contains("w-0")).toBe(false);

    const button = getByTestId("toggle-button");
    fireEvent.click(button);

    expect(img.classList.contains("w-10")).toBe(false);
  });

  test("should provide the correct context value", () => {
    let expandedValue;

    render(
      <SidebarContext.Provider value={{ expanded: true }}>
        <SidebarContext.Consumer>
          {(context) => {
            expandedValue = context.expanded;
            return null;
          }}
        </SidebarContext.Consumer>
      </SidebarContext.Provider>
    );

    expect(expandedValue).toBe(true);
  });
});
