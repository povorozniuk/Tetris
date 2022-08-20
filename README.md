# Tetris
Tetris written using vanilla Javascript + HTML/CSS

## Desktop layout:

<p align="center">
  <img src="https://user-images.githubusercontent.com/29631366/185742181-206accd6-2839-4957-ac91-10206018bf53.png">
</p>

## Mobile layout:

<p align="center">
  <img src="https://user-images.githubusercontent.com/29631366/185744013-b02df86c-6ab9-47f2-8953-2b82837098a9.png">
</p>

<p align="center">
  <a href="https://povorozniuk.github.io/Tetris">DEMO</a>
</p>

## How to play

Desktop:

1. Click on the screen to start the game. 
2. Use keyboard's `arrow left`, `arrow right`, `arrow up`, and ` arrow down` or `a`, `w`, `s`, `d`

Mobile/Tablet:

1. Tap on the screen to start the game. 
2. Use 4 buttons at the bottom to control the piece

## Development details

I used the grid to create the main playing area. It has 13 columns and 24 rows. 13 x 24 gives us 132 cells. If we add the numbers this is what the playing field would look like:

<p align="center">
  <img src="https://user-images.githubusercontent.com/29631366/185746027-476393ba-8137-4ed9-9b69-2f5727fe8a45.gif">
</p>

I then collected all the cell elements into a 2-dimensional array. This way I could easily interact with the "board" like so: 

```
board[0][0]  -> would return cell #1 
```

or

```
board[12][23] -> would return cell #312
```

### Representing Tetris pieces

Similarly to the playing area, I used 2-dimensional arrays to represent Tetris pieces. 1 - means the square is part of the piece, 0 - means it is empty, not part of the piece. Here is an example of an L piece and what it looks like represented as a 2-dimensional array

<p align="left">
  <img src="https://user-images.githubusercontent.com/29631366/185751840-2bbd3335-dd04-4df4-a7aa-bd9c1a3d64e0.png">
</p>

```
let tetrisPiece = [

    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]

]
```

Using this approach, I could now define any shapes I wanted, including words ["PLAY"](https://github.com/povorozniuk/Tetris/blob/main/tetris.js#L60-L86), ["SCORE"](https://github.com/povorozniuk/Tetris/blob/main/tetris.js#L116-L145), and ["GAME OVER"](https://github.com/povorozniuk/Tetris/blob/main/tetris.js#L89-L114)


![1](https://user-images.githubusercontent.com/29631366/185754918-b9985206-f425-44cd-a11b-851ecc75feb7.png)
![973](https://user-images.githubusercontent.com/29631366/185754919-8aa40ce4-6edc-4a64-bb08-f91c5b281f5c.png)
![score](https://user-images.githubusercontent.com/29631366/185754920-20199591-8d1a-4d3a-a3e4-3d6ed0760965.png)
![game-over](https://user-images.githubusercontent.com/29631366/185754921-88d8d2fc-4a98-4657-862d-d64fa1cc4332.png)

### Rotating Tetris pieces

instead of declaring each rotation of a Tetris piece, I created a [function](https://github.com/povorozniuk/Tetris/blob/main/tetris.js#L231-L270) to rotate a 2-dimensional array anti-clockwise. Here is an example of such a rotation

Original

```
[11, 12, 13, 14],
[21, 22, 23, 24],
[31, 32, 33, 34],
[41, 42, 43, 44]
```

Rotated

```
[14, 24, 34, 44],
[13, 23, 33, 43],
[12, 22, 32, 42],
[11, 21, 31, 41]
```


Another [important piece of code](https://github.com/povorozniuk/Tetris/blob/main/tetris.js#L770-L798) is placing a Tetris piece onto the board. It accepts a shape and returns coordinates on the board. The cells at such coordinates are then filled with some color. This is done by adding or removing certain pre-defined CSS classes


During development, I highlighted an "anchor cell" for troubleshooting purposes. The anchor cell is a leftmost top cell the shape rotates around. Here is what the anchor cell looks like when [anchor CSS class](https://github.com/povorozniuk/Tetris/blob/main/main.css#L67-L69) is active



https://user-images.githubusercontent.com/29631366/185753430-66bbd008-1cbb-43f5-99ad-ee01c74c7a85.mov



### Moving Tetris piece down

I am using javascript's `setTimeout` to schedule execution of a `moveDown` function every so often. The "so often" piece is calculated by the current game level. The bigger the game level gets - the smaller the timeframe

```
let timer = setInterval(moveDown, state.speed.startingSpeed) //speed is in milliseconds
```


This is what moving a Tetris piece looks like in slow motion with indexes added for better visibility

<p align="center">
  <img src="https://user-images.githubusercontent.com/29631366/185751605-9c48285c-809c-4a7a-b27d-af4b5160ea1f.gif">
</p>

