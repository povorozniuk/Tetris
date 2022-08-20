

let tetrisPiece1 = [

    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]

]

let tetrisPiece1Reflected = [

    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]

]

let tetrisPiece2 = [

    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]

]


let tetrisPiece2Reflected = [

    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]

]

let tetrisPiece3 = [

    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]

]

let tetrisPiece4 = [

    [1, 1],
    [1, 1]

]

let tetrisPiece5 = [

    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0]

]

let playGameSquares = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 0],

    [0, 0, 0],

    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],

    [0, 0, 0],

    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],

    [0, 0, 0],

    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0]
]


let gameOverTextSquares = [
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
]

let scoreTextSquares = [
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],

    [0, 0, 0, 0, 0],

    [1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],

    [0, 0, 0, 0, 0],

    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],

    [0, 0, 0, 0, 0],

    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],

    [0, 0, 0, 0, 0],

    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1]
]

let scoreValueSquaresMapping = {
    0: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    1: [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    2: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
    ],
    3: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    4: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    5: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    6: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    7: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    8: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    9: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
}

let tetrisPieces = [tetrisPiece1, tetrisPiece1Reflected, tetrisPiece2, tetrisPiece2Reflected, tetrisPiece3, tetrisPiece4, tetrisPiece5];

function getRandomRotation(shape) {
    let numberOfPossibleRotations = 4;
    let randomRotation = Math.random() * numberOfPossibleRotations;
    for (rotation = 0; rotation < randomRotation; rotation++) {
        shape = rotateLeft(shape);
    }
    return shape;
}

function rotateLeft(shape) {
    let result = []
    let height = shape.length;
    let width = shape[0].length;

    for (let index = width - 1; index >= 0; index--) {
        let newRow = [];
        for (let row = 0; row < height; row++) {
            newRow.push(shape[row][index])
        }
        result.push(newRow)
    }


    let maxIterations = 4;
    let currentIterationMoveUp = 0;

    let isFirstRowEmpty = result[0].every(cell => {
        return cell == 0
    });

    while (isFirstRowEmpty && currentIterationMoveUp <= maxIterations) {
        movedUp = []
        for (let rowIndex = 0; rowIndex < result.length; rowIndex++) {
            if (rowIndex > 0) {
                movedUp[rowIndex - 1] = result[rowIndex];
            }
        }
        movedUp[movedUp.length] = result[0];
        result = movedUp;
        currentIterationMoveUp++;
        isFirstRowEmpty = result[0].every(cell => {
            return cell == 0
        });
        // movedUpByXSquares++;
    }
    // console.log(`Moved up by ${movedUpByXSquares} squares`);
    // console.log(`Moved left by ${movedLeftByXSquares} squares`);
    return result;
}

let isAnchorDotVisible = true;


let desiredNumberOfRows = 24;
let desiredNumberOfColumns = 13;

let smallCellSize = getComputedStyle(document.body).getPropertyValue('--smallCell');
let standardCellSize = getComputedStyle(document.body).getPropertyValue('--standardCell');



// HTML ELEMENTS
let controls = document.querySelector('.controls')

let nextTetrisPieceArea = document.querySelector('.next-figure');

let level = document.querySelector('.level');
let score = document.querySelector('.score');

let mobileScore = document.querySelector('.mobile-score > h1');

let nextFigureArea1 = document.querySelectorAll('.next-figure-1 > div');
let nextFigureArea2 = document.querySelectorAll('.next-figure-2 > div');
let nextFigureArea3 = document.querySelectorAll('.next-figure-3 > div');

let actionDown = document.querySelector('.action-down');
let actionLeft = document.querySelector('.action-left');
let actionRight = document.querySelector('.action-right');
let actionRotate = document.querySelector('.action-rotate');

let actionControls = document.querySelector('.action-controls');

let screen = document.querySelector('.screen');

let mobileLevelElements = {
    1: document.querySelector('.level-bar-value-1'),
    2: document.querySelector('.level-bar-value-2'),
    3: document.querySelector('.level-bar-value-3'),
    4: document.querySelector('.level-bar-value-4'),
    5: document.querySelector('.level-bar-value-5'),
    6: document.querySelector('.level-bar-value-6'),
    7: document.querySelector('.level-bar-value-7'),
    8: document.querySelector('.level-bar-value-8'),
    9: document.querySelector('.level-bar-value-9'),
    10: document.querySelector('.level-bar-value-10')
}



let timerValue = 0
let interval;

const mousePress = (direction) => {
    keydown({ key: direction });
    interval = setInterval(() => {
        timerValue++
        console.log(timerValue)
        if (timerValue > 3) {
            keydown({ key: direction })
        }

    }, 100)
}

const mouseRelease = () => {
    clearInterval(interval)
    timerValue = 0
}


resizeCells();
embedDivsIntoScreen();

let middleSquare = Math.floor(desiredNumberOfColumns / 2);


let timer;

let state = {

    isGameOver: true,
    isAlowedToStartNewGame: true,
    reachedRightSide: false,
    reachedLeftSide: false,
    justFinishedRotation: true,

    speed: {
        startingSpeed: 930,
        fallDownSpeed: 25,
        isArtificiallyIncreased: false //can be set to true when pressing down to speed up the falling process
    },

    tetrisPiece: {

        currentTetrisPiece: [],
        currentRotation: 0,
        currentCoordinatesOnGrid: [], //current coordinates of the falling tetris piece
        anchorCell: [0, middleSquare - 1], //this is top leftmost cell of the falling tetris piece
        pieceJustAppeared: true
    },
    controls: {
        level: 0,
        score: 0
    },
    upcomingTetrisPieces: []
}

function tearDownLevelBar(level) {
    mobileLevelElements[level].classList.remove('level-bar-white-cell-disappears-animation')
    mobileLevelElements[level].classList.remove('level-bar-animation')
}


function resizeCells() {
    if (window.matchMedia('(max-width: 42rem)').matches) {
        screen.style.gridTemplateColumns = `repeat(${desiredNumberOfColumns}, 1.3rem)`;
        screen.style.gridTemplateRows = `repeat(${desiredNumberOfRows}, 1.3rem)`;
    } else {
        screen.style.gridTemplateColumns = `repeat(${desiredNumberOfColumns}, 2rem)`;
        screen.style.gridTemplateRows = `repeat(${desiredNumberOfRows}, 2rem)`;
    }
}

function embedDivsIntoScreen() {
    let totalCells = desiredNumberOfRows * desiredNumberOfColumns;

    for (let i = 0; i < totalCells; i++) {
        const div = document.createElement("div");
        div.classList.add(`screen__square--${i + 1}`)
        div.classList.add(`screen__square`)
        screen.appendChild(div);
    }
}

let screenSquares = document.querySelectorAll('.screen > div');
let board = (function () {
    let board = [];
    let row = [];
    for (let i = 0; i <= screenSquares.length; i++) {
        if (row.length < desiredNumberOfColumns) {
            row.push(screenSquares[i]);
        } else {
            board.push(row);
            row = [];
            row.push(screenSquares[i]);
        }
    }
    return board;
})();

let boardNextPiece1 = (function () {
    let board = [];
    let row = [];
    for (let i = 0; i <= nextFigureArea1.length; i++) {
        if (row.length < 4) {
            row.push(nextFigureArea1[i]);
        } else {
            board.push(row);
            row = [];
            row.push(nextFigureArea1[i]);
        }
    }
    return board;
})();

let boardNextPiece2 = (function () {
    let board = [];
    let row = [];
    for (let i = 0; i <= nextFigureArea2.length; i++) {
        if (row.length < 4) {
            row.push(nextFigureArea2[i]);
        } else {
            board.push(row);
            row = [];
            row.push(nextFigureArea2[i]);
        }
    }
    return board;
})();

let boardNextPiece3 = (function () {
    let board = [];
    let row = [];
    for (let i = 0; i <= nextFigureArea3.length; i++) {
        if (row.length < 4) {
            row.push(nextFigureArea3[i]);
        } else {
            board.push(row);
            row = [];
            row.push(nextFigureArea3[i]);
        }
    }
    return board;
})();

function canMoveDown(futureCoordinates) {
    return futureCoordinates.every(coordinates => {
        let nextRowIsNotLast = coordinates[0] != desiredNumberOfRows;
        if (!nextRowIsNotLast) {
            return false;
        } else {
            let gridSquare = board[coordinates[0]][coordinates[1]];
            let nextSquareDownIsNotMarkedAsOccupied = !gridSquare.classList.contains("screen__square--occupied");
            return nextSquareDownIsNotMarkedAsOccupied;
        }
    })
}

function canMoveRight(futureCoordinates) {
    if (state.reachedRightSide && !state.justFinishedRotation) {
        return false;
    }

    if (state.justFinishedRotation) {
        state.justFinishedRotation = false;
    }
    let maxColumn = 0;
    futureCoordinates.forEach(coordinate => {
        if (coordinate[1] > maxColumn) {
            maxColumn = coordinate[1];
        }
    })

    if (maxColumn === desiredNumberOfColumns) {
        state.reachedRightSide = true;
        return false;
    }
    return futureCoordinates.every(coordinates => {
        let gridSquare = board[coordinates[0]][coordinates[1]];
        let nextSquareRightIsNotMarkedAsOccupied = !gridSquare.classList.contains("screen__square--occupied");
        return nextSquareRightIsNotMarkedAsOccupied;
    })
}

function canMoveLeft(futureCoordinates) {
    if (state.reachedLeftSide) {
        return false;
    }
    let minColumn = desiredNumberOfColumns;
    futureCoordinates.forEach(coordinate => {
        if (coordinate[1] < minColumn) {
            minColumn = coordinate[1];
        }
    })
    if (minColumn < 0) {
        state.reachedLeftSide = true;
        return false;
    }
    return futureCoordinates.every(coordinates => {
        let gridSquare = board[coordinates[0]][coordinates[1]];
        let nextSquareLeftIsNotMarkedAsOccupied = !gridSquare.classList.contains("screen__square--occupied");
        return nextSquareLeftIsNotMarkedAsOccupied;
    })
}

function markSquaresOccupied() {
    state.tetrisPiece.currentCoordinatesOnGrid.forEach(coordinate => {
        board[coordinate[0]][coordinate[1]].classList.remove("screen__square--moving");
        board[coordinate[0]][coordinate[1]].classList.add("screen__square--occupied");
    })
    state.reachedLeftSide = false;
    state.reachedRightSide = false;
    if (isAnchorDotVisible) {
        undrawAnchor();
    }
    state.tetrisPiece.anchorCell = [0, middleSquare - 1]
}

function removeRow(rowNumber) {
    board[rowNumber].forEach(cell => cell.classList.remove("screen__square--occupied"));
}

function collapseRowWithForce(rowNumberCollapsed) {
    for (let rowIndex = rowNumberCollapsed - 1; rowIndex >= 0; rowIndex--) {
        // console.log('ROW ' + rowIndex)
        for (let cellIndex = 0; cellIndex < desiredNumberOfColumns; cellIndex++) {
            let currentRowIndex = rowIndex;
            let currentCellIndex = cellIndex;
            let futureRowIndex = currentRowIndex + 1;
            // console.log('Accessing ' + rowIndex + '/' + cellIndex)
            if (board[currentRowIndex][currentCellIndex].classList.contains("screen__square--occupied")) {
                // console.log(`Moving cell from [ row ${currentRowIndex} cell ${cellIndex}] to [ row ${futureRowIndex} cell ${currentCellIndex} ]`)
                board[currentRowIndex][currentCellIndex].classList.remove("screen__square--occupied");
                board[futureRowIndex][currentCellIndex].classList.add("screen__square--occupied");
            } else {
                board[futureRowIndex][currentCellIndex].classList.remove("screen__square--occupied")
            }
        }
    }
}



function collapseOccupiedCellsDown(rowNumberCollapsed) {
    for (let rowIndex = rowNumberCollapsed - 1; rowIndex >= 0; rowIndex--) {
        // console.log('ROW ' + rowIndex)
        for (let cellIndex = 0; cellIndex < desiredNumberOfColumns; cellIndex++) {
            let currentRowIndex = rowIndex;
            let currentCellIndex = cellIndex;
            let futureRowIndex = currentRowIndex + 1;
            // console.log('Accessing ' + rowIndex + '/' + cellIndex)
            if (board[currentRowIndex][currentCellIndex].classList.contains("screen__square--occupied")) {
                // console.log(`Moving cell from [ row ${currentRowIndex} cell ${cellIndex}] to [ row ${futureRowIndex} cell ${currentCellIndex} ]`)
                board[currentRowIndex][currentCellIndex].classList.remove("screen__square--occupied");
                board[futureRowIndex][currentCellIndex].classList.add("screen__square--occupied");
            }
        }
    }
}

function identifyRowsWhichCanBeRemoved() {
    let rowsWhichCanBeRemoved = [];
    for (let row = 0; row <= desiredNumberOfRows - 1; row++) {
        let currentRow = board[row];
        if (currentRow.some(square => !square.classList.contains("screen__square--occupied"))) {
            //row is not filled
        } else {
            rowsWhichCanBeRemoved.push(row);
            // console.log(`Rows ${rowsWhichCanBeRemoved} can be removed`)
        }
        // checkedRows++;
    }
    // console.log(`Checked ${checkedRows} rows`)
    return rowsWhichCanBeRemoved;
}

function updateNextTetrisPiece() {
    let coordinates1 = convertShapeToCoordinates((state.upcomingTetrisPieces[0]), false, false);
    let coordinates2 = convertShapeToCoordinates((state.upcomingTetrisPieces[1]), false, false);
    let coordinates3 = convertShapeToCoordinates((state.upcomingTetrisPieces[2]), false, false);

    for (let row = 0; row < boardNextPiece1.length; row++) {
        for (let cell = 0; cell < boardNextPiece1[row].length; cell++) {
            boardNextPiece1[row][cell].classList.remove('next-figure-cell-occupied')
        }
    }

    coordinates1.forEach(coordinate => {
        boardNextPiece1[coordinate[0]][coordinate[1]].classList.add('next-figure-cell-occupied')
    })

    for (let row = 0; row < boardNextPiece2.length; row++) {
        for (let cell = 0; cell < boardNextPiece2[row].length; cell++) {
            boardNextPiece2[row][cell].classList.remove('next-figure-cell-occupied')
        }
    }

    coordinates2.forEach(coordinate => {
        boardNextPiece2[coordinate[0]][coordinate[1]].classList.add('next-figure-cell-occupied')
    })

    for (let row = 0; row < boardNextPiece3.length; row++) {
        for (let cell = 0; cell < boardNextPiece3[row].length; cell++) {
            boardNextPiece3[row][cell].classList.remove('next-figure-cell-occupied')
        }
    }

    coordinates3.forEach(coordinate => {
        boardNextPiece3[coordinate[0]][coordinate[1]].classList.add('next-figure-cell-occupied')
    })
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function removeMovingTetrisPieceSquare(squareCoordinates) {
    board[squareCoordinates[0]][squareCoordinates[1]].classList.remove('screen__square--moving');
}

function cleanUpNextFigureBoard(area) {
    for (let squareIndex = 0; squareIndex < area.length; squareIndex++) {
        area[squareIndex].classList.remove('next-figure-cell-occupied')
    }
}

function tearDownScreenSquare(square) {
    square.classList.remove('screen__square--game-in-progress');
}

async function endGame() {
    state.isAlowedToStartNewGame = false;

    let fallingTetrisPieceSquares = state.tetrisPiece.currentCoordinatesOnGrid;
    let delayMs = 100;
    await delay(delay)
    cleanUpNextFigureBoard(nextFigureArea1)
    await delay(delayMs)
    cleanUpNextFigureBoard(nextFigureArea2)
    await delay(delayMs)
    cleanUpNextFigureBoard(nextFigureArea3)
    await delay(delayMs)

    for (let i = 10; i > 0; i--) {
        tearDownLevelBar(i);
        await delay(delayMs)
    }
    for (let i = 0; i < fallingTetrisPieceSquares.length; i++) {
        removeMovingTetrisPieceSquare(fallingTetrisPieceSquares[i])
        await delay(delayMs)
    }
    for (let i = 0; i < 24; i++) {
        collapseRowWithForce(23)
        await delay(delayMs)
    }

    drawGameOver(convertShapeToCoordinates(gameOverTextSquares, true, false))
    await delay(2000)

    for (let i = 0; i < 24; i++) {
        collapseRowWithForce(23)
        await delay(50)
    }

    drawScore(convertShapeToCoordinates(scoreTextSquares, true, false))
    await delay(2000)

    for (let i = 0; i < 24; i++) {
        collapseRowWithForce(23)
        await delay(50)
    }

    drawScoreValue(state.controls.score)
    await delay(2000)

    for (let i = 0; i < 24; i++) {
        collapseRowWithForce(23)
        await delay(50)
    }

    for (let i = 0; i < screenSquares.length; i++) {
        tearDownScreenSquare(screenSquares[i]);
    }

    screen.classList.add('start-screen');
    state.controls.score = 0;
    state.controls.level = 0;

    state.speed.startingSpeed = 930;
    level.textContent = `Level: ${state.controls.level}`
    score.textContent = `Score: ${state.controls.score}`
    mobileScore.textContent = state.controls.score;
    state.isAlowedToStartNewGame = true;

}


function moveDown() {
    // console.log('Moving down + ' + new Date())
    let futureCoordinate = getShapeCoordinatesMoveDown();
    let hasSpaceToMoveDown = canMoveDown(futureCoordinate)
    if (!state.isGameOver && state.tetrisPiece.anchorCell[0] === 0 && !hasSpaceToMoveDown) {
        clearInterval(timer)
        state.isGameOver = true;
        console.log('Game Over')
        endGame();
    }
    if (!state.isGameOver && !hasSpaceToMoveDown) {
        if (state.speed.isArtificiallyIncreased === true) {
            clearInterval(timer)
            timer = setInterval(moveDown, state.speed.startingSpeed)
            state.speed.isArtificiallyIncreased = false;
        }
        markSquaresOccupied();
        let rowsThatCanBeRemoved = identifyRowsWhichCanBeRemoved();
        if (rowsThatCanBeRemoved.length > 0) {
            rowsThatCanBeRemoved.forEach(rowIndex => {
                removeRow(rowIndex);
                collapseOccupiedCellsDown(rowIndex);
                updateGameStats();
                updateGameSpeed();
            })
        }

        state.tetrisPiece.pieceJustAppeared = true;
        state.upcomingTetrisPieces[3] = grabRandomTetrisPiece();
        let newTetrisPiece = state.upcomingTetrisPieces[0]
        state.upcomingTetrisPieces[0] = state.upcomingTetrisPieces[1];
        state.upcomingTetrisPieces[1] = state.upcomingTetrisPieces[2];
        state.upcomingTetrisPieces[2] = state.upcomingTetrisPieces[3];


        state.tetrisPiece.currentCoordinatesOnGrid = convertShapeToCoordinates(newTetrisPiece, false, true)
        state.tetrisPiece.currentTetrisPiece = newTetrisPiece;
        futureCoordinate = state.tetrisPiece.currentCoordinatesOnGrid;

        if (!state.isGameOver) {
            updateNextTetrisPiece();
        }
    }
    if (!state.isGameOver) {
        undraw();
        draw(futureCoordinate, 'down')
    }
}

function convertShapeToCoordinates(shape, isText, adjustForAnchor) {
    result = []
    let shapeRowIndex = 0;
    let shapeInsideRowIndex = 0;
    shape.forEach(shapeRow => {

        shapeRow.forEach(partOfTheShape => {
            if (partOfTheShape === 1) {
                if (isText) {
                    let textLength = shape[0].length;
                    let freeSquaresWidth = desiredNumberOfColumns - textLength;
                    let xOffset = Math.floor(freeSquaresWidth / 2);
                    result.push([shapeRowIndex, shapeInsideRowIndex + xOffset]);
                } else {
                    if (adjustForAnchor) {
                        result.push([shapeRowIndex, shapeInsideRowIndex + state.tetrisPiece.anchorCell[1]]);
                    } else {
                        result.push([shapeRowIndex, shapeInsideRowIndex]);
                    }
                }

            }
            shapeInsideRowIndex++;
        })
        shapeRowIndex++;
        shapeInsideRowIndex = 0;
    });
    return result;
}

function getShapeCoordinatesMoveDown() {
    let updatedCoordinates = [];
    state.tetrisPiece.currentCoordinatesOnGrid.forEach(coordinate => {
        let y = coordinate[0] + 1;
        let x = coordinate[1];
        updatedCoordinates.push([y, x]);
    })
    return updatedCoordinates;
}

function getShapeCoordinatesMoveLeft() {
    let updatedCoordinates = [];
    state.tetrisPiece.currentCoordinatesOnGrid.forEach(coordinate => {
        let y = coordinate[0];
        let x = coordinate[1] - 1;
        updatedCoordinates.push([y, x]);
    })
    return updatedCoordinates;
}

function getShapeCoordinatesMoveRight() {
    let updatedCoordinates = [];
    state.tetrisPiece.currentCoordinatesOnGrid.forEach(coordinate => {
        let y = coordinate[0];
        let x = coordinate[1] + 1;
        updatedCoordinates.push([y, x]);
    })
    return updatedCoordinates;
}

function getShapeCoordinatesRotated() {
    let result = { coordinates: [], shape: [] }

    let currentPiece = state.tetrisPiece.currentTetrisPiece;
    let rotatedPiece = rotateLeft(currentPiece);
    let coordinatesOfRotatedPiece = convertShapeToCoordinates(rotatedPiece);

    let adjustedCoordinatesBasedOnAnchor = []
    coordinatesOfRotatedPiece.forEach(coordinate => {
        adjustedCoordinatesBasedOnAnchor.push([coordinate[0] + state.tetrisPiece.anchorCell[0], coordinate[1] + state.tetrisPiece.anchorCell[1]])
    })
    result.coordinates = adjustedCoordinatesBasedOnAnchor;
    result.shape = rotatedPiece;
    return result;
}

function canRotate(futureCoordinates) {
    return futureCoordinates.every(coordinates => {
        let nextRowIsNotLast = coordinates[0] != desiredNumberOfRows;
        if (!nextRowIsNotLast) {
            return false;
        } else {
            let gridSquare = board[coordinates[0]][coordinates[1]];
            if (gridSquare == undefined) return false;
            let nextSquareIsNotMarkedAsOccupied = !gridSquare.classList.contains("screen__square--occupied");
            return nextSquareIsNotMarkedAsOccupied;
        }
    })
}

function undrawAnchor() {
    board[state.tetrisPiece.anchorCell[0]][state.tetrisPiece.anchorCell[1]].classList.remove("anchor")
}

function undraw() {
    state.tetrisPiece.currentCoordinatesOnGrid.forEach(coordinate => {
        board[coordinate[0]][coordinate[1]].classList.remove("screen__square--moving");
    })
    board[state.tetrisPiece.anchorCell[0]][state.tetrisPiece.anchorCell[1]].classList.remove("anchor")

}

function drawAnchor(forceCenter) {
    if (forceCenter) {
        board[state.tetrisPiece.anchorCell[0]][state.tetrisPiece.anchorCell[1] + middleSquare].classList.add("anchor")
    } else {
        board[state.tetrisPiece.anchorCell[0]][state.tetrisPiece.anchorCell[1]].classList.add("anchor")
    }
}

function getNextRotationAngle() {
    let angles = [0, 90, 180, 270];
    let nextAngle = state.tetrisPiece.currentRotation === 270 ? 0 : angles[angles.indexOf(state.tetrisPiece.currentRotation) + 1];
    state.tetrisPiece.currentRotation = nextAngle;
    return nextAngle;
}

function draw(coordinates, direction) {
    state.tetrisPiece.currentCoordinatesOnGrid = coordinates;
    coordinates.forEach(coordinate => {
        board[coordinate[0]][coordinate[1]].classList.add("screen__square--moving");
    })
    switch (direction) {
        case 'down':
            if (!state.tetrisPiece.pieceJustAppeared) {
                state.tetrisPiece.anchorCell = [state.tetrisPiece.anchorCell[0] + 1, state.tetrisPiece.anchorCell[1]]
            }

            state.tetrisPiece.pieceJustAppeared = false;
            break;
        case 'right':
            state.tetrisPiece.anchorCell = [state.tetrisPiece.anchorCell[0], state.tetrisPiece.anchorCell[1] + 1]
            break;
        case 'left':
            state.tetrisPiece.anchorCell = [state.tetrisPiece.anchorCell[0], state.tetrisPiece.anchorCell[1] - 1]
            break;
    }
    if (isAnchorDotVisible) {
        drawAnchor()
    }
}

function grabRandomTetrisPiece() {
    let randomIndex = Math.floor(Math.random() * tetrisPieces.length);
    let tetrisPiece = tetrisPieces[randomIndex];
    let randomRotation = getRandomRotation(tetrisPiece);
    return randomRotation;
}

let buttonsWeCareAbout = ['ArrowRight', 'd', 'ArrowUp', 'w', 'ArrowLeft', 'a', 'ArrowDown', 's']

let touchstartX = 0
let touchendX = 0
let touchstartY = 0;
let touchendY = 0;

let previousX = 0;
let previousY = 0;

let previousActionTimeSeconds = 0;
let isPreformingAction = false;


function keyup(event) {
    if (!state.isGameOver) {
        if (buttonsWeCareAbout.includes(event.key)) {
            if (['ArrowDown', 's'].includes(event.key)) {
                clearInterval(timer)
                timer = setInterval(moveDown, state.speed.startingSpeed);
                state.speed.isArtificiallyIncreased = false;
            }
        }
    }
}

function keydown(event) {
    if (!state.isGameOver) {
        // console.log('Processing key')
        if (buttonsWeCareAbout.includes(event.key)) {
            // console.log(event.key)
            let coordinates;
            switch (event.key) {
                case 'ArrowRight':
                case 'd':
                    state.reachedLeftSide = false;
                    coordinates = getShapeCoordinatesMoveRight();
                    let isAllowedToMoveRight = canMoveRight(coordinates);
                    if (isAllowedToMoveRight) {
                        undraw();
                        draw(coordinates, 'right');
                    }
                    break;
                case 'ArrowLeft':
                case 'a':
                    state.reachedRightSide = false;
                    coordinates = getShapeCoordinatesMoveLeft();
                    let isAllowedToMoveLeft = canMoveLeft(coordinates);
                    if (isAllowedToMoveLeft) {
                        undraw();
                        draw(coordinates, 'left');
                    }
                    break;
                case 'ArrowUp':
                case 'w':
                    let rotatedResult = getShapeCoordinatesRotated();
                    let coordinatesRotated = rotatedResult.coordinates;
                    let shapeRotated = rotatedResult.shape;
                    let isAllowedToRotate = canRotate(coordinatesRotated);
                    if (isAllowedToRotate) {
                        state.tetrisPiece.currentTetrisPiece = shapeRotated;
                        undraw();
                        draw(coordinatesRotated, 'rotate')
                        state.justFinishedRotation = true;
                        state.reachedRightSide = false;
                    }
                    break;
                case 'ArrowDown':
                case 's':
                    clearInterval(timer)
                    timer = setInterval(moveDown, state.speed.fallDownSpeed);
                    state.speed.isArtificiallyIncreased = true;
                    break;
            }
        }
    }
}


function updateGameStats() {
    state.controls.score += 1;
    score.textContent = `Score: ${state.controls.score}`
    mobileScore.textContent = state.controls.score;
}

let levelBar = document.querySelector('.level-bar')

function changeMobileLevel() {
    mobileLevelElements[state.controls.level].classList.add('level-bar-white-cell-disappears-animation')
    if (state.controls.level === 10) {
        levelBar.classList.add('level-bar-animation')
    }
}



function updateGameSpeed() {
    if (state.controls.score % 3 == 0) {
        let newSpeed = state.speed.startingSpeed - 75;
        if (newSpeed >= 180 && state.controls.level < 10) {
            state.controls.level = state.controls.level + 1;
            state.speed.startingSpeed = state.speed.startingSpeed - 75;
            clearInterval(timer)
            timer = setInterval(moveDown, state.speed.startingSpeed)
            changeMobileLevel()
            level.textContent = `Level: ${state.controls.level}`
        }
    }
}

function startGame() {
    if (state.isGameOver && state.isAlowedToStartNewGame) {
        state.controls.level = 1;
        level.textContent = "Level: 1"
        state.isGameOver = false;
        screen.classList.remove('start-screen');
        screenSquares.forEach(cell => { cell.classList.add('screen__square--game-in-progress') });

        let piece1 = grabRandomTetrisPiece();
        let piece2 = grabRandomTetrisPiece();
        let piece3 = grabRandomTetrisPiece();

        state.upcomingTetrisPieces[0] = piece1;
        state.upcomingTetrisPieces[1] = piece2;
        state.upcomingTetrisPieces[2] = piece3;

        changeMobileLevel()

        state.tetrisPiece.currentTetrisPiece = grabRandomTetrisPiece();
        let coordinates = convertShapeToCoordinates(state.tetrisPiece.currentTetrisPiece, false, true)
        updateNextTetrisPiece()
        draw(coordinates, 'down')
        timer = setInterval(moveDown, state.speed.startingSpeed);
    }
}



function drawPlayLetters(coordinates) {
    let moveDownNRows = 2;
    coordinates.forEach(coordinate => {
        board[coordinate[0] + moveDownNRows][coordinate[1]].classList.add('start-screen-text')
    })
}

function drawGameOver(coordinates) {
    let moveDownNRows = 2;
    coordinates.forEach(coordinate => {
        board[coordinate[0] + moveDownNRows][coordinate[1]].classList.add('screen__square--occupied')
    })
}

function drawScore(coordinates) {
    let moveDownNRows = 2;
    coordinates.forEach(coordinate => {
        board[coordinate[0] + moveDownNRows][coordinate[1]].classList.add('screen__square--occupied')
    })
}

function drawScoreValue(value) {

    let shape = [
        [],
        [],
        [],
        [],
        []
    ]

    let valueString = value.toString();
    let numberLength = valueString.length;
    if (numberLength <= 3) {
        for (let currentNumber = 0; currentNumber < valueString.length; currentNumber++) {
            let currentNumberDrawn = scoreValueSquaresMapping[valueString[currentNumber]];
            shape[0] = shape[0].concat(currentNumberDrawn[0])
            shape[1] = shape[1].concat(currentNumberDrawn[1])
            shape[2] = shape[2].concat(currentNumberDrawn[2])
            shape[3] = shape[3].concat(currentNumberDrawn[3])
            shape[4] = shape[4].concat(currentNumberDrawn[4])
            if (currentNumber + 1 < valueString.length) {
                shape[0] = shape[0].concat([0])
                shape[1] = shape[1].concat([0])
                shape[2] = shape[2].concat([0])
                shape[3] = shape[3].concat([0])
                shape[4] = shape[4].concat([0])
            }
        }
    } else {
        alert(`Props to you for scoring ${valueString} but the screen only displays score up to 999 :) `)
    }

    let coordinates = convertShapeToCoordinates(shape, true, false);

    let moveDownNRows = 9;
    coordinates.forEach(coordinate => {
        board[coordinate[0] + moveDownNRows][coordinate[1]].classList.add('screen__square--occupied')
    })
}


// Event Listeners

actionDown.addEventListener('mousedown', e => {
    e.preventDefault()
    keydown({ key: 'ArrowDown' })
})

actionDown.addEventListener('mouseup', e => {
    e.preventDefault()
    keyup({ key: 'ArrowDown' })
});


actionDown.addEventListener('touchstart', e => {
    actionDown.style.backgroundImage = "url('down-active.png')";
    e.preventDefault()
    keydown({ key: 'ArrowDown' })
    console.log('Touch Start ' + new Date() / 1000)
});

actionDown.addEventListener('touchend', e => {
    actionDown.style.backgroundImage = "url('down.png')";
    e.preventDefault()
    keyup({ key: 'ArrowDown' })
    console.log('Touch End ' + new Date() / 1000)
});

actionLeft.addEventListener('mousedown', e => {
    e.preventDefault()
    keydown('ArrowLeft')
    mousePress('ArrowLeft');
});
actionLeft.addEventListener('mouseup', e => {
    e.preventDefault()
    mouseRelease();
});

actionLeft.addEventListener('touchstart', e => {
    actionLeft.style.backgroundImage = "url('left-active.png')";
    e.preventDefault()
    keydown('ArrowLeft')
    mousePress('ArrowLeft');
});
actionLeft.addEventListener('touchend', e => {
    actionLeft.style.backgroundImage = "url('left.png')";
    e.preventDefault()
    mouseRelease();
});

actionRight.addEventListener('mousedown', e => {
    e.preventDefault()
    keydown('ArrowRight')
    mousePress('ArrowRight');
});

actionRight.addEventListener('mouseup', e => {
    e.preventDefault()
    mouseRelease();
});

actionRight.addEventListener('touchstart', e => {
    actionRight.style.backgroundImage = "url('right-active.png')";
    e.preventDefault()
    keydown('ArrowRight')
    mousePress('ArrowRight');
});

actionRight.addEventListener('touchend', e => {
    actionRight.style.backgroundImage = "url('right.png')";
    e.preventDefault()
    mouseRelease();
});


actionRotate.addEventListener('mousedown', e => {
    e.preventDefault()
    keydown({ key: 'ArrowUp' })
});

actionRotate.addEventListener('mouseup', e => {
    e.preventDefault()
    keyup({ key: 'ArrowUp' })
});

actionRotate.addEventListener('touchstart', e => {
    actionRotate.style.backgroundImage = "url('rotate-active.png')";
    e.preventDefault()
    keydown({ key: 'ArrowUp' })
});

actionRotate.addEventListener('touchend', e => {
    actionRotate.style.backgroundImage = "url('rotate.png')";
    e.preventDefault()
    keyup({ key: 'ArrowUp' })
});

window.addEventListener("keydown", keydown)
window.addEventListener("keyup", keyup)

screen.addEventListener('click', startGame);

window.onresize = resizeCells;


if (!window.matchMedia('(max-width: 42rem)').matches) {
    if (WURFL.is_mobile === false || WURFL.form_factor === "Desktop") {
        actionControls.style.display = 'none';
    }
}

let playGameCoordinates = convertShapeToCoordinates(playGameSquares, true, false);
drawPlayLetters(playGameCoordinates)
