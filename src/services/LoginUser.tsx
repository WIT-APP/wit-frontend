import { UseMutationResult, useMutation } from "@tanstack/react-query";

interface LoginData {
    email: string;
    password: string;
}
const loginUser = async (loginData: LoginData) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }
  
    const result = await response.json();
    return result.access_token; // Assuming the access token is returned in the response
  };
  
  export const useLoginUser = (): UseMutationResult<string, unknown, LoginData, unknown> => {
    return useMutation(loginUser);
  };