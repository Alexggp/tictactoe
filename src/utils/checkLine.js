const checkLine = (board)=>{
  
  //checking row1
  if(board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2]){
    return true;
  }
  //checking row2
  else if(board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2]){
    return true;
  }
  //checking row3
  else if(board[2][0] && board[2][0] === board[2][1] && board[2][0] === board[2][2]){
    return true;
  }
  //checking col1
  else if(board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0]){
    return true;
  }
  //checking col2
  else if(board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1]){
    return true;
  }
  //checking col3
  else if(board[0][2] && board[0][2] === board[1][2] && board[0][2] === board[2][2]){
    return true;
  }
  //checking diag1
  else if(board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
    return true;
  }
  //checking diag2
  else if(board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]){
    return true;
  }
  else{return false}




}

export default checkLine;