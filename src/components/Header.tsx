import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-0 md:py-1 xl:pt-8  2xl:pt-12  px-0 lg:px-[1%] xl:px-[10%] ">
      {/* BG */}
      <div className="relative w-full h-2/3 md:h-1/3 lg:h-3/5">
        <div className="hidden xl:block ">
          <Image
            src="/bg.svg"
            alt="bg"
            className="w-2/3 h-full md:w-full"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="top-48 text-[1.2rem] md:text-[2.5rem] xl:text-[3reö] 2xl:text-[4rem] 3xl:text-[5rem] 2xl:top-1/3 xl:top-44 xl:start-10 xl:text-[3rem] z-10 absolute text-white text-right xl:text-left start-96 right-12 2xl:start-12 2xl:right-0 3xl:top-[25%] ">
          <p className="font-bold xl:hidden block">
            Revealing the Treasures of the Universe
          </p>
          <p className="font-bold xl:block hidden drop-shadow-2xl">
            Revealing the
          </p>
          <p className="font-bold xl:block hidden drop-shadow-2xl">
            Treasures of the
          </p>
          <p className="font-bold xl:block hidden drop-shadow-2xl">Universe</p>
        </div>
        <div className="block xl:hidden ">
          <Image
            src="/bg-md.svg"
            alt="bg"
            className="w-2/3 h-full md:w-full  md:h-1/3 lg:h-3/5 "
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className="w-full 2xl:w-1/2 px-10  text-justify">
          "You want to wake up in the morning and think the future is going to
          be great - and that’s what being a spacefaring civilization is all
          about. It’s about believing in the future and thinking that the future
          will be better than the past. And I can’t think of anything more
          exciting than going out there and being among the stars." -Elon Musk
        </p>
      </div>
      <div className="justify-around mt-10 hidden xl:flex">
        <Image src="/spaces.svg" alt="spaces" width={200} height={200} />
        <Image src="/starlint.svg" alt="spaces" width={200} height={200} />
        <Image src="/rocketegg.svg" alt="spaces" width={200} height={200} />
        <Image src="/flutterwave.svg" alt="spaces" width={200} height={200} />
      </div>
    </div>
  );
};

export default Header;
