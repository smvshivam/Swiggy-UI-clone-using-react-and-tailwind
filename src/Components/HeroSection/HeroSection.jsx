import React from "react";
import {
  LEFT_SIDE_PICTURE,
  RIGHT_SIDE_PICTURE,
  SERVICE_LINK,
} from "../../assets/HeroSection/HeroSection";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-8 bg-saffron ">
      {/* LEFT SIDE IMAGE */}
      <div className="h-[450px] w-[250px] absolute left-0 top-[92px]  ">
        <img src={LEFT_SIDE_PICTURE} />
      </div>

      {/* MIDDLE SECTION */}
      <div>
        {/* DESCRIPTION SECTION */}
        <div className="mx-96 pr-10 my-5 text-5xl text-white text-center font-bold ">
          Order food. Discover best restaurants. Swiggy it!
        </div>

        {/* SEARCH SECTION */}
        <div className="flex justify-center items-center gap-4 ml-44 mr-60 my-9 ">
          <div className="flex items-center gap-3 rounded-xl  py-4 px-6  bg-white ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 18 23"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                  fill="#FF5200"
                ></path>
              </svg>
            </div>
            <div>
              <input
                type="text"
                maxLength={30}
                placeholder="Enter your delivery location"
                className="w-full caret-orange-500 text-ellipsis font-medium  text-black-soft outline-none"
              />
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                aria-label="rating-down-down-icon"
                aria-hidden="false"
                // strokeColor="rgba(2, 6, 12, 0.92)"
                // fillColor="rgba(2, 6, 12, 0.92)"
              >
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117"
                  fill="rgba(2, 6, 12, 0.92)"
                  // fill-opacity="0.92"
                ></path>
              </svg>
            </div>
          </div>

          <div>
            <button className="flex items-center bg-white p-3 rounded-xl">
              <div className="pr-40 font-medium text-lg text-black-soft">
                Search for restaurant, item or more
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="h-[450px] w-[250px] absolute right-0 top-[92px] ">
        <img src={RIGHT_SIDE_PICTURE} />
      </div>

      {/* SERVICE IMAGE */}
      <div className="flex mx-44">
        {SERVICE_LINK.map((i) => (
          <div>
            <a href="#">
              <img src={i.service} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
