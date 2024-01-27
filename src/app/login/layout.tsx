import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Login | Todo",
  description: "Todo website, log in and  start organizing your day.",
};

const LoginLayout = ({ children }: any) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default LoginLayout;
