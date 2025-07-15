import { LOGO } from "../../assets/NavigationSecton/NavigationSection";
const NavigationSection = () => {
  return (
    //NAV BODY
    <div className="bg-saffron ">
      {/* CENTER DIV  */}
      <div className="w-4/5 lg:py-8 md:py-5 mx-auto  flex justify-between items-center">
        {/* LOGO */}
        <a href="" className="lg:w-40 md:w-28">
          <img src={LOGO} />
        </a>

        {/* LINKS */}

        <div className="flex lg:gap-8 md:gap-3 ">
          <a
            href=""
            className="lg:py-3 md:py-2 text-base lg:font-bold md:font-semibold text-white tracking-tight "
          >
            Swiggy Corporate
          </a>

          <a
            href=""
            className="lg:py-3 md:py-2 text-base lg:font-bold md:font-semibold text-white tracking-tight "
          >
            Partner with us
          </a>

          <a
            href=""
            className="flex lg:py-3 md:py-2 lg:px-4 md:px-2 text-base lg:font-bold md:font-semibold text-white tracking-tight rounded-xl border"
          >
            Get the App
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  fill="white"
                  viewBox="0 0 21 21"
                />
              </svg>
            </div>
          </a>

          <div className="lg:py-3 md:py-2 lg:px-4  text-base font-extrabold  text-white tracking-tight bg-black rounded-xl ">
            <a href="" className="lg:py-[2.8px] lg:px-7  md:px-4 ">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
