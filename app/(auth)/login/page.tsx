"use client";
import Link from "next/link";
import Image from "next/image";
import Google from "../../../public/Google.png";
import { Lock1, Message } from "iconsax-react";

const Login = () => {
  //components
  const LoginEmailAndPasswordButton = () => {
    return (
      <button className="flex w-full mt-4 justify-center text-white gap-4 p-4 px-10 rounded-[10px] bg-gray-600 dark:bg-[#81b64c] dark:text-gray-100 dark:hover:bg-[#96d855a8]">
        <p className="text-[25px] font-medium leading-none">Login</p>
      </button>
    );
  };

  const loginWithGoogleButton = () => {
    return (
      <button className="flex">
        <Image src={Google} alt={`${Google} icon`} />
        <p>Sign in with google</p>
      </button>
    );
  };

  return (
    <main className="flex flex-col w-full min-h-screen h-full items-center justify-center bg-gray-100  dark:bg-[#302e2b] text-gray-500 dark:text-white">
      <p>Logo</p>

      <form className="flex flex-col max-w-[450px] w-full bg-gray-300 gap-5 font-medium p-8 rounded dark:bg-[#262522]">
        <label
          htmlFor="UserEmail"
          className="flex rounded bg-white dark:bg-[#3c3a38] items-center pl-3"
        >
          <Message />
          <input
            type="email"
            id="UserEmail"
            required={true}
            name="UserEmail"
            placeholder="Email"
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
            placeholder="Password"
            className="w-full px-4 py-3 bg-transparent rounded outline-none dark:placeholder:text-white"
          />
        </label>

        <div className="flex w-full justify-end text-[12px] mt-[-10px]">
          <Link href="/login">Forgot password?</Link>
        </div>

        <LoginEmailAndPasswordButton />

        <loginWithGoogleButton />
      </form>
    </main>
  );
};
export default Login;
