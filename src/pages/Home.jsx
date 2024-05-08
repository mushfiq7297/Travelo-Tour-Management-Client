
import AboutUs from "../firebase/components/AboutUs";
import AllTouristsSpot from "./AllTouristsSpot";
import Banner from "./Banner"
import Contact from "./Contact";
const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AllTouristsSpot></AllTouristsSpot>
        <AboutUs></AboutUs>
        <Contact></Contact>

    </div>
  );
};

export default Home;
