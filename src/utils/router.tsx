import {
    createBrowserRouter,
  } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import AspirantsTable from "@/components/AspirantsTable";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <AspirantsTable/>,
    },
    {
        path: "/newapplicant/register",
        element: <FormPage/>,
      },
  ]);
  