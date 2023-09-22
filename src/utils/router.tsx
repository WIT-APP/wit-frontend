import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import Dashboard from "@/pages/Dashboard";
import ApplicantPage from "@/pages/ApplicantPage";
import RejectedPage from "@/pages/RejectedPage";
import InvitedPage from "@/pages/InvitedPage";
import InterviewedPage from "@/pages/InterviewedPage";
import EnrolledPage from "@/pages/EnrolledPage";
import UnlistedPage from "@/pages/UnlistedPage";
import PreApprovedPage from "@/pages/PreApprovedPage";
import CertifiedPage from "@/pages/CertifiedPage";
import SettingsPage from "@/pages/SettingsPage";
import HelpPage from "@/pages/HelpPage";
import LoginPage from "@/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/:Aplicante",
        element: <ApplicantPage />,
      },
      {
        path: "/Preaprobado",
        element: <PreApprovedPage />,
      },
      {
        path: "/:Rechazado",
        element: <ApplicantPage />,
      },
      {
        path: "/:Invitado",
        element: <ApplicantPage />,
      },
      {
        path: "/:Entrevistado",
        element: <ApplicantPage />,
      },
      {
        path: "/:Matriculado",
        element: <ApplicantPage />,
      },
      {
        path: "/:Certificado",
        element: <ApplicantPage />,
      },
      {
        path: "/:Baja",
        element: <ApplicantPage />,
      },
      {
        path: "/Ajustes",
        element: <SettingsPage />,
      },
      {
        path: "/Ayuda",
        element: <HelpPage />,
      },
    ],
  },
  {
    path: "/:Login",
    element: <LoginPage />,
  },
  {
    path: "/newapplicant/register",
    element: <FormPage />,
  },
]);
