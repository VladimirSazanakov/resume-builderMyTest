import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  FreeMode,
  Autoplay,
  Mousewheel,
  EffectCoverflow,
  EffectCube,
  EffectCards,
  EffectFade,
  EffectCreative,
  EffectFlip,
  Virtual,
  Navigation,
  Pagination
} from 'swiper/modules'
import Slide from "../../atoms/Slide";

import style from './SliderSV.module.scss';
import './SliderSV.module.scss';
// import './stile.css';

import 'swiper/scss';
import 'swiper/scss/virtual';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SwiperSVTweek from "../SwiperDVTweek";
import { useEffect, useState } from "react";

type TSliderProp = {
  spaceBetween: number,
  autoplay: boolean,
}

enum SliderEffects {
  Fade = 'fade',
  Cube = 'cube',
  Coverflow = 'coverflow',
  Flip = 'flip',
  Cards = 'cards',
  Creative = 'creative',
}

const sliderInit = {
  effect: 'default',
  loop: false,
  spaceBetween: 10,
}


const SliderSV = (props: any) => {
  const [sliderPropsTest, setSliderPropsTest] = useState(sliderInit);
  const slides = props.slides;

  const sliderProps: TSliderProp = props.properties;
  const effect: SliderEffects = props.effect;
  console.log(effect);

  const sliderSlides = slides.map((el: any, index: number) => {
    return (
      <SwiperSlide style={{ height: '100%' }} className={style.SwiperSliderContainer} virtualIndex={index}>{el}</SwiperSlide>
    )
  })

  useEffect(() => {
    console.log(sliderPropsTest);
  }, [sliderPropsTest])


  ///------------------------------------------virtul

  return (
    <div className={style.swiperContainer}>
      <SwiperSVTweek changeSlider={setSliderPropsTest} value={sliderPropsTest} />

      <Swiper
        key={Date.now()}
        modules={[FreeMode, Autoplay, Mousewheel, EffectCoverflow, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip, Virtual, Navigation, Pagination]}
        // modules={[Virtual]}
        spaceBetween={sliderPropsTest.spaceBetween.toString()}
        navigation={true}
        pagination={true}
        slidesPerView={1}

        // mousewheel
        // freeMode
        // autoCorrect="auto"
        // speed={5000}

        loop={sliderPropsTest.loop}
        // autoplay={{
        //   delay: 0,
        //   waitForTransition: true,
        // }
        // }

        effect={sliderPropsTest.effect}
        // coverflowEffect={{depth: 100 ,rotate:50,modifier: 1, slideShadows: true}}

        className={style.swiper1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper: any) => console.log('swiper')}
      // initialSlide={0}
      >
        {function SwiperUpdate() {
          const swiper = useSwiper();
          swiper.update();
        }}

        {sliderSlides}
        {/* <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
        <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide>
  <SwiperSlide className={style.SwiperSliderContainer}><Slide /></SwiperSlide> */}



      </Swiper>
    </div>



  )
}

export default SliderSV;