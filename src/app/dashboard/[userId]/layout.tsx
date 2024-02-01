import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Todo | Inbox",
  description: "Todo website, log in and  start organizing your day.",
};

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
