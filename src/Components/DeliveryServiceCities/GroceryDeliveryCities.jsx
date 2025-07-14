import { useEffect, useState } from "react";
import { INSTAMART_FOOTER_API } from "../../assets/API/api";


const GroceryDeliveryCities = () => {
  const [cities, setCities] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleShowMore = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    citiesFilterFunction();
  }, []);

   const citiesFilterFunction = async () => {
      const data = await fetch(INSTAMART_FOOTER_API);
      const jsonData = await data.json();
      const filteredCities = jsonData?.data?.cityList;
      setCities(filteredCities);
      console.log(jsonData?.data?.cityList);
    };

  return (
    <div className="w-3/4 mx-auto my-32 ">
      {/*HEADING */}
      <div className="font-bold text-2xl mb-10">Cities with food delivery</div>

      {/* CITIES */}
      <div className="flex flex-wrap gap-4">
        {isActive ? (
          <>
            {cities.map((i) => (
              <button className="flex items-center justify-center w-[17rem]  py-4 rounded-xl border border-gray-500 shadow-md">
                Order food online in {i.text}
              </button>
            ))}
            <button
              onClick={handleShowMore}
              className="flex items-center justify-center w-[17rem]  py-4 rounded-xl border border-gray-500 shadow-md text-orange-500 font-bold"
            >
              Show Less
            </button>
          </>
        ) : (
          <>
            {cities.slice(0, 11).map((i) => (
              <button className="flex items-center justify-center w-[17rem]  py-4 rounded-xl border border-gray-500 shadow-md">
                Order food online in {i.text}
              </button>
            ))}
            <button
              onClick={handleShowMore}
              className="flex items-center justify-center w-[17rem]  py-4 rounded-xl border border-gray-500 shadow-md text-orange-500 font-bold"
            >
              Show More
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GroceryDeliveryCities;
