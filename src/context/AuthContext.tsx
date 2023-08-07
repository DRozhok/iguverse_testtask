import { createContext } from "react";
import { User } from "../constants/User";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
  clearSession: () => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: (user: User | null) => {},
  clearSession: () => {},
});
