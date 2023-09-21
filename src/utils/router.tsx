import {
    createBrowserRouter,
  } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import Dashboard from "@/pages/Dashboard";
import AspirantsTable from "@/components/AspirantsTable";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: '',
    },
    {
        path: "/newapplicant/register",
        element: <FormPage/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
          // {
          //   path: "/aspirantsTable",
          //   element: <AspirantsTable/>,
          // }
        ],
      },
  ]);
  