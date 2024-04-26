import "animate.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="bg-[url('https://i.ibb.co/W66Gv0b/banner-1.jpg')] w-full  bg-cover bg-center  font-bold">
          <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 text-white animate__animated animate__slideInLeft my-6">
            Bangladesh
          </h2>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/mhkTNGj/banner-2.jpg')] w-full bg-cover bg-center font-bold">
        <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 my-6 text-white  animate__animated animate__slideInLeft ">
            Thailand
          </h2>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/ws2StQV/banner-3.jpg')] w-full bg-cover bg-center font-bold">
        <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 my-6 text-white animate__animated animate__slideInLeft ">
            Indonesia
          </h2>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/HXHf2mM/banner-6.jpg')] w-full bg-cover bg-center font-bold">
        <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 my-6 text-white animate__animated animate__slideInLeft ">
            Vietnam
          </h2>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/fq60d7R/banner-5.jpg')] w-full bg-cover bg-center font-bold">
        <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 my-6 text-white animate__animated animate__slideInLeft ">
            Cambodia
          </h2>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/LRxVsCB/banner-4.jpg')] w-full bg-cover bg-center font-bold">
        <div className="text-4xl text-center pt-60 text-white">
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
          </div>
          <h2 className="text-6xl text-center pb-96 my-6 text-white animate__animated animate__slideInLeft ">
            Malaysia
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
