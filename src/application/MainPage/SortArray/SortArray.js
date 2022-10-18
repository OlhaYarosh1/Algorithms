import React, { useState } from 'react';
import ArrayBlock from '../ReverseArray/ArrayBlock/ArrayBlock';
import classes from './SortArray.module.css';
import { random } from '../ReverseArray/array-utils';
import Button from '../../../components/Button';

const SortArray = () => {

    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const handleOnClickRandom = () => {
        const randomArray = random();
        setArray(randomArray);
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
</div>
  )
}

export default SortArray;
