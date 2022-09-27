import React from 'react';
import ArrayBlock from './ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';

const ReverseArray = () => {
  return (
    <div className={classes.reverseArrayContainer}>
        <div className={classes.blockArrayContainer}>
            <ArrayBlock />
            <ArrayBlock />
            <ArrayBlock />
            <ArrayBlock />
            <ArrayBlock />
            <ArrayBlock />
        </div>
        <div className={classes.randomButtonContainer}>
            <button className={classes.randomArray}>Random Array</button>
        </div>
        <div className={classes.reverseButtonContainer}>
            <button className={classes.reverseArray}>Reverse Array</button>
        </div>
    </div>
  )
}

export default ReverseArray
