import {
    createBrowserRouter,
  } from "react-router-dom";
import { FormPage } from "../pages/FormPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/newapplicant/register",
        element: <FormPage/>,
      },
  ]);
  