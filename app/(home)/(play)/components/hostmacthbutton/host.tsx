"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import HandWithPawn from "../../../../../public/hand-with-pawn.png";

const Host = () => {
  const { status, data } = useSession();
  const email = data?.user?.email;

  const hostGame = async () => {
    if (status === "authenticated" && data !== undefined) {
      try {
        const response = await fetch("/api/game/hostgame", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
      }
    }
  };

  return (
    <button
      onClick={() => hostGame()}
      className="flex w-full mt-10 items-center text-gray-700 gap-4 p-4 px-10 rounded hover:bg-gray-400 bg-gray-300 dark:bg-[#81b64c] dark:text-gray-100 dark:hover:bg-[#96d855a8]"
    >
      <Image
        src={HandWithPawn}
        alt="HandWithPawn"
        className="w-[50px] rounded"
      />
      <div className="flex flex-col gap-1">
        <p className="text-[25px] font-medium leading-none text-start">
          Host A Game
        </p>
        <p>Create Your Game Room</p>
      </div>
    </button>
  );
};
export default Host;
