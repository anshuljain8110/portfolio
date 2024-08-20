import React, { useState } from "react";

import projects from "./Projects";
import SingleCard from "./SingleCard";
import hackathon from "./Hackathon";
import problemsolving from "./ProblemSolving";
import mobile from "./Mobile";

export default function Portfolio() {
  const [radio, setradio] = useState(1);
  const labelDesign =
    "border-2 dark:border-orangePrimary p-4 rounded-3xl dark:text-white font-sans dark:hover:bg-orangePrimary hover:bg-yellow-200 border-yellow-200 duration-200 ";
  return (
    <section className="" id="projects">
      <div
        className="dark:bg-blackPrimary bg-white 
        px-8 py-16
        sm:px-16 sm:py-16
        lg:px-32 lg:py-16  
        xl:px-64 xl:py-32"
      >
        <div className="">
          <h2 className="text-yellow-500 dark:text-orangePrimary text-6xl font-semibold">
            {"Projects".split("").map((e, i) => {
              return (
                <span
                  key={i}
                  className=" inline-block  duration-300 hover:duration-300 ease-in-out md:hover:scale-y-150 md:hover:scale-x-110 md:hover:relative md:hover:bottom-3"
                >
                  {e}
                </span>
              );
            })}
          </h2>
          <h4 className="text-lg font-bold my-8 dark:text-white">
            Transforming ideas into reality, Each project is building block
            towards better projects – where passion meets perfectness.
          </h4>
        </div>

        <div className="flex flex-wrap gap-4 my-8">
          <input
            className="hidden"
            type="radio"
            name="experiece"
            id="prjects"
            defaultChecked
            onChange={() => {
              setradio(1);
            }}
          />
          <label
            className={`${labelDesign} ${
              radio === 1 ? "dark:bg-orangePrimary bg-yellow-400" : ""
            }`}
            htmlFor="prjects"
          >
            Web Apps
          </label>

          <input
            className="hidden"
            type="radio"
            name="experiece"
            id="android"
            onChange={() => {
              setradio(2);
            }}
          />
          <label
            className={`${labelDesign} ${
              radio === 2 ? "dark:bg-orangePrimary bg-yellow-400" : ""
            }`}
            htmlFor="android"
          >
            Mobile Apps
          </label>

          <input
            className="hidden"
            type="radio"
            name="experiece"
            id="intership"
            onClick={() => {
              setradio(4);
            }}
          />
          <label
            className={`${labelDesign} ${
              radio === 4 ? "dark:bg-orangePrimary bg-yellow-400" : ""
            }`}
            htmlFor="intership"
          >
            Problem Solving
          </label>

          <input
            className="hidden"
            type="radio"
            name="experiece"
            id="hackathon"
            onChange={() => {
              setradio(3);
            }}
          />
          <label
            className={`${labelDesign} ${
              radio === 3 ? "dark:bg-orangePrimary bg-yellow-400" : ""
            }`}
            htmlFor="hackathon"
          >
            Hackathons & Internships
          </label>
        </div>

        <div className="selected">
          {radio === 1 && projects.length !== 0 ? (
            <SingleCard projects={projects} />
          ) : (
            radio === 1 && <CommingSoon />
          )}
          {radio === 2 && mobile.length !== 0 ? (
            <SingleCard projects={mobile} />
          ) : (
            radio === 2 && <CommingSoon />
          )}
          {radio === 3 && hackathon.length !== 0 ? (
            <SingleCard projects={hackathon} />
          ) : (
            radio === 3 && <CommingSoon />
          )}
          {radio === 4 && problemsolving.length !== 0 ? (
            <SingleCard projects={problemsolving} />
          ) : (
            radio === 4 && <CommingSoon />
          )}
        </div>
      </div>
    </section>
  );
}

function CommingSoon() {
  return (
    <div class="border border-orangePrimary mt-16 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <h2 className="text-center dark:text-white my-2 text-2xl">New Projects Comming Soon 😁</h2>
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
  );
}
