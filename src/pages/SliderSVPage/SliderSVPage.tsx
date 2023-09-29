import Slide from "../../components/atoms/Slide";
import Slider from "../../components/molecules/Slider";
import SliderSV from "../../components/molecules/SliderSV";


const SliderSVPage = () =>{
  const TestSliders = [<Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide /> ];

  const Test2Sliders = [<Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide />, <Slide /> ];

  return(
    <>
    <SliderSV slides={TestSliders} properties={{spaceBetween: 100, autoplay: true } } effect="virtual" />
    <SliderSV slides={Test2Sliders} properties={{spaceBetween: 0, autoplay: false }} effect="flip" />
    <Slider />
    </>
  )
}

export default SliderSVPage;