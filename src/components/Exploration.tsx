import React from "react";
import Image from "next/image";

const Exploration = () => {
  return (
    <div className="py-4 md:py-1 xl:pt-12 2xl:pt-16 px-0 lg:px-[1%] xl:px-[10%] flex-col">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-[#FD9727]">
          Technical Roles in Mars Exploration.
        </h1>
        <p className="text-gray-500 xl:w-[55%] 2xl:w-[40%] pt-5 text-justify">
          Technical experts, such as aerospace and mechanical engineers,
          computer scientists, and materials scientists, play pivotal roles in
          Mars missions. They design and maintain spacecraft systems, ensuring
          safe entry and exploration on the Red Planet. Mission specialists,
          like astronauts and scientists, also contribute to scientific research
          and experiments on Mars
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between justify-center mt-12">
        <div className="flex flex-col justify-start w-[100%] md:w-[25%]  md:py-0 items-center md:items-start">
          <Image
            src="/aerospace.svg"
            alt="aerospace"
            width={100}
            height={100}
          />
          <h3 className="font-bold py-3 ">Aerospace Engineer</h3>
          <p className="text-gray-500 text-justify">
            Designs and tests spacecraft for Mars missions, accounting for
            extreme conditions, heat shields, and aerodynamic performance.
          </p>
        </div>
        <div className="flex flex-col justify-start w-[100%] md:w-[25%] py-4 md:py-0 items-center md:items-start">
          <Image
            src="/botanical.svg"
            alt="botanical"
            width={100}
            height={100}
          />
          <h3 className="font-bold py-3">Botanical Engineer</h3>
          <p className="text-gray-500 text-justify">
            Studies Martian soil and potential plant growth, supporting
            long-term sustainability and ecological research on Mars.
          </p>
        </div>
        <div className="flex flex-col justify-start w-[100%] md:w-[25%] py-4 md:py-0 items-center md:items-start">
          <Image src="/mateials.svg" alt="mateials" width={100} height={100} />
          <h3 className="font-bold py-3">Materials Scientist</h3>
          <p className="text-gray-500 text-justify">
            Develops advanced materials, heat shields and radiation protection,
            to safeguard spacecraft and crew during the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exploration;
