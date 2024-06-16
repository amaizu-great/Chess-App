import Image from "next/image";
import Join from "./components/joinmacth/join";
import Host from "./components/hostmacth/host";
import chessboard from "../../../public/chessboard.png";

const Play = () => {
  return (
    <section className="flex max-h-screen h-screen w-full p-10 items-center gap-10 text-[14px] bg-gray-100 dark:bg-[#302e2b] text-gray-700 dark:text-gray-100">
      <div className="max-w-[50%] w-full">
        <Image
          src={chessboard}
          alt={`${chessboard}`}
          className="size-[85%] rounded"
        />
      </div>

      <div className="flex max-w-[450px] flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-[40px] text-center">
          Play Chess Online on the #1 Site!
        </h1>

        <div className="flex w-full justify-between px-10">
          <p>Games Today</p>
          <p>Playing Now</p>
        </div>

        <Host />

        <Join />
      </div>
    </section>
  );
};

export default Play;
