import React from "react";
import Navbar from "../navbar/Navbar";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-gray-100 dark:bg-blackPrimary h-[100vh]
    px-8 py-8
    sm:px-16 sm:py-8
    lg:px-32 lg:py-8  
    xl:px-64 xl:py-16"
      >
        <CommingSoon/>
      </div>
    </div>
  );
}



function CommingSoon() {
  return (
    <div class="border border-orangePrimary mt-16 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <h2 className="text-center dark:text-white my-2 text-2xl">New Blogs Comming Soon 😁</h2>
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
