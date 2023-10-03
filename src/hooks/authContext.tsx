import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext<AuthContextValues | undefined>(undefined);

interface AuthContextValues {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
    token: string | null;
  }

export const useAuth = (): AuthContextValues => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user is logged in based on the token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    setIsLoggedIn(true);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const values: AuthContextValues = {
    isLoggedIn,
    login,
    logout,
    token,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};