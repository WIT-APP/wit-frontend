import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import Dashboard from "@/pages/Dashboard";
import AspirantsTable from "@/components/AspirantsTable";
import ApplicantPage from "@/pages/ApplicantPage";
import RejectedPage from "@/pages/RejectedPage";
import InvitedPage from "@/pages/InvitedPage";
import InterviewedPage from "@/pages/InterviewedPage";
import EnrolledPage from "@/pages/EnrolledPage";
import UnlistedPage from "@/pages/UnlistedPage";
import PreApprovedPage from "@/pages/PreApprovedPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/Aplicante",
        element: <ApplicantPage />,
      },
      {
        path: "/Preaprobado",
        element: <PreApprovedPage />,
      },
      {
        path: "/Rechazado",
        element: <RejectedPage />,
      },
      {
        path: "/Invitado",
        element: <InvitedPage />,
      },
      {
        path: "/Entrevistado",
        element: <InterviewedPage />,
      },
      {
        path: "/Matriculado",
        element: <EnrolledPage />,
      },
      {
        path: "/Baja",
        element: <UnlistedPage />,
      },
    ],
  },
  {
    path: "/newapplicant/register",
    element: <FormPage />,
  },
]);
