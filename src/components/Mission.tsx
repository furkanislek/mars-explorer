"use client";
import { useState } from "react";
import Image from "next/image";
export default function MissionData() {
  const [activeTab, setActiveTab] = useState("whymars");

  const renderTabContent = () => {
    switch (activeTab) {
      case "spaceStation":
        return (
          <div>
            <p className="text-gray-700">
              All missions have the ability to conduct scientific research to
              improve life back on Earth as well as raise awareness to a global
              audience.
            </p>
            <div className="mt-6  border-gray-300">
              {[
                { title: "ORBIT FREQUENCY", value: "Every 90 minutes" },
                { title: "MISSION DURATION", value: "3 - 6 days" },
                { title: "ALTITUDE", value: "300 – 500 km" },
                { title: "SEATING", value: "2 - 4 passengers" },
                { title: "CARGO / SCIENCE", value: "Up to 192 kg cargo" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row md:justify-between justify-center items-start  py-4 border-b border-gray-300 flex-col"
                >
                  <div className="text-gray-700 font-bold text-left">
                    {item.title}
                  </div>
                  <div className="text-gray-500 w-[40%] text-justify md:text-right">
                    {item.value}
                  </div>
                </div>
              ))}
              <p className="mt-6 text-sm text-gray-500">
                Missions Available For 2023 And 2024
              </p>
            </div>
          </div>
        );
      case "whymars":
        return (
          <div>
            <p className="text-gray-700">
              Venturing to Mars is a leap into the unknown, driven by a thirst
              for knowledge and a spirit of exploration. It opens avenues for
              scientific breakthroughs, tests human endurance, and lays the
              foundation for a multi-planetary future.
            </p>
            <div className="mt-6  border-gray-300">
              {[
                { title: "DIAMETER", value: "6,791 km / 4,220 mi" },
                { title: "DAY LENGTH", value: "38% of Earth" },
                { title: "FORCE OF GRAVITY", value: "6,791 km / 4,220 mi" },
                { title: "AVG DISTANCE FROM EARTH", value: "225Mkm / 140Mmi" },
                { title: "AGE", value: "4.5 billion years" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row md:justify-between justify-center items-start  py-4 border-b border-gray-300 flex-col"
                >
                  <div className="text-gray-700 font-bold text-left">
                    {item.title}
                  </div>
                  <div className="text-gray-500 w-[40%] text-justify md:text-right">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "moon":
        return (
          <div>
            <p className="text-gray-700">
              All missions have the ability to conduct scientific research to
              improve life back on Earth as well as raise awareness to a global
              audience.
            </p>
            <div className="mt-6  border-gray-300">
              {[
                { title: "MISSION DURATION", value: "7 days" },
                { title: "ALTITUDE", value: "384,400 km from Earth" },
                {
                  title: "SEATING",
                  value: "Up to 12 passengers, with private quarters",
                },
                { title: "AVG DISTANCE FROM EARTH", value: "225Mkm / 140Mmi" },
                {
                  title: "VOLUME",
                  value:
                    "1,000 m3 Nosecone area available for entertainment, and scientific opportunities",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row md:justify-between justify-center items-start  py-4 border-b border-gray-300 flex-col"
                >
                  <div className="text-gray-700 font-bold text-left">
                    {item.title}
                  </div>
                  <div className="text-gray-500 w-[40%] text-justify md:text-right">
                    {item.value}
                  </div>
                </div>
              ))}
              <p className="mt-6 text-sm text-gray-500">
                Single seat and missions available to the Moon’s orbit
              </p>
            </div>
          </div>
        );
      case "mars":
        return (
          <div>
            <p className="text-gray-700">
              All missions have the ability to conduct scientific research to
              improve life back on Earth as well as raise awareness to a global
              audience.
            </p>
            <div className="mt-6  border-gray-300">
              {[
                { title: "DAY LENGTH", value: "24 hrs 37 min" },
                { title: "FORCE OF GRAVITY", value: "38% of Earth" },
                {
                  title: "AVG DISTANCE FROM EARTH",
                  value: "225 Mkm / 140 Mm",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row md:justify-between justify-center items-start  py-4 border-b border-gray-300 flex-col"
                >
                  <div className="text-gray-700 font-bold text-left">
                    {item.title}
                  </div>
                  <div className="text-gray-500 w-[40%] text-justify md:text-right">
                    {item.value}
                  </div>
                </div>
              ))}
              <p className="mt-6 text-sm text-gray-500">
                To inquire on mission availability, click Join a Mission below
              </p>
            </div>
          </div>
        );
      default:
        return <p className="text-gray-700">Select a tab to see details.</p>;
    }
  };
  //py-0 md:py-1 xl:pt-8  2xl:pt-12  px-0 lg:px-[1%] xl:px-[10%]
  return (
    <div className="py-0 md:py-1 xl:pt-8  2xl:pt-16  px-[5%] lg:px-[2%] xl:px-[10%] flex justify-between ">
      <div className="max-w-full mx-auto pr-4 ">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">
          Mission data
        </h1>
        <div className="border-b mb-6">
          <nav className="flex space-x-4">
            <button
              className={`py-2 px-4 ${
                activeTab === "whymars"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("whymars")}
            >
              Why Mars?
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "spaceStation"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("spaceStation")}
            >
              Space station
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "moon"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("moon")}
            >
              Moon
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "mars"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("mars")}
            >
              Mars
            </button>
          </nav>
        </div>
        <div>{renderTabContent()}</div>
      </div>
      <div className="my-auto pt-5 hidden lg:flex">
        <Image
          src="/ms.svg"
          alt="ms"
          width={100}
          height={100}
          className="w-2/3 h-full md:w-full"
        />
      </div>
    </div>
  );
}
