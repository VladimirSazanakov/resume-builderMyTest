import React from "react";


import style from "./SlideSV.module.scss";
interface IslideSVProps {
  src: string
  height?: string | number | undefined
  width?: string | number | undefined
}

const SlideSV: React.FC<IslideSVProps> = ({ src, height = 'auto', width = '150px' }) => {
  let widthImg: string = '100%';
  if (height != 'auto') {
    width = 'auto';
    widthImg = 'auto';
  }

  let slideHeight = height;
  console.log('height ', slideHeight);
  console.log('width ', width)

  return (
    <div className={style.SlideSV} style={{ height: slideHeight, width: width }}>
      <img
        src={src}
        alt="resume preview"
        className={style.SlideSVImage}
        style={{ width: widthImg }}
      />
    </div>
  );
};

export default SlideSV;
