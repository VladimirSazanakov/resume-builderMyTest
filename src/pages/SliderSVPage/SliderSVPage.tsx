import Slide from "../../components/atoms/Slide";
// import Slider from "../../components/molecules/Slider";
import SliderSV from "../../components/molecules/SliderSV";
import SliderSVCardsTest from "../../components/molecules/SliderSVCardsTest";
// import SwiperSVTweek from "../../components/molecules/SwiperDVTweek";

enum SliderEffects {
  Default = 'default',
  Fade = 'fade',
  Cube = 'cube',
  Coverflow = 'coverflow',
  Flip = 'flip',
  Cards = 'cards',
  Creative = 'creative',
}



const SliderSVPage = () => {
  const TestSliders = [<Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />];

  const Test2Sliders = [<Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />];


  return (
    <>
      {/* <SwiperSVTweek /> */}
      <SliderSV effect={SliderEffects.Coverflow} />
      <SliderSVCardsTest />
      {/* <SliderSV /> */}
      {/* <SliderSV slides={Test2Sliders} properties={{ spaceBetween: 0, autoplay: false }} effect="flip" /> */}
      {/* <Slider /> */}
    </>
  )
}

export default SliderSVPage;