import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 3,
        },
        1024: {
          width: 968,
          slidesPerView: 1,
        },
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/images/img_banner.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/img_banner.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/img_banner.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/img_banner.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/img_banner.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
