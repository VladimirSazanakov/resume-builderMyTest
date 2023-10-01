import React, { useState } from "react";

import style from './SwiperSVTweek.module.scss';
import { FormControlLabel, Checkbox, InputLabel, Select, SelectChangeEvent, MenuItem } from "@mui/material";

enum SliderEffects {
  Default = 'default',
  Fade = 'fade',
  Cube = 'cube',
  Coverflow = 'coverflow',
  Flip = 'flip',
  Cards = 'cards',
  Creative = 'creative',
}


interface ISwiperSVTweek {
  props?: any
  sliderPropsTest?: any
  changeSlider?: any
  value?: any;
}

const SwiperSVTweek: React.FC<ISwiperSVTweek> = (props) => {
  // const [sliderStyle, setSliderStyle] = useState('default');
  const sliderStyle = props.value.effect;
  const loopChecked = props.value.loop;

  const onChangeLoop = (event: any) => {
    // console.log('Loop is', event.target.checked)
    props.changeSlider((state: any) => {
      const loop = event.target.checked;
      let newState = { ...state, loop: loop };
      return newState;

    })
  }
  const handleSliderStyle = (event: SelectChangeEvent) => {
    // setSliderStyle(event.target.value as string);
    props.changeSlider((state: any) => {
      const effect = event.target.value as string;
      let newState = { ...state, effect: effect };
      return newState;

    })
  }

  return (
    <div className={style.SwiperSVTweek}>
      <InputLabel id='SliderStyle'>Slider Style</InputLabel>
      <Select
        labelId="SliderStyle"
        id="SliderStyleSelect"
        value={sliderStyle}
        label="Slider Style"
        onChange={handleSliderStyle}
      >
        <MenuItem value={SliderEffects.Default}>Default</MenuItem>
        <MenuItem value={SliderEffects.Cards}>Cards</MenuItem>
        <MenuItem value={SliderEffects.Coverflow}>Coverflow</MenuItem>
        <MenuItem value={SliderEffects.Cube}>Cube</MenuItem>

      </Select>

      <FormControlLabel control={<Checkbox checked={loopChecked} onChange={(event) => onChangeLoop(event)} />} label="use loop" />
    </div>
  );
};

export default SwiperSVTweek;