import React, { useState } from 'react';
import ArrayBlock from './ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';

const ReverseArray = () => {

    const [arrayRan, setArrayRan] = useState([1, 2, 3, 4, 5]);

    const handleOnClickRandom = () => {
        function random() {
            const randomArray = [];
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
            for (let i = 0; i < count; i++) {
                randomArray[i] = a[i]
            }
            return randomArray;
        }
        const randomArray = random(arrayRan);
        setArrayRan(randomArray);
    }

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
      
    const handleOnClickReverse = () => {
        function reverse(arr){
            const newArray = [];
            for ( let i = 0; i <= (arr.length - 1) / 2 ; i++) {
                const element = arr[i];
                arr[i] = arr[arr.length - (i+1)];
                arr[arr.length - (i+1)] = element;
            }
            for ( let i = 0; i <= (arr.length-1); i++) {
                newArray[i] = arr[i]; 
            }
            return newArray;
        }
        const newArray = reverse(arrayRan);
        setArray(newArray);
    }

    const getArrayContent = () => {
        return (arrayRan.map((item, index) => {
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
