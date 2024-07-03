import Image from "next/image";
import HandWithPawn from "../../../../../public/hand-with-pawn.png";

const Join = () => {
  return (
    <button className="flex w-full mt-6 items-center gap-4 p-4 px-10 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded dark:bg-gray-100 dark:text-[#769556] dark:hover:bg-white">
      <Image
        src={HandWithPawn}
        alt="HandWithPawn"
        className="w-[50px] rounded"
      />
      <div className="flex flex-col gap-1">
        <p className="text-[25px] font-medium leading-none text-start">
          Join A Game
        </p>
        <p>Play With Someone you Know</p>
      </div>
    </button>
  );
};

export default Join;
