import { useCallback, useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSession = () => {
  const navigation: any = useNavigation();

  const gotoWelcomeScreen = useCallback(() => {
    navigation.dispatch(StackActions.replace("Home"));
  }, []);

  const gotoAuthScreen = useCallback(() => {
    navigation.dispatch(StackActions.replace("EmailScreen"));
  }, []);

  const initAppFlow = useCallback(async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (!user) throw new Error("user not found");
      gotoAuthScreen();
    } catch (e: any) {
      await AsyncStorage.removeItem("user").catch(() => null);
      gotoWelcomeScreen();
    }
  }, []);

  useEffect(() => {
    initAppFlow();
  }, []);

  return null;
};

export default useSession;
