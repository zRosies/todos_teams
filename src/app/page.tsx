import Image from "next/image";
import variables from "@/app/styles/variables.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import LoginForm from "./components/loginForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Handcrafted Haven",
  description: "Handcrafted Haven website, come and post your arts",
};

export default function Home() {
  return <>Homepage</>;
}
