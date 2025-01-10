import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="py-0 md:py-1 xl:pt-8 2xl:pt-16 px-0 lg:px-[1%] xl:px-[6%] -z-10">
      <div className="hidden lg:block relative -bottom-20 ">
        <Image
          src="/banner-bg.svg"
          alt="bg"
          className="w-2/3 h-full md:w-full"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className=" flex flex-col md:flex-row md:flex-wrap justify-center md:justify-around lg:justify-between items-center z-10 absoulete">
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-2xl drop-shadow-lg w-[80%]  md:w-[40%] lg:w-[30%] h-80 p-6 justify-between">
          <div className="flex items-center mb-4">
            <h2 className=" mt-3 text-xl font-semibold  2xl:text-[4rem] font-mono text-[#A9C2CB] ">
              01.
            </h2>
          </div>
          <div className="flex items-center mb-4">
            <h5 className=" text-slate-800 text-xl font-semibold  2xl:text-2xl ">
              Spacewalks on Mars
            </h5>
          </div>
          <div className="flex items-center text-justify text-md 2xl:text-lg">
            <p>
              Spacewalks on Mars involve astronauts exiting their spacecraft to
              conduct research, repair equipment, and explore the Martian
              surface, often while wearing specialized suits.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-2xl drop-shadow-lg  w-[80%] md:w-[40%] lg:w-[30%] h-80 p-6 justify-between">
          <div className="flex items-center mb-4">
            <h2 className=" mt-3 text-xl font-semibold  2xl:text-[4rem] font-mono text-[#A9C2CB] ">
              02.
            </h2>
          </div>
          <div className="flex items-center mb-4">
            <h5 className=" text-slate-800 text-xl font-semibold  2xl:text-2xl ">
              Astronomy
            </h5>
          </div>
          <div className="flex items-center text-justify text-md 2xl:text-lg">
            <p>
              Astronomy is the scientific study of celestial objects, such as
              stars, planets, galaxies, and cosmic phenomena, to comprehend the
              universe's origin, evolution, and composition.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-2xl drop-shadow-lg w-[80%]  md:w-[40%] lg:w-[30%] h-80 p-6 justify-between">
          <div className="flex items-center mb-4">
            <h2 className=" mt-3 text-xl font-semibold  2xl:text-[4rem] font-mono text-[#A9C2CB] ">
              03.
            </h2>
          </div>
          <div className="flex items-center mb-4">
            <h5 className=" text-slate-800 text-xl font-semibold  2xl:text-2xl ">
              Exploration
            </h5>
          </div>
          <div className="flex items-center text-justify text-md 2xl:text-lg">
            <p>
              Exploration is the systematic process of investigating unfamiliar
              environments, whether on Earth or in space, for scientific,
              cultural, or economic purposes, often leading to new discoveries
              and understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
