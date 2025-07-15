import {
  LEFT_SIDE_PICTURE,
  RIGHT_SIDE_PICTURE,
  SERVICE_LINK,
} from "../../assets/HeroSection/HeroSection";

const HeroSection = () => {
  return (
    <div className="bg-saffron relative ">
      {/* HERO SECTION BODY */}
      <div className="w-4/5 mx-auto pt-16  flex flex-col ">
        {/* LEFT IMAGE */}
        <img
          src={LEFT_SIDE_PICTURE}
          className="lg:h-[450px] lg:w-[250px] md:h-[350px] md:w-[180px] absolute left-0 top-0"
        />
        {/* HEADING  */}
        <div className=" md:w-3/5 mx-auto font-bold  xl:text-5xl lg:text-4xl md:text-3xl text-white text-center">
          Order food. Discover best restaurants. Swiggy it!
        </div>
        {/* INPUT BUTTON */}
        <div className="mx-auto mt-6 flex xl:flex-row md:flex-col gap-4  ">
          {/* LEFT SIDE BUTTON */}
          <div className="flex items-center xl:gap-3 justify-between px-4 py-4  rounded-2xl bg-white">
            <div className="">
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
            <input
              type="text"
              placeholder="Enter your delivery location"
              maxLength={30}
              className="outline-none caret-saffron font-medium xl:w-52 md:w-64"
            />
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
          {/* RIGHT SIDE BUTTON */}
          <div className="flex items-center rounded-2xl px-4 py-4  bg-white">
            <button className="xl:pr-36  md:pr-16  font-semibold text-lg text-black-soft">
              Search for restaurant, item or more
            </button>
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
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <img
          src={RIGHT_SIDE_PICTURE}
          className="lg:h-[450px] lg:w-[250px] md:h-[350px] md:w-[180px] absolute right-0 top-0"
        />

        {/* CARDS */}
        <div className="mx-auto mt-8 overflow-x-scroll flex">
          {SERVICE_LINK.map((i) => (
            <a href="">
              <img src={i.service} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
