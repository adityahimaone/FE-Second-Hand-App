import React from "react";

// Import Swiper styles

import CarouselHub, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Carousel() {
  return (
    <CarouselHub
      plugins={[
        "centered",
        "infinite",
        // "arrows",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
      ]}
    >
      <img src="/images/img_banner.png" className="w-100 px-2" alt="" />
      <img src="/images/img_banner.png" className="w-100 px-2" alt="" />
      <img src="/images/img_banner.png" className="w-100 px-2" alt="" />
    </CarouselHub>
  );
}

export default Carousel;

// (
// eslint-disable-next-line react/jsx-no-useless-fragment
