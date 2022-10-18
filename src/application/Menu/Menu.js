import React from 'react';
import classes from './Menu.module.css';

const Menu = () => {
    return (
        <div className={classes.menuBlock}>
            <div className={classes.titleMenu}>Menu</div>
            <a href='/ReverseArray'>
                <div className={classes.selectionReverse}>Reverse Array</div>
            </a>
            <a href='/SortArray'>
                <div className={classes.selectionSort}>Sort Array</div>
            </a>
        </div>
    )
}

export default Menu;
