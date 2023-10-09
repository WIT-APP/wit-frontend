import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import Dashboard from "@/pages/Dashboard";
import TablePage from "@/pages/TablePage";
import PreApprovedPage from "@/pages/PreApprovedPage";
import HelpPage from "@/pages/HelpPage";
import LoginPage from "@/pages/LoginPage";
import { ApplicantDetails } from "@/pages/ApplicantDetailsPage";
import { ApplicantInterview } from "@/pages/ApplicantInterviewPage";
import { NewInterview } from "@/pages/NewInterviewPage";
import Summary from "@/pages/Summary";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/Estadisticas",
        element: <Summary />,
      },
      {
        path: "/:Aplicante",
        element: <TablePage />,
      },
      {
        path: "/Preaprobado",
        element: <PreApprovedPage />,
      },
      {
        path: "/:Rechazado",
        element: <TablePage />,
      },
      {
        path: "/:Invitado",
        element: <TablePage />,
      },
      {
        path: "/:Entrevistado",
        element: <TablePage />,
      },
      {
        path: "/:Matriculado",
        element: <TablePage />,
      },
      {
        path: "/:Certificado",
        element: <TablePage />,
      },
      {
        path: "/:Baja",
        element: <TablePage />,
      },
      {
        path: "/Ayuda",
        element: <HelpPage />,
      },
    ],
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/newapplicant/register",
    element: <FormPage />,
  },
  {
    path: "/applicantDetails/:id",
    element: <ApplicantDetails />,
  },
  {
    path: "/newInterview/:id",
    element: <NewInterview />
  },
  {
    path: "/applicantInterview/:id",
    element: <ApplicantInterview />
  }
]);
