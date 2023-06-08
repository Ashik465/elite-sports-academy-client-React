import { Helmet } from "react-helmet-async";
import Slider from "../banner/Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default Home;
