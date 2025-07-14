import React, { useRef, useState } from "react";
import { Items_Image } from "../../assets/ServiceSection/InstamartSection";

const InstamartSection = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -460, behavior: "smooth" }); 
    console.log("vlaue",scrollRef.current)
    setIsActive(false);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 460, behavior: "smooth" });
    console.log("vlaue",scrollRef.current)
    setIsActive(true);
  };

  return (
    <div className="w-4/5 mx-auto my-32">
      {/* HEADING + BUTTON */}
      <div className="flex justify-between mb-10">
        {/* HEADING */}
        <div className="font-bold text-2xl">Shop groceries on Instamart</div>

        {/* BUTTON */}
        <div className="flex gap-3">
          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className={`bg-slate-300 p-1 rounded-full opacity-40 ${
              isActive ? "opacity-40" : "opacity-60"
            }`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="22"
              >
                <path
                  d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                  data-name="4-Arrow Left"
                />
              </svg>
            </div>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className={`bg-slate-300 p-1 rounded-full ${
              isActive ? "opacity-60" : "opacity-40"
            }`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="22"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll hide-scrollbar"
      >
          <div className="flex">
            {Items_Image.map((i) => (
              <div className="mr-10">
                <button className="h-[160px] w-36">
                  <img src={i.img} />
                </button>
                <h5 className="text-center text-xl font-bold text-black-soft">
                  {i.name}
                </h5>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default InstamartSection;
