import React from 'react'
import classes from './Button.module.css'

const Button = ({title, onClick}) => {
    return (
        <div>
            <button className={classes.button} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;
