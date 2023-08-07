import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import EmailScreen from "./EmailScreen";
import Home from "./Home";
import AppInit from "./AppInit";

export type RootStackParamList = {
  Home: {
    screen: string;
  };
  EmailScreen: {
    screen: string;
  };
  AppInit: {
    screen: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer<RootStackParamList>>
      <Stack.Navigator
        initialRouteName="AppInit"
        id="Stack"
        screenOptions={() => ({})}
      >
        <Stack.Screen name="AppInit" component={AppInit} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
