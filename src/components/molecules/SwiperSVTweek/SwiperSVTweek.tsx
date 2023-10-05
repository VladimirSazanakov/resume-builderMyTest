import React, { useState } from "react";

import style from './SwiperSVTweek.module.scss';
import { FormControlLabel, Checkbox, InputLabel, Select, SelectChangeEvent, MenuItem, TextField, Button } from "@mui/material";

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
  const [tweekVisible, setTweekVisible] = useState(true);
  const sliderStyle = props.value.effect;
  const loopChecked = props.value.loop;
  const spaceBetween = props.value.spaceBetween;
  const slidesPerView = props.value.slidesPerView;
  const navigation = props.value.navigation;
  const pagination = props.value.pagination;

  const [mainTweekClasses, setMainTweekClasses] = useState([style.mainTweek]);

  const onChangeLoop = (event: any) => {
    // console.log('Loop is', event.target.checked)
    props.changeSlider((state: any) => {
      const loop = event.target.checked;
      let newState = { ...state, loop: loop };
      return newState;

    })
  }
  const onChangeNavigation = (event: any) => {
    // console.log('Loop is', event.target.checked)
    props.changeSlider((state: any) => {
      const navigation = event.target.checked;
      let newState = { ...state, navigation: navigation };
      return newState;

    })
  }
  const onChangePagination = (event: any) => {
    // console.log('Loop is', event.target.checked)
    props.changeSlider((state: any) => {
      const pagination = event.target.checked;
      let newState = { ...state, pagination: pagination };
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

  const handleSpaceBetween = (event: any) => {
    props.changeSlider((state: any) => {
      const space = event.target.value;
      let newState = { ...state, spaceBetween: space };
      return newState;

    })
  }

  const handleSlidesPerView = (event: any) => {
    props.changeSlider((state: any) => {
      const slides = event.target.value;
      let newState = { ...state, slidesPerView: slides };
      return newState;

    })
  }

  const handleButton = (event: any) => {
    if (tweekVisible) {
      event.target.innerText = "Settings"
      setTweekVisible(false)
      setMainTweekClasses((state) => {
        let newState = [...state]
        newState.push(style.disable);
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
    <div className={style.SwiperSVTweek}>
      <div key={Date.now()} className={mainTweekClasses.join(' ')}>
        <InputLabel size="small" id='SliderStyle'>Slider Style</InputLabel>
        <Select
          labelId="SliderStyle"
          id="SliderStyleSelect"
          value={sliderStyle}
          label="Slider Style"
          onChange={handleSliderStyle}
          size="small"
        >
          <MenuItem value={SliderEffects.Default}>Default</MenuItem>
          <MenuItem value={SliderEffects.Fade}>Fade</MenuItem>
          <MenuItem value={SliderEffects.Cards}>Cards</MenuItem>
          <MenuItem value={SliderEffects.Coverflow}>Coverflow</MenuItem>
          <MenuItem value={SliderEffects.Cube}>Cube</MenuItem>

        </Select>

        <FormControlLabel control={<Checkbox checked={loopChecked} onChange={(event) => onChangeLoop(event)} />} label="Use Loop" />
        <FormControlLabel control={<Checkbox checked={navigation} onChange={(event) => onChangeNavigation(event)} />} label="Use Navigation" />
        <FormControlLabel control={<Checkbox checked={pagination} onChange={(event) => onChangePagination(event)} />} label="Use Pagination" />
        <TextField label="Space Between" type="number" value={spaceBetween} onChange={handleSpaceBetween} />
        <TextField label="Slides Per View" type="number" value={slidesPerView} onChange={handleSlidesPerView} />
      </div>
      <Button variant="text" onClick={handleButton}>settings</Button>
    </div>
  );
};

export default SwiperSVTweek;