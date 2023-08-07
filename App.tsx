import * as WebBrowser from "expo-web-browser";

import * as React from "react";

import Navigation from "./src/pages";
import { AuthContext } from "./src/context/AuthContext";
import { useAuth } from "./src/hooks/useAuth";
import { GestureHandlerRootView } from "react-native-gesture-handler";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const { user, setUser, clearSession } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser, clearSession }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
