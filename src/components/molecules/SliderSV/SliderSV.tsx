import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Mousewheel } from 'swiper/modules'
import Slide from "../../atoms/Slide";

import style from './SliderSV.module.scss';

import 'swiper/scss';


const SliderSV = () => {
  return (
    <div className={style.swiperContainer}>


      <Swiper
        modules={[FreeMode, Autoplay, Mousewheel]}

        spaceBetween={50}
        slidesPerView={'auto'}
        mousewheel
        // freeMode
        autoCorrect="auto"
        autoplay

        className={style.swiper1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log('swiper')}
        initialSlide={0}
      >
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        


      </Swiper>
    </div>



  )
}

export default SliderSV;