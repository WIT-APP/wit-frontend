/* import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import Dashboard from "@/pages/Dashboard";
import TablePage from "@/pages/TablePage";
import PreApprovedPage from "@/pages/PreApprovedPage";
import SettingsPage from "@/pages/SettingsPage";
import HelpPage from "@/pages/HelpPage";
import LoginPage from "@/pages/LoginPage";
import { ApplicantDetails } from "@/components/ApplicantDetails";
import { ApplicantInterview } from "@/components/ApplicantInterview";
import { NewInterview } from "@/components/NewInterview";
import { ProtectedRoute } from "@/components/ProtectedRoute"; */
/* 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute path="/" element={<Dashboard />} />
  },
  {
    path: "/:Aplicante",
    element: <ProtectedRoute path='/:Aplicante' element={<TablePage />} />
  },
  {
    path: "/Preaprobado",
    element: <ProtectedRoute path='/:Rechazado' element={<PreApprovedPage />} />
  },
  {
    path: "/:Rechazado",
    element: <ProtectedRoute path='/:Rechazado' element={<TablePage />} />
  },
  {
    path: "/:Invitado",
    element: <ProtectedRoute path='/:Invitado' element={<TablePage />} />
  },
  {
    path: "/:Admitido",
    element: <ProtectedRoute path='/:Admitido' element={<TablePage />} />
  },
  {
    path: "/:Confirmado",
    element: <ProtectedRoute path='/:Confirmado' element={<TablePage />} />
  },
  {
    path: "/:Entrevistado",
    element: <ProtectedRoute path='/:Entrevistado' element={<TablePage />} />
  },
  {
    path: "/:Matriculado",
    element: <ProtectedRoute path='/:Matriculado' element={<TablePage />} />
  },
  {
    path: "/:Certificado",
    element: <ProtectedRoute path='/:Certificado' element={<TablePage />} />
  },
  {
    path: "/:Baja",
    element: <ProtectedRoute path='/:Baja' element={<TablePage />} />
  },
  {
    path: "/Ajustes",
    element: <ProtectedRoute path='/Ajustes' element={<SettingsPage />} />
  },
  {
    path: "/Ayuda",
    element: <ProtectedRoute path='/Ayuda' element={<HelpPage />} />
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/newapplicant/register",
    element: <FormPage />
  },
  {
    path: "/applicantDetails/:id",
    element: <ProtectedRoute element={<ApplicantDetails />} />
  },
  {
    path: "/newInterview/:id",
    element: <ProtectedRoute path='/newInterview/:id' element={<NewInterview />} />
  },
  {
    path: "/applicantInterview/:id",
    element: <ProtectedRoute path='/applicantInterview/:id' element={<ApplicantInterview />} />
  }
]); */
/*   {
    path: "/",
    element: <Dashboard />,
    children: [
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
 */

/* 
export const AppRouter = () => {
 return (
   <Routes>
     <Route
       path="/"
       element={<Dashboard />}
     >
       <Route path=":Aplicante" element={<TablePage />} />
       <Route path="Preaprobado" element={<PreApprovedPage />} />
       <Route path=":Rechazado" element={<TablePage />} />
       <Route path=":Invitado" element={<TablePage />} />
       <Route path=":Entrevistado" element={<TablePage />} />
       <Route path=":Matriculado" element={<TablePage />} />
       <Route path=":Certificado" element={<TablePage />} />
       <Route path=":Baja" element={<TablePage />} />
       <Route path="Ajustes" element={<SettingsPage />} />
       <Route path="Ayuda" element={<HelpPage />} />
     </Route>
     <Route path="Login" element={<LoginPage />} />
     <Route path="newapplicant/register" element={<FormPage />} />
     <Route path="applicantDetails/:id" element={<ApplicantDetails />} />
     <Route path="newInterview/:id" element={<NewInterview />} />
     <Route path="applicantInterview/:id" element={<ApplicantInterview />} />
   </Routes>
 );
}; */
 