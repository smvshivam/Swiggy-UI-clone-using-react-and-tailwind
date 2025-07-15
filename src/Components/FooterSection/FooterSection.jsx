import { useState } from "react";
import {
  APP_STORE_IMG,
  FOOTER_IMG,
  LOGO,
  PLAY_STORE_IMG,
} from "../../assets/FooterSection/FooterSection";

const FooterSection = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  const companyLinks = [
    "About Us",
    "Swiggy Corporate",
    "Careers",
    "Team",
    "Swiggy One",
    "Swiggy Instamart",
    "Swiggy Dineout",
    "Minis",
    "Pyng",
  ];

  const cities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
  ];

  return (
    <div className="bg-gray-300 bg-opacity-70 ">
      <div className="xl:w-2/3 lg:w-4/5 mx-auto pt-10 lg:px-0 md:px-10 flex justify-between ">
        {/* LOGO */}
        <div>
          <div className="xl:h-12 xl:w-40 md:h-8 md:w-28 ">
            <img src={LOGO} />
          </div>
          <div className="font-semibold xl:text-base md:text-xs tracking-tight text-gray-600">
            © 2025 Swiggy Limited
          </div>
        </div>

        {/* lINKS */}
        <div className="flex xl:gap-10 lg:gap-6 md:gap-4">
          {/* COL1 */}
          <div>
            <h1 className="font-bold text-lg">Company</h1>
            <ul className="">
              {companyLinks.map((i) => (
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    {i}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          {/* COL2 */}
          <div className="flex flex-col justify-between">
            {/* CONTACT */}
            <div>
              <h1 className="font-bold text-lg">Contact us</h1>
              <ul>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Help & Support
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs text-gray-600">
                    Partner with us
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Ride with us
                  </li>
                </a>
              </ul>
            </div>
            {/* LEGAL */}
            <div className="">
              <h1 className="font-bold text-lg">Legal</h1>
              <ul>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Terms & Conditions
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Cookie Policy
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Privacy Policy
                  </li>
                </a>
              </ul>
            </div>
          </div>
          {/* COL3 */}
          <div>
            <h1 className="font-bold text-lg">Available in:</h1>
            <ul>
              {cities.map((i) => (
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    {i}
                  </li>
                </a>
              ))}
            </ul>

            <button
              onClick={handleClick}
              className="flex items-center gap-2 border border-gray-500 py-1 px-4 rounded-lg"
            >
              <div className="font-medium  text-gray-600">685 cities</div>
              <div>
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* COL4 */}
          <div>
            <div>
              {/* LIFE AT  */}
              <h1 className="font-bold text-lg">Life at Swiggy</h1>

              <ul>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs text-gray-600">
                    Explore with Swiggy
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs  text-gray-600">
                    Swiggy News
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium xl:text-base md:text-xs text-gray-600">
                    Snackables
                  </li>
                </a>
              </ul>
            </div>
            {/* SOCIAL LINKS */}
            <div className="my-10">
              <h1 className="font-bold text-lg">Social Links</h1>
              <ul className="flex justify-start items-center gap-3">
                {FOOTER_IMG.map((i) => (
                  <a href="">
                    <img src={i} />
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM PART */}

      <div className="w-[90%] mx-auto my-10  border-t border-gray-700"></div>

      <div className="xl:w-2/3 md:w-4/5 mx-auto pb-10   flex justify-between gap-4  items-center ">
        <h1 className="lg:w-full md:w-4/5 font-bold xl:text-2xl md:text-base  text-gray-700 ">
          For better experience, download the Swiggy app now
        </h1>
        <div className="flex gap-3">
          <button>
            <img src={APP_STORE_IMG} className="lg:w-80 md:w-24 hover:scale-105 duration-500" />
          </button>

          <button>
            <img src={PLAY_STORE_IMG} className="lg:w-80 md:w-24 hover:scale-105 duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
