import { Alert, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { getGoogleProfile } from "../api/google";
import { StackActions, useNavigation } from "@react-navigation/native";

const GoogleSignInButton = () => {
  const { setUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "239713322779-9pcbi2oppatlkffdr8tu6anig9oq0hmj.apps.googleusercontent.com",
    iosClientId:
      "239713322779-uh77bcc8pui0mj1798vdam9nffrnqe6b.apps.googleusercontent.com",
    webClientId:
      "239713322779-nffr9ev9573d6vco4hdtpp3v676g5umn.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      getUserInfo(response.authentication?.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token: string | undefined) => {
    if (!token) return;
    try {
      const user = await getGoogleProfile(token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigation.dispatch(StackActions.replace("EmailScreen"));
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };

  return (
    <Button
      title="Sign in with Google"
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default GoogleSignInButton;
