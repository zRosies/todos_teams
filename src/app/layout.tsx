import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./views/header";
import Footer from "./views/footer";
import { getServerSession } from "next-auth";
import AuthProvider from "./utils/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Todo",
  description: "Organize your tasks, enjoy your life",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Header />
          <main className="max-w-[1920px] w-[100%] mx-auto mt-14 ">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
