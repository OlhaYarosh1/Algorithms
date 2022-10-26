import React, { useState } from 'react';
import ArrayBlock from '../../../components/ArrayBlock/ArrayBlock';
import classes from './ReverseArray.module.css';
import { random, reverse } from '../../../utils/array-utils';
import Button from '../../../components/Button/Button';

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

    const calcState = () => {
        return 'unused';
    }

    const getArrayContent = () => {
        return (array.map((item, index) => {
            const state = calcState(index);
            return <ArrayBlock 
                value={item} 
                key={index} 
                state={state} />
        }));
    }

    return (
        <div className={classes.reverseArrayContainer}>
            <div className={classes.blockArrayContainer}>
                {getArrayContent()}
            </div>
            <div className={classes.randomButton}>
                <Button onClick={handleOnClickRandom} title={'Random'}/>
            </div>
            <div className={classes.reverseButton}>
                <Button onClick={handleOnClickReverse} title={'Reverse'}/>
            </div>
        </div>
    )
}

export default ReverseArray;
