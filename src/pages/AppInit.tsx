import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import useSession from "../hooks/useSession";

const AppInit = () => {
  useSession();

  return (
    <View style={styles.container}>
      <ActivityIndicator color={"blue"} size={"large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppInit;
