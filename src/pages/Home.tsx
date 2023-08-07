import { Button } from "react-native";
import React from "react";
import GoogleSignInButton from "../molecules/GoogleSignInButton";
import FacebookSignInButton from "../molecules/FacebookSignInButton";

const Home = () => {
  return (
    <>
      <GoogleSignInButton />
      <FacebookSignInButton />
    </>
  );
};

export default Home;
