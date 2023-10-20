import React, { useState } from "react";

import style from './SwiperSVTweek.module.scss';
import { FormControlLabel, Checkbox, InputLabel, Select, SelectChangeEvent, MenuItem, TextField, Button } from "@mui/material";
import { SliderEffects, EslideHeight, TSliderInit, ISwiperSVTweek } from "../types";
import { Loop } from "@mui/icons-material";

function EnumToItemList<T extends Object>(varible: T): JSX.Element[] {
  return Object.values(varible).map((el: string) => {
    // <MenuItem value={SliderEffects.Default}>Default</MenuItem>
    return <MenuItem value={el}>{el}</MenuItem>
  })
}

const SwiperSVTweekTest: React.FC<ISwiperSVTweek> = (props) => {

  const [tweekVisible, setTweekVisible] = useState(false);
  const [mainTweekClasses, setMainTweekClasses] = useState([style.SwiperSVTweek, style.hiden]);
  const state = props.value;
  const sliderStyle = props.value.effect;
  const loopChecked = props.value.loop;
  const spaceBetween = props.value.spaceBetween;
  const slidesPerView = props.value.slidesPerView;
  const navigation = props.value.navigation;
  const pagination = props.value.pagination;
  const slideHeight = props.value.slideHeight?.toString();

  // console.log(SliderEffects);

  // const keyArr = Object.values(SliderEffects);
  // console.log(keyArr);

  // const modeItemList = Object.values(SliderEffects).map((el: string) => {
  //   // <MenuItem value={SliderEffects.Default}>Default</MenuItem>
  //   return <MenuItem value={el}>{el}</MenuItem>
  // });

  const onChangeLoop = (event: any) => {
    // console.log('Loop is', event.target.checked)
    const loop = event.target.checked;
    let newState = { ...state, loop: loop };
    props.changeSlider(newState)
  }

  const onChangeNavigation = (event: any) => {
    // console.log('Loop is', event.target.checked)
    const navigation = event.target.checked;
    let newState = { ...state, navigation: navigation };
    props.changeSlider(newState);
  }
  const onChangePagination = (event: any) => {
    // // console.log('Loop is', event.target.checked)
    const pagination = event.target.checked;
    let newState = { ...state, pagination: pagination };
    props.changeSlider(newState)
  }

  const handleSlideHeight = (event: SelectChangeEvent) => {
    // setSliderStyle(event.target.value as string);
    const height = event.target.value;
    let newState = { ...state, slideHeight: height };
    props.changeSlider(newState);
  }

  function onChangeSliderBoolean<P extends keyof TSliderInit>(parametr: P, value: TSliderInit[P]): void {
    let newState = { ...state };
    if (parametr == 'effect') {
      if (value == SliderEffects.Cards || value == SliderEffects.Flip || value == SliderEffects.Fade) {
        newState.slidesPerView = 1;
      } else {
        newState.slidesPerView = 'auto';
      };
    }
    newState[parametr] = value;
    props.changeSlider(newState);
  }


  const handleSliderStyle = (event: SelectChangeEvent) => {
    // setSliderStyle(event.target.value as string);
    const effect = event.target.value as string;
    let newState = { ...state, effect: effect };
    let slidesPerView: number | string = 'auto';

    if (effect == SliderEffects.Cards || effect == SliderEffects.Flip || effect == SliderEffects.Fade) {
      newState.slidesPerView = 1;
      console.log('state from tweek', newState);
    } else {
      newState.slidesPerView = 'auto';
    };

    props.changeSlider(newState);

  }


  const handleSpaceBetween = (event: any) => {
    const space = event.target.value;
    let newState = { ...state, spaceBetween: space };
    props.changeSlider(newState);
  }

  // const handleSlideHeight = (event: any) => {
  //   const height = event.target.value;
  //   let newState = { ...state, slideHeight: height };
  //   props.changeSlider(newState);
  // }


  const handleButton = (event: any) => {
    if (tweekVisible) {
      event.target.innerText = "Settings"
      setTweekVisible(false)
      setMainTweekClasses((state) => {
        let newState = [...state]
        newState.push(style.hiden);
        return newState;
      })
    } else {
      event.target.innerText = "hide"
      setTweekVisible(true)
      setMainTweekClasses((state) => {
        let newState = [...state]
        newState.pop();
        return newState;
      })
    };
    console.log(mainTweekClasses);
  }

  return (
    <div className={mainTweekClasses.join(' ')}>
      <button className={style.TweekButton} onClick={handleButton}>Settings</button>
      <div key={Date.now()} className={style.mainTweek}>
        <h6 className={style.title}>Slider style</h6>
        <Select
          labelId="SliderStyle"
          id="SliderStyleSelect"
          value={sliderStyle}
          label="Slider Style"
          // onChange={handleSliderStyle}
          onChange={(event) => { onChangeSliderBoolean('effect', event?.target.value) }}
          size="small"

        >
          {EnumToItemList(SliderEffects)}
          {/* {modeItemList} */}
          {/* <MenuItem value={SliderEffects.Default}>Default</MenuItem>
          <MenuItem value={SliderEffects.Fade}>Fade</MenuItem>
          <MenuItem value={SliderEffects.Cards}>Cards</MenuItem>
          <MenuItem value={SliderEffects.Coverflow}>Coverflow</MenuItem>
          <MenuItem value={SliderEffects.Cube}>Cube</MenuItem> */}

        </Select>

        <FormControlLabel className={style.checkButtons} control={<Checkbox size='small' checked={loopChecked} onChange={(event) => onChangeSliderBoolean('loop', event.target.checked)} />} label="Use Loop" />
        <FormControlLabel control={<Checkbox size="small" checked={navigation} onChange={(event) => onChangeNavigation(event)} />} label="Use Navigation" />
        <FormControlLabel control={<Checkbox size="small" checked={navigation} onChange={(event) => onChangeSliderBoolean('navigation', event.target.checked)} />} label="Use Navigation" />
        <FormControlLabel control={<Checkbox size="small" checked={pagination} onChange={(event) => onChangePagination(event)} />} label="Use Pagination" />
        <TextField style={{ marginBottom: 5 }} label="Space Between" type="number" aria-valuemin={0} value={spaceBetween} onChange={handleSpaceBetween} />
        {/* <TextField style={{ marginBottom: 5 }} label="Slide Height" type="number" value={slideHeight} onChange={handleSlideHeight} /> */}

        <Select
          labelId="slideHeight"
          id="SlideHeightSelect"
          value={slideHeight}
          label="Slide Height"
          // onChange={handleSlideHeight}
          onChange={(event) => { onChangeSliderBoolean('slideHeight', event.target.value) }}
          size="small"

        >
          {EnumToItemList(EslideHeight)}
          {/* <MenuItem value={EslideHeight.auto}>Auto</MenuItem>
          <MenuItem value={EslideHeight.px50}>50px</MenuItem>
          <MenuItem value={EslideHeight.px75}>75px</MenuItem>
          <MenuItem value={EslideHeight.px100}>100px</MenuItem>
          <MenuItem value={EslideHeight.px125}>125px</MenuItem>
          <MenuItem value={EslideHeight.px150}>150px</MenuItem>
          <MenuItem value={EslideHeight.px175}>175px</MenuItem>
          <MenuItem value={EslideHeight.px200}>200px</MenuItem>
          <MenuItem value={EslideHeight.px225}>225px</MenuItem> */}
        </Select>

      </div>
    </div>
  );
};

export default SwiperSVTweekTest;