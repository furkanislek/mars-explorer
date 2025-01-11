import React from "react";
import Image from "next/image";
const DaysBanner = () => {
  return (
    <div className="h-screen md:h-96 xl:h-[30rem] m-auto text-center">
      <div className="absolute -z-10 w-full">
        <Image
          src="/days.svg"
          alt="banner"
          width={100}
          height={100}
          className="w-full h-screen md:h-96 xl:h-[30rem]  md:w-full"
          style={{ filter: "brightness(0.5)" }}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-around align-middle items-center m-auto text-white h-full">
        <h1 className="md:text-[1.5rem] xl:text-[2.2rem] 2xl:text-[rem] text-[3rem] font-bold font-mono">
          To Mars and back
        </h1>
        <h4 className="text-xl xl:text-[1.5rem] 2xl:text-[2rem] w-[80%] font-mono xl:leading-loose">
          Together the Starship spacecraft and Super Heavy rocket create a
          reusable transportation system capable of on orbit refueling and
          leveraging Mars’ natural H2O and CO2 resources to refuel on the
          surface of Mars.
        </h4>
        <div className="flex justify-evenly w-full flex-col md:flex-row  space-x-4 mt-4 ">
          <div className="flex flex-col items-center font-mono font-bold">
            <div className="text-[3rem]">6</div>
            <div className="text-[1.5rem]">MONTHS TO MARS</div>
          </div>
          <div className="border-l-2 border-white h-full mx-2"></div>
          <div className="flex flex-col items-center font-mono font-bold">
            <div className="text-[3rem] font-extrabold">2</div>
            <div className="text-[1.5rem]">MOONS</div>
          </div>
          <div className="border-l-2 border-white h-full mx-2"></div>
          <div className="flex flex-col items-center font-mono font-bold">
            <div className="text-[3rem]">14</div>
            <div className="text-[1.5rem]">SATALLITES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysBanner;
