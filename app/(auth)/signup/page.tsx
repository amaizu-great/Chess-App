"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Google from "../../../public/Google.png";
import { signIn, useSession } from "next-auth/react";
import { Lock1, Message, UserAdd } from "iconsax-react";

const SignUp = () => {
  const { status } = useSession();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //redirect function thats protects this routes from users that are signed in
  if (status === "authenticated") {
    redirect("/");
  }

  //components
  const SignUpEmailAndPasswordButton = () => {
    return (
      <button className="flex w-full mt-4 justify-center text-white gap-4 p-4 px-10 rounded bg-gray-600 dark:bg-[#81b64c] dark:text-gray-100 dark:hover:bg-[#96d855a8]">
        Sign Up
      </button>
    );
  };

  const SignUpWithGoogleButton = () => {
    return (
      <button
        onClick={() => signIn("google")}
        className="flex gap-2 mt-2 items-center justify-center rounded p-4 text-[12px] bg-white dark:text-[#262522]"
      >
        <Image src={Google} alt={`${Google} icon`} className="w-[22px] " />
        <p>Sign Up with google</p>
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
              name,
              email,
              password,
            });
          }}className="flex flex-col w-full bg-gray-300 gap-5 font-medium p-8 rounded-t dark:bg-[#262522]">
          <label
            htmlFor="UserName"
            className="flex rounded bg-white dark:bg-[#3c3a38] items-center pl-3"
          >
            <UserAdd />
            <input
              type="text"
              id="UserName"
              required={true}
              name="UserName"
              value={name}
              placeholder="Full Name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              className="w-full px-4 py-3 bg-transparent rounded outline-none dark:placeholder:text-white"
            />
          </label>

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

          <SignUpEmailAndPasswordButton />

          <SignUpWithGoogleButton />
        </form>

        <div className="flex p-4 w-full justify-center text-[12px] rounded-b text-white bg-gray-600 dark:bg-[#81b64c]">
          <Link href="/login">
            Already Have an account? <span className="underline">Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default SignUp;
