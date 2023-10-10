import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Mousewheel,
  EffectCards,
  EffectCube,
  EffectCoverflow,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
} from 'swiper/modules'
import SlideSV from "../../atoms/SlideSV";

import style from './SliderSV.module.scss';
import './SliderSV.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cards';
import 'swiper/scss/effect-cube';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/effect-flip';
import 'swiper/scss/effect-fade';

import SwiperSVTweekTest from "../SwiperSVTweekTest";
import { useEffect, useState } from "react";
import { defaulSlides } from "./DefaultSlides";

// type TSliderProp = {
//   spaceBetween: number,
//   autoplay: boolean,
// }

const sliderInit = {
  effect: 'default',
  loop: false,
  navigation: true,
  pagination: true,
  spaceBetween: 10,
  slidesPerView: 'auto',
}

interface ISliderSVProps {
  slides?: Array<string>
  effect?: string
}


const SliderSVCardsTest: React.FC<ISliderSVProps> = ({ slides = defaulSlides }) => {
  const [sliderPropsTest, setSliderPropsTest] = useState(sliderInit);
  const slidesSlider = slides.map(el => {
    return <SlideSV src={el} />
  });

  // const sliderProps: TSliderProp = props.properties;
  // const effect = props.effect;
  // console.log(effect);

  const sliderSlides = slidesSlider.map((el: any, index: number) => {
    return (
      <SwiperSlide style={{ height: '100%', width: '200', alignItems: 'center', justifyContent: 'center' }} className={style.SwiperSliderContainer} virtualIndex={index}>{el}</SwiperSlide>
    )
  })

  useEffect(() => {
    console.log(sliderPropsTest);
  }, [sliderPropsTest])


  ///------------------------------------------virtul

  return (
    <div className={style.swiperContainer}>
      <SwiperSVTweekTest changeSlider={setSliderPropsTest} value={sliderPropsTest} />

      <Swiper
        key={Date.now()}
        modules={[Autoplay, Mousewheel, EffectCards, EffectCube, EffectCoverflow, EffectFade, EffectFlip, Navigation, Pagination]}
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
          slideShadows: false,
        }
        }
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 20,

        }}

        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }}

        grabCursor={true}

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

export default SliderSVCardsTest;