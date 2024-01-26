"use client";
import { SessionProvider } from "next-auth/react";

//Used to use the next-auth by wrapping the layout.
// It gives us many functions to handle the session data.

const AuthProvider = ({ children }: any) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default AuthProvider;
