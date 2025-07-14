import React from "react";
import { LOGO } from "../../assets/NavigationSecton/NavigationSection";
const NavigationSection = () => {
  return (
    <div className="bg-saffron">
     <div className="w-4/5 mx-auto">
       <div className="flex justify-between py-8   ">
        {/* LEFT SIDE SECTION*/}
        <div className="">
          <a className="block h-12 w-40">
            <img src={LOGO} className="block h-full w-full" />
          </a>
        </div>

        {/* RIGHT SIDE SECTION */}
        <div className="flex items-center gap-9 text-white ">
          <div>
            <a href="#" className="font-bold text-base tracking-tighter">
              Swiggy Corporate
            </a>
          </div>
          <div>
            <a href="#" className="font-bold text-base tracking-tighter ">
              Partner with us
            </a>
          </div>
          <div className="">
            <a
              href="#"
              className="flex gap-1 font-bold text-base tracking-tighter border rounded-2xl py-4  px-5"
            >
              <div>Get the App</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
                  <path
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                    fill="white"
                    viewBox="0 0 21 21"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div>
            <button className="text-base font-extrabold tracking-tighter py-4  px-11  rounded-2xl bg-black">
              Sing in
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default NavigationSection;
