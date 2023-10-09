import { useAuth } from "@/hooks/authContext";
import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";


interface ProtectedRouteProps {
    children?: ReactNode;
  }
  
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
  
    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login');
      }
    }, [isLoggedIn, navigate]);
  
    return <React.Fragment>{isLoggedIn ? children : null}</React.Fragment>;
  };

