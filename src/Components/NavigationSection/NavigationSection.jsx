import React from "react";
import { LOGO } from "../../assets/NavigationSecton/NavigationSection";
const NavigationSection = () => {
  return (
    <nav className="bg-saffron">
      {/* LARGE SCREEN */}
      <div className="lg:w-4/5 w-11/12 mx-auto py-8 md:flex hidden justify-between items-center">
        {/* LEFT SIDE */}
        <a href="#" className=" w-40">
          <img src={LOGO} />
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center lg:gap-10 gap-4  text-white ">
          <a href="#" className="font-bold  tracking-tighter">Swiggy Corporate</a>
          <a href="#" className="font-bold tracking-tighter">Partner with us</a>
          <a href="#" className="flex border rounded-xl p-3 font-bold tracking-tighter">
            Get the App
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </div>
          </a>
          <a href="#" className="font-extrabold tracking-tighter bg-black lg:px-11 px-6 py-3 rounded-xl">Sign in</a>
        </div>
      </div>

      {/* SMALL SCREEN */}
      <div className="md:hidden w-11/12 mx-auto pb-6 flex justify-between items-center">
        {/* RIGHT SIDE */}
        <button className="flex items-center gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.13834 3.05176L7.13834 3.05176C7.79277 2.54686 8.11998 2.29441 8.50037 2.29297C8.88076 2.29154 9.20987 2.54152 9.86808 3.04149L13.5978 5.8745C15.796 7.54423 16.8952 8.37909 16.6378 9.14351C16.4526 9.69341 15.6864 9.84773 14.2432 9.89103V12.8457C14.2432 14.4434 14.2432 15.2422 13.7469 15.7385C13.2506 16.2349 12.4517 16.2349 10.8541 16.2349H10.3882V12.3466C10.3882 11.7393 10.3882 11.4357 10.1995 11.247C10.0108 11.0584 9.7072 11.0584 9.09992 11.0584H8.05751C7.45022 11.0584 7.14658 11.0584 6.95792 11.247C6.76927 11.4357 6.76927 11.7393 6.76927 12.3466V16.2349H6.30494C4.70727 16.2349 3.90844 16.2349 3.41211 15.7385C2.91578 15.2422 2.91578 14.4434 2.91578 12.8457V9.89286C1.44894 9.85225 0.671272 9.70217 0.482179 9.14751C0.222937 8.3871 1.30407 7.55299 3.46632 5.88477L7.13834 3.05176Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <span className="text-white font-semibold">Home</span>
          <div>
            <svg
              width="18"
              height="19"
              viewBox="0 0 16 17"
              fill="none"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(255, 255, 255, 0.6)"
            >
              <path
                d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106"
                fill="rgba(255, 255, 255, 0.6)"
                fill-opacity="0.92"
              ></path>
            </svg>
          </div>
        </button>

        {/* LEFT SIDE */}
        <button>
          <div className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="50"
              height="51"
              fill="white"
            >
              <path
                d="M256 73.825a182.175 182.175 0 1 0 182.18 182.18A182.177 182.177 0 0 0 256 73.825zm0 71.833a55.05 55.05 0 1 1-55.054 55.046A55.046 55.046 0 0 1 256 145.658zm.52 208.723h-80.852c0-54.255 29.522-73.573 48.885-90.906a65.68 65.68 0 0 0 62.885 0c19.363 17.333 48.885 36.651 48.885 90.906z"
                data-name="Profile"
              />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavigationSection;
