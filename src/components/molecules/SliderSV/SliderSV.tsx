import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Mousewheel, EffectCoverflow, EffectCube, EffectCards, EffectFade, EffectCreative, EffectFlip, Virtual } from 'swiper/modules'
import Slide from "../../atoms/Slide";

import style from './SliderSV.module.scss';
import './SliderSV.module.scss';
// import './stile.css';

import 'swiper/scss';
import 'swiper/scss/virtual';

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


const SliderSV = (props: any) => {
  const slides = props.slides;
  const sliderProps: TSliderProp = props.properties;
  const effect: SliderEffects = props.effect;
  console.log(effect);
  
  const sliderSlides = slides.map((el: any, index: number) =>{
    return (
<SwiperSlide className={style.SwiperSliderContainer} virtualIndex={index}>{el}</SwiperSlide>
    )
  })

  ///------------------------------------------virtul
    
  return (
    <div className={style.swiperContainer}>

    <Swiper
        modules={[FreeMode, Autoplay, Mousewheel, EffectCoverflow, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip, Virtual]}
    // modules={[Virtual]}
        spaceBetween={ sliderProps.spaceBetween.toString()}
        slidesPerView={3}
        // mousewheel
        freeMode
        autoCorrect="auto"
    speed={5000}
    
            loop={true}
        autoplay={{
          delay: 0,
waitForTransition: true,
        }
        }
        
        effect={effect}
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