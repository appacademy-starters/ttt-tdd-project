const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0; // 0
    this.col = 0; // 0

    this.gridColor = 'black';
    this.cursorColor = 'yellow';
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  #movementHelper = (directions) => {
    Screen.render();
    this.resetBackgroundColor();
    directions == "up" ? this.row--
      : directions == "down" ? this.row++
        : directions == "left" ? this.col--
          : this.col++;
    this.setBackgroundColor();
    Screen.render();
  }

  up = () => {
    // Move cursor up
    if (this.row > 0) {
      this.#movementHelper('up')
    }
  }

  down = () => {
    // Move cursor down
    if (this.row < this.numRows - 1) {
      this.#movementHelper('down')
    }
  }

  left = () => {
    // Move cursor left
    if (this.col > 0) {
      this.#movementHelper('left')
    }
  }

  right = () => {
    // Move cursor right
    if (this.col < this.numCols - 1) {
      this.#movementHelper('right');
    }
  }

}

module.exports = Cursor;
