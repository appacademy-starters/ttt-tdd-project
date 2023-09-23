function isEmptyGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== '' && grid[i][j] !== ' ') {
                return false;
            }
        }
    }
    return true;
}

function isHorizontalWin(grid) {
    for (let row = 0; row < grid.length; row++) {
        // console.log(grid[row])
        for (let col = 1; col < grid.length - 1; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row][col - 1] === grid[row][col] && grid[row][col] === grid[row][col + 1]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isVerticalWin(grid) {
    for (let row = 1; row < grid.length - 1; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row - 1][col] === grid[row][col] && grid[row][col] === grid[row + 1][col]) {
                    return grid[row][col];
                }
            }
        }
    }
    return false;
}

function isDiagonalWin(grid) {
    for (let row = 1; row < grid.length - 1; row++) {
        for (let col = 1; col < grid[0].length - 1; col++) {
            if (grid[row][col] !== '' && grid[row][col] !== ' ') {
                if (grid[row - 1][col - 1] === grid[row][col] && grid[row][col] === grid[row + 1][col + 1]) {
                    return grid[row][col];
                } else if (grid[row + 1][col - 1] === grid[row][col] && grid[row][col] === grid[row - 1][col + 1]) {
                    return grid[row][col];

                }
            }
        }
    }
    return false;
}

function isTie(grid) {
    if (isFullBoard(grid)) {
        if (!(isDiagonalWin(grid) && isHorizontalWin(grid) && isVerticalWin(grid))) {
            return 'T';
        }
    }
    return false;
}

function isFullBoard(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '' || grid[row][col] === ' ') {
                return false;
            }
        }
    }
    return true;
}
module.exports = {
    isEmptyGrid,
    isHorizontalWin,
    isVerticalWin,
    isDiagonalWin,
    isTie,
    isFullBoard
}
