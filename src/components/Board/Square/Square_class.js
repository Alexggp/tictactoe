import React, { Component } from 'react';

import classes from './Square.module.css';

class Square extends Component {

  state= {
    clicked: false
  }

  toggleClicked = () => {
    this.setState(prevState => (
      {clicked: !prevState.clicked}
    ))
  }



  render(){
    
    let squareContent = '';

    if(this.props.user === 'A'){
      squareContent = <div className={classes.Circle}></div>;
    } else if (this.props.user === 'B'){
      squareContent = <div className={classes.Cross}></div>;
    }


    return (
      <div className={classes.Square} id={`square_X${this.props.x}_Y${this.props.y}`} onClick={this.props.clicked}>

        {squareContent}

      </div>
    )
  }

}


export default Square;