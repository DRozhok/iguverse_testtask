import { Alert, Button } from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import React, { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { getFacebookProfile } from "../api/facebook";
import { StackActions, useNavigation } from "@react-navigation/native";

const FacebookSignInButton = () => {
  const { setUser } = useContext(AuthContext);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "1024162162277783",
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (response?.type === "success") {
      getUserInfo(response.authentication?.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token: string | undefined) => {
    if (!token) return;
    try {
      const user = await getFacebookProfile(token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigation.dispatch(StackActions.replace("EmailScreen"));
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };

  return (
    <Button
      disabled={!request}
      title="Sign in with Facebook"
      onPress={() => promptAsync()}
    />
  );
};

export default FacebookSignInButton;
