"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const HostGame = () => {
  const { status } = useSession();
  if (status !== "authenticated") {
    redirect("/");
  }
  return <div>HostGame</div>;
};

export default HostGame;
