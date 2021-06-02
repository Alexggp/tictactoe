import React from 'react';

import classes from './Square.module.css';

const Square = (props) =>{

  
    
    let squareContent = '';

    if(props.user === 'A'){
      squareContent = <div className={classes.Circle}></div>;
    } else if (props.user === 'B'){
      squareContent = <div className={classes.Cross}></div>;
    }


    return (
      <div className={classes.Square} id={`square_X${props.x}_Y${props.y}`} onClick={props.clicked}>

        {squareContent}

      </div>
    )
  }




export default Square;