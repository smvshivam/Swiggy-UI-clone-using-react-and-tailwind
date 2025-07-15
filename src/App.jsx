import BannerSection from "./Components/BannerSection/BannerSection";
import FoodDeliveryCities from "./Components/DeliveryServiceCities/FoodDeliveryCities";
import GroceryDeliveryCities from "./Components/DeliveryServiceCities/GroceryDeliveryCities";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavigationSection from "./Components/NavigationSection/NavigationSection";
import DineoutSection from "./Components/ServiceSection/DineoutSection";
import InstamartSection from "./Components/ServiceSection/InstamartSection";
import RestaurantSection from "./Components/ServiceSection/RestaurantSection";

const App = () => {

  return (
    <div>
        <NavigationSection />
        <HeroSection/>
        <RestaurantSection/>
        <InstamartSection/>
        <DineoutSection/>
        <BannerSection/>
        <FoodDeliveryCities/>
        <GroceryDeliveryCities/>
        <FooterSection/>
    </div>
  );
};

export default App;
