"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@styles/sliderStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DUMMY_IMG = [
  {
    key: "i1",
    image: "/assests/hd.png",
  },
  {
    key: "i2",
    image: "/assests/Logo-6.png",
  },
  {
    key: "i3",
    image: "/assests/Logo-7.png",
  },
  {
    key: "i4",
    image: "/assests/Logo-9.png",
  },
  {
    key: "i5",
    image: "/assests/logo3.png",
  },
  {
    key: "i5",
    image: "/assests/logo5.png",
  },
  {
    key: "i5",
    image: "/assests/logo8.png",
  },
  {
    key: "i5",
    image: "/assests/logo9.png",
  },
];

const App = () => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={6}
      spaceBetween={2}
      loop={true}
      counterSlide={true}
      centeredSlides={true}
      fadeEffect={true}
      // grabCursor={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      }}
    >
      {DUMMY_IMG.map((events) => (
        <SwiperSlide key={events.id}>
          <div>
            <img src={events.image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default App;
