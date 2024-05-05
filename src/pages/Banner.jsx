import "animate.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div>
      <Swiper autoplay={true} modules={[Autoplay]} className="mySwiper" data-swiper-autoplay="2000">
        <SwiperSlide className="bg-[url('https://i.ibb.co/W66Gv0b/banner-1.jpg')] w-full  bg-cover bg-center ">
          <div className="text-4xl text-center pt-60   bg-black opacity-35 w-full text-white h-screen font-cerdaville ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className="text-7xl font-bold text-center pb-96 text-white  my-6  ">
            Bangladesh
          </h2>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/mhkTNGj/banner-2.jpg')] w-full bg-cover bg-center ">
        <div className="text-4xl text-center pt-60  bg-black opacity-35 w-full text-white h-screen font-cerdaville">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className="text-7xl font-bold text-center pb-96 my-6 text-white  ">
            Thailand
          </h2>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/ws2StQV/banner-3.jpg')] w-full bg-cover bg-center ">
        <div className="text-4xl text-center pt-60   bg-black opacity-35 w-full text-white h-screen font-cerdaville">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className="text-7xl font-bold text-center pb-96 my-6 text-white  ">
            Indonesia
          </h2>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/HXHf2mM/banner-6.jpg')] w-full bg-cover bg-center ">
        <div className="text-4xl text-white text-center pt-60 bg-black opacity-35 w-full h-screen font-cerdaville">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className="text-7xl font-bold text-center pb-96 my-6 text-white ">
            Vietnam
          </h2>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/fq60d7R/banner-5.jpg')] w-full bg-cover bg-center ">
        <div className="text-4xl text-center pt-60   bg-black opacity-35 text-white w-full h-screen font-cerdaville">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className="text-7xl text-white  text-center pb-96 my-6  font-bold">
            Cambodia
          </h2>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/LRxVsCB/banner-4.jpg')] w-full bg-cover bg-center">
        <div className="text-4xl text-white text-center pt-60  bg-black opacity-35 w-full h-screen font-cerdaville">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let's explore the world together!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(200)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h2 className=" text-white  text-7xl font-bold text-center pb-96 my-6 ">
            Malaysia
          </h2>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
