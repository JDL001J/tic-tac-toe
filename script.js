
let restartBtn = document.querySelector("#reset-btn");
let gameSquares = Array.from(document.querySelectorAll(".square"));
let playerText = document.querySelector("#player-text");

let gameStatus = Array(9).fill(null);


const xMark = "X";
const oMark = "O";
let currentPlayer = xMark;
const startGame = () => {
    gameSquares.forEach((square, i)=> {
        square.addEventListener('click', squareClicked);
    
    })
} 


function squareClicked(e){
    id = e.target.id;

    if(gameStatus[id] == null){
        gameStatus[id] = currentPlayer;
        e.target.textContent = currentPlayer;
        playerText.textContent = `${currentPlayer}'s turn`

        if (hasPlayerWon() ){
            playerText.textContent = `Player ${currentPlayer} Won`
        }

        currentPlayer = currentPlayer == xMark ? oMark: xMark;
      
    }
}

restartBtn.addEventListener("click", restart);

function restart(){
    gameStatus.fill(null);

    gameSquares.forEach((square) => {
        square.textContent = ""
    }
    ) ;
    currentPlayer = xMark;
    playerText.textContent = "Tic-Tac-Toe"
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function hasPlayerWon(){
for (const condition of winningCombos) {
    let [a,b,c] = condition
   if(gameStatus[a] && gameStatus[a] == gameStatus[b] && gameStatus[a] == gameStatus[c])
   return [a,b,c]
}
return false
}

startGame()