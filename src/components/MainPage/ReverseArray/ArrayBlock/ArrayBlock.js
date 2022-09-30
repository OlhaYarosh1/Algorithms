import React from 'react';
import classes from './ArrayBlock.module.css';

const ArrayBlock = ({value}) => {
    return (
        <div className={classes.blockArray}>
            {value}
        </div>
    )
}

export default ArrayBlock;
