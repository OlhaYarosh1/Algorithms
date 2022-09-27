import React from 'react'
import classes from './MainPage.module.css'
import ReverseArray from './ReverseArray/ReverseArray'

const MainPage = () => {
  return (
    <div className={classes.mainPageBlock}>
        <ReverseArray />
    </div>
  )
}

export default MainPage
