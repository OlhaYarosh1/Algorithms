import React, { useState } from 'react';
import ArrayBlock from './ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';

const ReverseArray = () => {

    const [arrayRan, setArrayRan] = useState([]);

    const handleOnClickRandom = () => {
        const randomArray = random(arrayRan);
        function random() {
            const range = 100;
            const count = 5;
            let m = {};
            let a = [];
            for (let i = 0; i < count; i++) {
                let r = Math.floor(Math.random() * (range - i));
                a.push(((r in m) ? m[r] : r) + 1);
                let l = range - i - 1;
                m[r] = (l in m) ? m[l] : l;
            }
            return a;
           // return Math.floor(Math.random() * max);
          }

        setArrayRan(randomArray);
        console.log(random(100));
    }

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
      
    const handleOnClickReverse = () => {
        const newArray = reverse(array)
        function reverse(arr){

            for ( let i=0; i <= (arr.length - 1) / 2 ; i++) {
                const element = arr[i];
                arr[i] = arr[arr.length - (i+1)];
                arr[arr.length - (i+1)] = element;
            }
            return arr
        }
        setArray(newArray);
        console.log(newArray);
    }

    const getArrayContent = () => {
        return (array.map((item, index) => {
            return (<ArrayBlock value={item} key={index} />)
        }));
    }



    return (
        <div className={classes.reverseArrayContainer}>
            <div className={classes.blockArrayContainer}>
                {getArrayContent()}
            </div>
            <div className={classes.randomButtonContainer}>
                <button className={classes.randomArray} onClick={handleOnClickRandom}>Randomise</button>
            </div>
            <div className={classes.reverseButtonContainer}>
                <button className={classes.reverseArray} onClick={handleOnClickReverse}>Reverse Array</button>
            </div>
        </div>
    )
}

export default ReverseArray;
