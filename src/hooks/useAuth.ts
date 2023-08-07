import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../constants/User";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getLocalUser();
  }, []);

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  };

  const clearSession = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  return { user, setUser, clearSession };
};
