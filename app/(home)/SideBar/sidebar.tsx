"use client";
import Link from "next/link";
import Image from "next/image";
import Theme from "./components/Theme ";
import { signOut } from "next-auth/react";
import Pawn from "../../../public/pawn.png";
import Friends from "../../../public/add-user.png";
import Binocular from "../../../public/binoculars.png";
import HandWithPawn from "../../../public/hand-with-pawn.png";

const Sidebar = () => {
  return (
    <header className="flex flex-col w-fit h-screen py-10 bg-gray-300 font-medium dark:bg-[#262522] text-gray-700 dark:text-gray-100">
      <Link
        href="/play"
        className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700"
      >
        <Image
          src={HandWithPawn}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p>Play</p>
      </Link>

      <Link
        href="/"
        className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700"
      >
        <Image
          src={Binocular}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p>Wacth</p>
      </Link>

      <Link
        href="/"
        className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700"
      >
        <Image
          src={Friends}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p>Friends</p>
      </Link>

      <Theme />

      <Link
        href="/login"
        className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700"
      >
        <Image
          src={Pawn}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p className="pr-4">Account</p>
      </Link>

      <button
        onClick={() => signOut()}
        className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700"
      >
        <Image
          src={Pawn}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p className="pr-4 min-w-fit">Log Out</p>
      </button>
    </header>
  );
};

export default Sidebar;
