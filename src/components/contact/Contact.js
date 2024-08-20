import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div
        className="bg-gray-100 dark:bg-blackPrimary 
        px-8 py-16
        sm:px-16 sm:py-16
        lg:px-32 lg:py-16  
        xl:px-64 xl:py-32"
      >
        <h2 className="text-yellow-500 dark:text-orangePrimary text-6xl font-semibold">
          {"Contact".split("").map((e, i) => {
            return (
              <span
                key={i}
                className=" inline-block  duration-300 ease-in-out md:hover:scale-y-150 relative hover:bottom-3 md:hover:scale-x-110 "
              >
                {e}
              </span>
            );
          })}
        </h2>
        <div
          className="flex mt-8 gap-8
            flex-col 
            md:flex-row 
            "
        >
          <div className="border-l-2 dark:border-orangePrimary border-yellow-500 p-2 px-4 lg:px-8 flex gap-4 md:gap-8 items-center xl:justify-center">
            <div className="p-3 dark:bg-orangePrimary bg-yellow-500 rounded-full fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div>
              <h3 className="dark:text-orangePrimary text-xl font-sans font-bold">
                Location
              </h3>
              <a
                className="dark:text-gray-400 dark:hover:text-blue-400 hover:text-blue-700 text-sm lg:text-base duration-100"
                href="https://www.google.com/maps/place/Ambala,+Haryana/@30.3721216,76.7362271,13z/data=!3m1!4b1!4m6!3m5!1s0x390fb62a421e6f11:0xebd28a29f7258d14!8m2!3d30.3752011!4d76.782122!16zL20vMDZ5Y240?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                Ambala,Haryana,India (133205)
              </a>
            </div>
          </div>
          <div className="border-l-2 dark:border-orangePrimary border-yellow-500 p-2 px-4 lg:px-8 flex gap-4 md:gap-8 items-center xl:justify-center">
            <div className="p-3 bg-yellow-500 rounded-full fill-white dark:bg-orangePrimary bg-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-12 w-12"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <div className="">
              <h3 className="dark:text-orangePrimary font-sans text-xl font-bold">
                Email
              </h3>
              <a
                className="hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 text-sm lg:text-base duration-200"
                href="mailto:anshuljain8110@gmail.com"
              >
                anshuljain8110@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
