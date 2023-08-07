import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { StackActions, useNavigation } from "@react-navigation/native";

const EmailScreen = () => {
  const { user, clearSession } = useContext(AuthContext);

  const navigation = useNavigation();

  const logout = () => {
    clearSession();
    navigation.dispatch(StackActions.replace("Home"));
  };

  return (
    <View>
      <Text>Email: {user?.email}</Text>
      <Button title="remove local store" onPress={logout} />
    </View>
  );
};

export default EmailScreen;
