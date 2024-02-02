import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Header from "./ui/views/header";
import Footer from "./ui/views/footer";
import { getServerSession } from "next-auth";
import AuthProvider from "./utils/sessionProvider";
import { poppins } from "./ui/fonts";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={poppins.className}>
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
