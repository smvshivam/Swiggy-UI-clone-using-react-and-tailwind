import { useRef, useState } from "react";
import {
  BOOKED_ICON,
  Dineout_Image,
  DISCOUNT_ICON,
} from "../../assets/ServiceSection/DineoutSection";

const DineoutSection = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    setIsActive(false);
    scrollRef.current.scrollBy({ left: -2400, behavior: "smooth" });
  };

  const scrollRight = () => {
    setIsActive(true);
    scrollRef.current.scrollBy({ left: 2400, behavior: "smooth" });
  };

  return (
    <div className="w-4/5 mx-auto  my-32">
      {/* HEADING + BUTTON */}
      <div className="flex justify-between mb-10">
        {/* HEADING */}
        <div className="font-bold text-2xl">
          Discover best restaurants on Dineout
        </div>

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

      {/* CARDS */}
      <div ref={scrollRef} className="overflow-scroll hide-scrollbar">
        <div className="flex gap-4 ">
          {Dineout_Image.map((i) => (
            <div className="min-w-[328px] shadow-xl rounded-3xl">
              <a href="">
                {/* IMAGE */}
                <div
                  className="flex items-end h-[189px]   bg-cover rounded-t-3xl"
                  style={{ backgroundImage: `url(${i.img})` }}
                >
                  {/* RESTAURANT NAME AND RATING */}
                  <div className="flex justify-between w-full m-2">
                    {/* NAME */}
                    <div className="text-white font-bold text-lg">
                      {i.restaurantName}
                    </div>
                    {/* RATING */}
                    <div className="flex items-center gap-1 text-white font-bold text-lg">
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8.00005"
                            cy="7.99999"
                            r="7.2"
                            fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
                          ></circle>
                          <path
                            d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                            fill="white"
                          ></path>
                          <defs>
                            <linearGradient
                              id="StoreRating16_svg__paint0_linear_32982_71565"
                              x1="8.00005"
                              y1="0.799988"
                              x2="8.00005"
                              y2="15.2"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#21973B"></stop>
                              <stop offset="1" stop-color="#128540"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div>{i.rating}</div>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="w-full mx-2 my-3 pr-4">
                  {/* LOCATION AND DISHES */}
                  <div>
                    {/* DISHES AND PRICE */}
                    <div className="flex justify-between">
                      {/* DISHES */}
                      <div>{i.dishes.join(", ")}</div>
                      {/* PRICE */}
                      <div>₹{i.price} for two </div>
                    </div>
                    {/* LOCATION AND DISTANCE */}
                    <div className="flex justify-between">
                      {/* LOCATION */}
                      <div>{i.location}</div>
                      {/* DISTANCE */}
                      <div>{i.distance}km</div>
                    </div>
                  </div>

                  {/* OTHER DETAILS */}
                  <div>
                    {/* TABLE BOOKING */}
                    <div className="flex items-center gap-1 bg-slate-200 rounded-3xl pl-2   mr-[11rem] my-3">
                      <div>
                        <img src={BOOKED_ICON} className="h-4 w-4" />
                      </div>
                      <p>Table booking</p>
                    </div>

                    {/* DISCOUNT */}
                    <div className="bg-green-600 flex justify-between p-2  rounded-xl">
                      <div className="flex items-center gap-1">
                        <img src={DISCOUNT_ICON} className="h-6 w-7 " />
                        <div className="text-white">
                          Flat {i.discount}% off on pre-booking
                        </div>
                      </div>
                      <div className="text-white">+1more</div>
                    </div>

                    {/* OFFERS */}
                    <div className="bg-green-300 p-2 my-3 rounded-xl text-green-800">
                      Up to 10% off with bank offers
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DineoutSection;
