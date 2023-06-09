// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// import custom css 
import './Slider.css'

import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'

const Slider = () => {

    return (
        <>
            <div className="swiper ">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="slide-content">
          <img src={banner1} alt="" />
          <div className="overlay-text p-5 md:p-20 ">
            <h3 className=" text-xl md:text-7xl font-bold md:mb-4 uppercase">This Summer join Us!</h3>
            <p className="hidden md:block">Get Your performance journey started at EliteSports Academy with a free sports class.we offer a world class training experiences.Reach your full potential at  EliteSports Academy  </p>

            <button className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100 
        ">
              Start Your free trial
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="slide-content">
          <img src={banner2} alt="" />
          <div className="overlay-text p-5 md:p-20 ">
            <h3 className=" text-xl md:text-7xl font-bold md:mb-4 uppercase"> join a membership program!</h3>
            <p className="hidden md:block"> EliteSports Academy membership offer something for every athlete.we offer a world class training experiences.Reach your full potential at  EliteSports Academy  </p>

            <button className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100 
        ">
              Join today
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="slide-content">
          <img src={banner3} alt="" />
          <div className="overlay-text p-5 md:p-20 ">
            <h3 className=" text-xl md:text-7xl font-bold md:mb-4 uppercase">Try a Free Sports Class!</h3>
            <p className="hidden md:block">Get Your performance journey started at EliteSports Academy with a free sports class.we offer a world class training experiences.Reach your full potential at  EliteSports Academy  </p>

            <button className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100 
        ">
              Start Your free trial
            </button>
          </div>
        </div></SwiperSlide>
        
      </Swiper>
            </div>
        </>
    );
};

export default Slider;