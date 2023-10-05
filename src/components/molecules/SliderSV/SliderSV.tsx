import { Swiper, SwiperSlide } from "swiper/react";
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
import SlideSV from "../../atoms/SlideSV";

import style from './SliderSV.module.scss';
import './SliderSV.module.scss';
// import './stile.css';

import 'swiper/scss';
import 'swiper/scss/virtual';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cards';
import 'swiper/scss/effect-cube';
import 'swiper/scss/effect-flip';
import 'swiper/css/effect-fade';
import 'swiper/scss/effect-coverflow';

import SwiperSVTweek from "../SwiperSVTweek";
import { useEffect, useState } from "react";
import { defaulSlides } from "./DefaultSlides";

// type TSliderProp = {
//   spaceBetween: number,
//   autoplay: boolean,
// }

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
  navigation: true,
  pagination: true,
  spaceBetween: 10,
  slidesPerView: 1,
}

interface ISliderSVProps {
  slides?: Array<string>
  effect?: string
}


const SliderSV: React.FC<ISliderSVProps> = ({ slides = defaulSlides, effect = 'default' }) => {
  const [sliderPropsTest, setSliderPropsTest] = useState(sliderInit);
  const slidesSlider = slides.map(el => {
    return <SlideSV src={el} />
  });

  // const sliderProps: TSliderProp = props.properties;
  // const effect = props.effect;
  console.log(effect);

  const sliderSlides = slidesSlider.map((el: any, index: number) => {
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
        navigation={sliderPropsTest.navigation}
        pagination={sliderPropsTest.pagination}
        slidesPerView={sliderPropsTest.slidesPerView}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
        }

        // slidesPerView={'auto'}

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