"use client";
import { useState } from "react";

export default function MissionData() {
  const [activeTab, setActiveTab] = useState("spaceStation");

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
                  className="flex justify-between py-4 border-b border-gray-300"
                >
                  <div className="text-gray-500 font-medium">{item.title}</div>
                  <div className="text-gray-800">{item.value}</div>
                </div>
              ))}
              <p className="mt-6 text-sm text-gray-500">
                Missions Available For 2023 And 2024
              </p>
            </div>
          </div>
        );
      case "mars":
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
                  className="flex justify-between py-4 border-b border-gray-300"
                >
                  <div className="text-gray-500 font-medium">{item.title}</div>
                  <div className="text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <p className="text-gray-700">Select a tab to see details.</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Mission data</h1>
      <div className="border-b mb-6">
        <nav className="flex space-x-4">
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
              activeTab === "mars"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("mars")}
          >
            Why Mars?
          </button>
        </nav>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
}
