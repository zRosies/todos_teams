"use client";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import GoogleIcon from "../icons/googleIcon";
import { useEffect, useState } from "react";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import { AiOutlineLoading } from "react-icons/ai";

export default function LoginForm({
  router,
  setRegisOpen,
  session,
}: {
  router: any;
  setRegisOpen: any;
  session?: Session;
}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const teste = useSession();
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!response?.ok) {
      setError("Invalid email or password");
    } else {
      router.push(`/`);
      setError("");
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="font-bold text-[2rem] md:text-[3rem] p-5 lg:text-center mb-20">
        Login
      </h1>

      <button
        type="button"
        onClick={() => {
          signIn("github");
        }}
        className="bg-black hover:bg-[#242424] duration-200 p-2 flex items-center justify-center gap-2 rounded-[5px] my-2 cursor-pointer max-w-[300px] md:max-w-[420px] mx-auto w-full"
      >
        <FaGithub className="stroke-white text-white w-[30px] h-[30px]" />{" "}
        <span className="text-white"> Sign in with Github</span>
      </button>
      <button
        // href={"/"}
        type="button"
        className="bg-neutral-100 p-2 flex items-center justify-center gap-2 rounded-[5px] mt-4 cursor-pointer md:max-w-[420px] mx-auto w-full max-w-[300px]"
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
        <label htmlFor="username">
          <p className="sr-only">name</p>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="border-2 border-neutral-100 h-[40px] my-4"
          placeholder="Email"
        ></input>
        <label htmlFor="password">
          <p className="sr-only">password</p>
        </label>
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
          className="bg-hover hover:bg-primary hover:bg-secondaryBlue items-center duration-200 p-3 text-white rounded-sm flex justify-center"
        >
          Login{" "}
          {loading && (
            <>
              <AiOutlineLoading className="animate-loading text-white ml-2" />
            </>
          )}
        </button>
        <div className="text-center my-2">
          {error && <span className="text-red-400">{error}</span>}
          <p className="text-$neutral3 text-center my-1">or</p>
          Do not have an account ?{" "}
          <a
            className="text-linkColor cursor-pointer hover:underline text-link"
            onClick={() => {
              setRegisOpen(true);
            }}
          >
            Sign up
          </a>
        </div>
      </form>
    </>
  );
}
