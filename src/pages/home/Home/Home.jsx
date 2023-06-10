import { Helmet } from "react-helmet-async";
import Slider from "../banner/Slider";
import PopularClasses from "../popularClass/PopularClasses";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | Home</title>
      </Helmet>
      <div className="z-10">
        <Slider></Slider>
      </div>
      <PopularClasses></PopularClasses>
    </>
  );
};

export default Home;
