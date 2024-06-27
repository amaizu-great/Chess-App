"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Lock1, Message } from "iconsax-react";
import Google from "../../../public/Google.png";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { status } = useSession();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //redirect function thats protects this routes from users that are signed in
  if (status === "authenticated") {
    redirect("/");
  }

  //components
  const LoginEmailAndPasswordButton = () => {
    return (
      <button className="flex w-full mt-4 justify-center text-white gap-4 p-4 px-10 rounded bg-gray-600 dark:bg-[#81b64c] dark:text-gray-100 dark:hover:bg-[#96d855a8]">
        Login
      </button>
    );
  };

  const LoginWithGoogleButton = () => {
    return (
      <button
        type="button"
        onClick={() => signIn("google")}
        className="flex gap-2 mt-2 items-center justify-center rounded p-4 text-[12px] bg-white dark:text-[#262522]"
      >
        <Image src={Google} alt={`${Google} icon`} className="w-[22px] " />
        <p>Sign in with google</p>
      </button>
    );
  };

  return (
    <main className="flex w-full min-h-screen h-full items-center justify-center bg-gray-100  dark:bg-[#302e2b] text-gray-500 dark:text-white">
      <div className="flex flex-col w-full max-w-[450px] items-center">
        <p>Logo</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn("credentials", {
              redirect: false, // Set to false to handle response locally
              email,
              password,
            });
          }}
          className="flex flex-col w-full bg-gray-300 gap-5 font-medium p-8 rounded-t dark:bg-[#262522]"
        >
          <label
            htmlFor="UserEmail"
            className="flex rounded bg-white dark:bg-[#3c3a38] items-center pl-3"
          >
            <Message />
            <input
              type="email"
              value={email}
              id="UserEmail"
              required={true}
              name="UserEmail"
              placeholder="Email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              className="w-full px-4 py-3 bg-transparent rounded outline-none dark:placeholder:text-white"
            />
          </label>

          <label
            htmlFor="Password"
            className="flex rounded bg-white dark:bg-[#3c3a38] items-center pl-3"
          >
            <Lock1 />

            <input
              id="Password"
              type="password"
              name="Password"
              required={true}
              value={password}
              placeholder="Password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-3 bg-transparent rounded outline-none dark:placeholder:text-white"
            />
          </label>

          <div className="flex w-full justify-end text-[12px] mt-[-10px]">
            <Link href="/login">Forgot password?</Link>
          </div>

          <LoginEmailAndPasswordButton />

          <LoginWithGoogleButton />
        </form>

        <div className="flex p-4 w-full justify-center text-[12px] rounded-b text-white bg-gray-600 dark:bg-[#81b64c]">
          <Link href="/signup">
            New? <span className="underline"> Sign up </span> - and start
            playing chess!
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
