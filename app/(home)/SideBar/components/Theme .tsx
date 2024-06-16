"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sun from "../../../../public/sun.png";
import Moon from "../../../../public/moon.png";
const Theme = () => {
  let [mode, swicthMode] = useState(false);
  let [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementsByTagName("body")[0];
    parentElement = element;
    setParentElement(parentElement);
  }, []);

  //function
  const handleSwicth = () => {
    if (parentElement) parentElement.classList.toggle("dark");
    if (mode) {
      swicthMode(false);
    } else {
      swicthMode(true);
    }
  };

  //components
  const LightUi = () => {
    return (
      <button onClick={handleSwicth} className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-700">
        <Image
          src={Sun}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p className="min-w-fit">Light UI</p>
      </button>
    );
  };

  const DarkUi = () => {
    return (
      <button onClick={handleSwicth} className="flex gap-3 items-center py-4 pl-7 pr-12 transition hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-700">
        <Image
          src={Moon}
          alt="HandWithPawn"
          className="size-[30px] rounded"
        ></Image>
        <p className="min-w-fit">Dark UI</p>
      </button>
    );
  };

  return <>{mode ? <LightUi /> : <DarkUi />}</>;
};

export default Theme;
