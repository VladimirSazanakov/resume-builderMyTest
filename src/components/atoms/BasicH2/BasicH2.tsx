import React from 'react';
import classes from './BasicH2.module.scss';

interface IBasicH2_Text {
  text: string;
}

const BasicH2: React.FC<IBasicH2_Text> = ({ text }) => {
  return <h2 className={classes.basicH2}>{text}</h2>;
};

export default BasicH2;
