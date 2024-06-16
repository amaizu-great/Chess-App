import Image from "next/image";
import HandWithPawn from "../../../../../public/hand-with-pawn.png";

const Host = () => {
  return (
    <button className="flex w-full mt-10 items-center text-gray-700 gap-4 p-4 px-10 rounded hover:bg-gray-400 bg-gray-300 dark:bg-[#81b64c] dark:text-gray-100 dark:hover:bg-[#96d855a8]">
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
