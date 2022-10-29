import React, { useState } from 'react';
import ArrayBlock from '../../../components/ArrayBlock/ArrayBlock';
import classes from './SortArray.module.css';
import { doSortStep, initSort, random } from '../../../utils/array-utils';
import Button from '../../../components/Button/Button';

const SortArray = () => {

    const [array, setArray] = useState([1, 2, 3, 4, 5, 6]);
    const [highlightedIndexes, setHighlightedIndexes] = useState([]);
    const [cmpResult, setCmpResult] = useState('');

    const handleOnClickRandom = () => {
        const randomArray = random();
        setArray(randomArray);
    }

    const startSort = () => {
        const intervalId = setInterval(() => {
            doSortStep(

                //onComparison
                (inCmpResult, i, j) => {
                    setCmpResult(inCmpResult);
                    setHighlightedIndexes([i, j]);
                },

                //onFinish
                () => {
                    clearInterval(intervalId);
                    setHighlightedIndexes([]);
                });    
        }, 1000);
    }

    const onClickSort = () => {
        initSort(array);
        startSort();
    }

    const handleOnClickSort = () => {
        onClickSort();
    }

    const calcState = (index) => {
        if (highlightedIndexes.includes(index) && cmpResult === 'less_or_equal') {
            return 'no_swap';
        }
        if (highlightedIndexes.includes(index) && cmpResult === 'greater') {
            return 'swap_needs';
        }
        return 'unused';
    }

    const getArrayContent = () => {
        return (array.map((item, index) => {
            const state = calcState(index);
            return <ArrayBlock
                value={item} 
                key={index} 
                isHighlighted={highlightedIndexes.includes(index)}
                state={state}
            />
        }));
    }

    return (
        <div className={classes.sortArrayContainer}>
            <div className={classes.blockArrayContainer}>
                {getArrayContent()}
            </div>
            <div className={classes.randomButton}>
                <Button onClick={handleOnClickRandom} title={'Random'} />
            </div>
            <div className={classes.sortButton}>
                <Button onClick={() => handleOnClickSort()} title={'Sort'} />
            </div>
            <div className={classes.additionalCellContainer}>
            </div>
        </div>
    )
}

export default SortArray;

