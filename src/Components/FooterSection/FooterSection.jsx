import React, { useState } from "react";
import { APP_STORE_IMG, FOOTER_IMG, LOGO, PLAY_STORE_IMG } from "../../assets/FooterSection/FooterSection";

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
    <div className="bg-gray-300 bg-opacity-70">
      <div className="w-3/4 mx-auto pt-10 flex justify-between ">
        {/* LOGO */}
        <div>
          <div className="h-12 w-40 ">
            <img src={LOGO} />
          </div>
          <div className="font-semibold text-base tracking-tight text-gray-600">
            © 2025 Swiggy Limited
          </div>
        </div>

        {/* lINKS */}
        <div className="flex gap-20">
          {/* COL1 */}
          <div>
            <h1 className="font-bold text-lg">Company</h1>
            <ul className="">
              {companyLinks.map((i) => (
                <a href="">
                  <li className="my-2 font-medium  text-gray-600">{i}</li>
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
                  <li className="my-2 font-medium  text-gray-600">
                    Help & Support
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium  text-gray-600">
                    Partner with us
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium  text-gray-600">
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
                  <li className="my-2 font-medium  text-gray-600">
                    Terms & Conditions
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium  text-gray-600">
                    Cookie Policy
                  </li>
                </a>
                <a href="">
                  <li className="my-2 font-medium  text-gray-600">
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
                  <li className="my-2 font-medium  text-gray-600">{i}</li>
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
                <a>
                  <li className="my-2 font-medium  text-gray-600">
                    Explore with Swiggy
                  </li>
                </a>
                <a>
                  <li className="my-2 font-medium  text-gray-600">
                    Swiggy News
                  </li>
                </a>
                <a>
                  <li className="my-2 font-medium  text-gray-600">
                    Snackables
                  </li>
                </a>
              </ul>
            </div>
            {/* SOCIAL LINKS */}
            <div className="my-10">
              <h1 className="font-bold text-lg">Social Links</h1>
              <ul className="flex gap-2">
                {FOOTER_IMG.map((i) => (
                  <a>
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

      <div className="w-3/4 mx-auto pb-10 px-6 flex justify-between items-center ">
            <h1 className="font-bold text-2xl text-gray-700">For better experience, download the Swiggy app now</h1>
            <div className="flex gap-8">
                <button>
                    <img src={APP_STORE_IMG} />
                </button>

                <button>
                    <img src={PLAY_STORE_IMG} />
                </button>
                
            </div>
      </div>
    </div>
  );
};

export default FooterSection;
