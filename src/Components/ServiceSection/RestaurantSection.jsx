import { useRef, useState } from "react";
import {
  items1,
  items2,
  SERVICE_BASE_URL,
} from "../../assets/ServiceSection/RestaurantSection";

const RestaurantSection = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -620, behavior: "smooth" });
    setIsActive(false);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 620, behavior: "smooth" });
    setIsActive(true);
  };

  return (
    <div className="lg:w-4/5 sm:w-11/12 w-full  mx-auto sm:my-32  relative ">
      {/* TOGGLE ARROW */}
      <div className={"flex justify-end gap-3 mb-10"}>
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className={`bg-slate-300 p-1 rounded-full ${
            isActive ? "opacity-40" : "opacity-60"
          } sm:block hidden`}
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

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className={`bg-slate-300 p-1 rounded-full ${
            isActive ? "opacity-60" : "opacity-40 "
          } sm:block hidden`}
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

      {/* SERVICE ICON */}
      <div ref={scrollRef} className="overflow-x-scroll hide-scrollbar">
        <div>
          {/* ROW-1 */}
          <div className={`flex`}>
            {items1.map((i) => (
              <a href="">
                <div className="xl:h-[180px] xl:w-[184px] sm:h-28 sm:w-32 h-20 w-24  ">
                  <img
                    src={SERVICE_BASE_URL + i + ".png"}
                    className="w-full h-full"
                  />
                </div>
              </a>
            ))}
          </div>
          {/* ROW-2 */}
          <div className="flex ">
            {items2.map((i) => (
              <a href="">
                <div className="xl:h-[180px] xl:w-[184px] sm:h-28 sm:w-32 h-20 w-24">
                  <img
                    src={SERVICE_BASE_URL + i + ".png"}
                    className="w-full h-full"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;
