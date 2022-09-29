import React, { useState } from 'react';
import classes from './ArrayBlock.module.css';

const ArrayBlock = () => {

    const [arrayList, setArrayList] = useState([
        {text: 'Hello'}
    ]);
    return (
        <div className={classes.blockArray} >
            {arrayList.map(array=>
                <div 
                    id='blockArray'>
                    {array.text}
                </div>
            )}
        </div>
    )
}

export default ArrayBlock;
