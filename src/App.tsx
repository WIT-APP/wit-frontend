import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import AspirantsTable from "./components/AspirantsTable";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
    )

}

export default App;
