import React from 'react';
import classes from './ArrayBlock.module.css';

const ArrayBlock = ({value, isHighlighted = false, state}) => {
    
    let color = '';
    
    switch(state) {
        case 'unused':
            color = 'white';
            break;
        case 'used':
            color = 'yellow';
            break;
        case 'swap_needs':
            color = 'red';
            break;
        case 'no_swap':
            color = 'green';
            break;
    };

    const border = isHighlighted ? '3px solid' : '';
    
    return (
        <div 
            className={classes.blockArray} 
            style={{'--border': border, '--bgColor': color}}
        >
            {value}
        </div>
    )
}

export default ArrayBlock;
