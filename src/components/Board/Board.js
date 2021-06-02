import React, { Component } from 'react';

import Square from './Square/Square';
import checkLine from '../../utils/checkLine';
import classes from './Board.module.css';

class Board extends Component {

  state={
    playing: true,
    user: 'A',
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

  updateBoard = (x,y)=>{
    if(this.state.playing){
      const newArray = [...this.state.board];
      newArray[y][x] = this.state.user;
      
      this.setState(prevState=>{
        return {
          user: prevState.user === 'A' ? 'B' : 'A',
          board: newArray
        }
      });
    } 
  }

  componentDidUpdate(){
    const line = checkLine(this.state.board);
    if(this.state.playing && line){
      this.setState({
        playing: false
      })
    }
  }

  restartGame = ()=>{
    this.setState({
      playing: true,
      user: 'A',
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    })
  }

  render(){


    // const row1 = this.state.board[0].map((square, index)=>{
    //   return <Square key={index} id={index} user={square.user}/>
    // })


    const rows = this.state.board.map((row, rowIndex)=>{
      return row.map((square, index)=>{
        return <Square key={rowIndex+''+index} x={index} y={rowIndex} user={square} clicked={()=>{this.updateBoard(index, rowIndex);}}/>
      })
    });


    let winner = '';

    if (!this.state.playing){
      winner = (
        <div>
          <h1>{`User ${this.state.user === 'A' ? 'B' : 'A'} won the game!`}</h1>
          <button onClick={this.restartGame}>Restart</button>
        </div>

      )
    }

    return (
      <React.Fragment>
        <h2>User: {this.state.user}</h2>
        <div className={classes.Board}>
          {rows}
        </div>
        {winner}
      </React.Fragment>
    )
  }

}


export default Board;