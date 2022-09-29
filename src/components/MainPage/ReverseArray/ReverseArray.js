import React from 'react';
import ArrayBlock from './ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';

const ReverseArray = () => {

    // let array = [1, 2, 3, 4, 5, 6];

    // function reverse(array) {
    //     let res = [];
    //     for(let i = array.length-1; i>=0; i--) {
    //         res.push(array[i]);
    //     }
    //     return res;
    // }

    // console.log(reverse(array));
    // console.log(array[0]);

    // document.querySelector('randomArray').onclick = function() {
    //     let result = [];
    //     for(let i = 0; i < 1; i++) {
    //         result.push(randomInteger(0, 6));
    //     }
    //     document.querySelector('#blockArray').innerHTML = result;
    //     return result;
    // }

    // function randomInteger(min, max) {
    //     let rand = min - 0.5 + Math.random() * (max - min + 1)
    //     rand = Math.round(rand);
    //     return rand;
    // }

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
