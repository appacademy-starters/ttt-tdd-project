const { emptySlotsInBoard, isEmptyGrid, isFullBoard } = require("../../_helper");
// const TTT = require('./ttt');

class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    // if (emptySlotsInBoard(grid)) return emptySlotsInBoard(grid);

    return emptySlotsInBoard(grid);
  }

  static randomMove(grid) {

    // Your code here
    let validMoves = ComputerPlayer.getValidMoves(grid);

    let randomPosition = Math.floor(Math.random() * validMoves.length);
    let moveRandom = validMoves[randomPosition];
    // console.log("MOVERANDOM", moveRandom);
    // console.log('INDEX', validMoves.indexOf(moveRandom))
    // validMoves.splice(validMoves.indexOf(moveRandom), 1);

    // console.log("VALIDMOVES", validMoves)
    return moveRandom;
  }

  static getWinningMoves(grid, symbol) {

    // Your code here

  }

  static getSmartMove(grid, symbol) {
    if (isEmptyGrid(grid)) {
      return ComputerPlayer.randomMove(grid);
    } else {
      if (!isFullBoard(grid)) {
        function smartMoveHelper() {
          let validMoves = ComputerPlayer.getValidMoves(grid);

          const options = ['X', 'O'] // the options it can play

          for (let i = 0; i < validMoves.length; i++) {
            let validMove = validMoves[i];

            for (let j = 0; j < options.length; j++) {
              grid[validMove.row][validMove.col] = symbol;

              const TTT = require('./ttt');
              // console.log(TTT)
              let winner = TTT.checkWin( grid);
              if (winner) {
                grid[validMove.row][validMove.col] = 'X';
                return validMove;
              } else {
                symbol === 'X' ? symbol = 'O' : symbol = 'X';
                grid[validMove.row][validMove.col] = ' ';
              }
            }
          }
        }

        let smartMove = smartMoveHelper();
        if (!smartMove) {
          return ComputerPlayer.randomMove(grid);
        }
        return smartMove;
      }
    }

    return null;
  }
}

let grid = [['X', 'X', 'X'],
['X', 'X', 'X'],
['X', 'X', 'X']]


// console.log(emptySlotsInBoard(grid).length)
// let validMoves = ComputerPlayer.getValidMoves(grid);
// let smartMove = ComputerPlayer.getSmartMove(grid, 'X');
// console.log(smartMove);
// grid[smartMove.row][smartMove.col] = 'X'
// console.log(grid)

module.exports = ComputerPlayer;










/**
 * let validMoves = ComputerPlayer.getValidMoves(grid);
     // let winner = TTT.checkWin(grid);

    for (let i = 0; i < validMoves.length; i++) {
      let validMove = validMoves[i];

      grid[validMove.row][validMove.col] = symbol;

      let winner = TTT.checkWin(grid);

      if (winner) {
        console.log(grid)
        return validMove;
      } else {
        symbol == 'X' ? symbol = 'O' : symbol = 'X';
      }
    }
  }
 */









/*
let validMoves = ComputerPlayer.getValidMoves(grid);
    console.log(validMoves)
    for (let i = 0; i < validMoves.length; i++) {
      let validMove = validMoves[i];
      grid[validMove.row][validMove.col] = symbol;
      // if (TTT.checkWin(grid)) {
      //   return validMove;
      // } else {
      //   grid[validMove.row][validMove.col] = ' ';
      // }
      let winner = TTT.checkWin(grid);
      if(winner) {
        if (winner === symbol) return validMove;
        else if (winner === 'T') return 'TIE';
        else {
          
        }
      }
    }
    return false;
*/
