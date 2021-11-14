import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import LookbookInfo from "../components/LookbookInfo";
import LookbookMain from "../components/LookbookMain";
import LookbookPicker from "../components/LookbookPicker";

const LookBook: React.FC = () => {
  const [memberName, setMemberName] = useState<string>("jungkook");
  return (
    <>
      <LookbookInfo memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default LookBook;
