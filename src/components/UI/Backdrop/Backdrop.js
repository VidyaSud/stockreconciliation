import classes from './Backdrop.css';
import React from 'react';

const backdrop = (props) =>(
    props.show? <div className={classes.Backdrop} onClick={props.BackDropClicked}></div>: null
)
export default backdrop;