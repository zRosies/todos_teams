"use client";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import GoogleIcon from "./icons/googleIcon";
import { useEffect, useState } from "react";

export default function LoginForm({
  router,
  setRegisOpen,
}: {
  router: any;
  setRegisOpen: any;
}) {
  const [error, setError] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // console.log(email, password);
    console.log("aaaa");

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("aaaa");
    console.log(JSON.stringify(response));

    // const res = await signIn("github");
    // console.log(response);

    if (response?.error) {
      setError("Invalid email or password");
      if (response?.url) router.replace("/");
      else {
        setError("");
      }
    }
  };
  return (
    <>
      <h1 className="font-bold text-[3rem] p-5 lg:text-center mb-20">Login</h1>

      <button
        type="button"
        onClick={() => {
          signIn("github");
        }}
        className="bg-black hover:bg-[#242424] duration-200 p-2 flex items-center justify-center gap-2 rounded-[5px] my-2 cursor-pointer max-w-[420px] mx-auto w-full"
      >
        <FaGithub className="stroke-white text-white w-[30px] h-[30px]" />{" "}
        <span className="text-white"> Sign in with Github</span>
      </button>
      <button
        // href={"/"}
        type="button"
        className="bg-neutral-100 p-2 flex items-center justify-center gap-2 rounded-[5px] mt-4 cursor-pointer max-w-[420px] mx-auto w-full"
        onClick={() => {
          signIn("google");
        }}
      >
        <GoogleIcon />
        <span> Log in with Google</span>
      </button>
      <form
        className="flex flex-col max-w-[500px] mx-auto px-10 py-5 pb-20"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="border-2 border-neutral-100 h-[40px] my-4"
          placeholder="Email"
        ></input>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          className="h-[40px] border-neutral-100 border-2 mb-8"
        ></input>
        <button
          type="submit"
          className="bg-hover hover:bg-primary hover:bg-secondaryBlue duration-200 p-3 text-white rounded-sm"
        >
          Login
        </button>
        <div className="text-center my-2">
          <p className="text-$neutral3 text-center my-1">or</p>
          Do not have an account?{" "}
          <a
            className="text-linkColor cursor-pointer hover:underline text-link"
            onClick={() => {
              setRegisOpen(true);
            }}
          >
            Sign up
          </a>
        </div>
        {error && <span className="text-red-400">{error}</span>}
      </form>
    </>
  );
}
