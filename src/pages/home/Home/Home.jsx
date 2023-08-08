import { Helmet } from "react-helmet-async";
import Slider from "../banner/Slider";
import PopularClasses from "../popularClass/PopularClasses";
import PopularInstructor from "../popularInstructor/PopularInstructor";
import Campus from "../campus/Campus";
import Step from "../step/Step";
import NextDestination from "../nextDestination/NextDestination";

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
      <PopularInstructor></PopularInstructor>
      <Step></Step>
      <NextDestination></NextDestination>
      <Campus></Campus>
    </>
  );
};

export default Home;
