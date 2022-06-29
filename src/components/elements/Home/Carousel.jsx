import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselElastic, { consts } from "react-elastic-carousel";

function Carousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  return (
    <CarouselElastic
      itemPosition={consts.Center}
      enableAutoPlay
      autoPlaySpeed={5000}
      isRTL={false}
      breakPoints={breakPoints}
      pagination={true}
      itemPadding={[10, 50]}
    >
      <img src="/images/img_banner.png" alt="" />
      <img src="/images/img_banner.png" alt="" />
      <img src="/images/img_banner.png" alt="" />
      <img src="/images/img_banner.png" alt="" />
      <img src="/images/img_banner.png" alt="" />
    </CarouselElastic>
  );
}

export default Carousel;

{
  /* <Swiper
className="d-flex justify-items-center bg-info"
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={20}
// slidesPerView={3}
navigation
breakpoints={{
  576: {
    width: 576,
    slidesPerView: 1,
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
  <img
    src="/images/img_banner.png"
    className="d-flex justify-items-center bg-danger"
    alt=""
  />
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
</Swiper> */
}
