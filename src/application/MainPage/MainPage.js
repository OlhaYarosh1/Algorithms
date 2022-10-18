import React from 'react';
import classes from './MainPage.module.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReverseArray from "./ReverseArray/ReverseArray";
import SortArray from "./SortArray/SortArray";
import BasicPage from "./BasicPage/BasicPage";

const MainPage = () => {
    return (
        <div className={classes.mainPageBlock}>
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<BasicPage/>}/>
                        <Route path='/ReverseArray' element={<ReverseArray/>}/>
                        <Route path='/SortArray' element={<SortArray/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default MainPage;
