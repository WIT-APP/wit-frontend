import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/authContext";
import { ApplicantDetails } from "./pages/ApplicantDetailsPage";
import { ApplicantInterview } from "./pages/ApplicantInterviewPage";
import { NewInterview } from "./pages/NewInterviewPage";
import Dashboard from "./pages/Dashboard";
import { FormPage } from "./pages/FormPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import PreApprovedPage from "./pages/PreApprovedPage";
import TablePage from "./pages/TablePage";
import { ProtectedRoute } from "./services/ProtectedRoute";
import Summary from "./pages/Summary";

function App() {
  return (
   
    <AuthProvider>  
      <Routes>
        <Route
          path="Login"
          element={
            <LoginPage />
          }
        />
        <Route
          path="newapplicant/register"
          element={
            <FormPage />
          }
        />
        <Route
          path="applicantDetails/:id"
          element={
            <ProtectedRoute>
            <ApplicantDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="newInterview/:id"
          element={
            <ProtectedRoute>
              <NewInterview />
              </ProtectedRoute>
          }
        />
        <Route
          path="applicantInterview/:id"
          element={
            <ProtectedRoute>
              <ApplicantInterview />
              </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            path=":Aplicante"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="Preaprobado"
            element={
              <ProtectedRoute>
                <PreApprovedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Rechazado"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Invitado"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Entrevistado"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Matriculado"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Certificado"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
          <Route
            path=":Baja"
            element={
              <ProtectedRoute>
                <TablePage />
              </ProtectedRoute>
            }
          />
           <Route
            path="Estadisticas"
            element={
              <ProtectedRoute>
                <Summary />
              </ProtectedRoute>
            }
          />
          <Route
            path="Ayuda"
            element={
              <ProtectedRoute>
                <HelpPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}


export default App;
