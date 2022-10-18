import React, { useState } from 'react';
import ArrayBlock from './ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';
import { random, reverse } from './array-utils';
import Button from '../../../components/Button';

const ReverseArray = () => {

    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const handleOnClickRandom = () => {
        const randomArray = random();
        setArray(randomArray);
    }
 
    const handleOnClickReverse = () => {
        const newArray = [...reverse(array)];
        setArray(newArray);
    }

    const getArrayContent = () => {
        return (array.map((item, index) => {
            return <ArrayBlock value={item} key={index} />
        }));
    }

    return (
        <div className={classes.reverseArrayContainer}>
            <div className={classes.blockArrayContainer}>
                {getArrayContent()}
            </div>
                <div className={classes.randomButton}><Button onClick={handleOnClickRandom} title={'Random'} /></div>
                <div className={classes.reverseButton}><Button onClick={handleOnClickReverse} title={'Reverse'} /></div>
        </div>
    )
}

export default ReverseArray;
