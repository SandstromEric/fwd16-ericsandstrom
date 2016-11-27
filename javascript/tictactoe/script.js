'use strict';

//Global Variables
var restart = false;
var board = [];
var playerOne = 1; //X
var playerTwo = 2; //O

//Start Messages
var getMessageBox = document.getElementById("message");

var warnGameStarted = {
  msg: "The Game has begun! Good Luck!",
  style: "green",
}

var warnBelowThree = {
  msg: "The Y or X is below 3",
  style: "red",
};

var warnOccupied = {
  msg: "That Cell is already occupied",
  style: "red",
};

var warnGameOver = {
  msg: "The Game is Over, Click Restart to play again!",
  style: "yellow",
};

var warnPlayer = {
  playerOne: {
    msg: "Player One's (X) Turn",
  },
  playerTwo: {
    msg: "Player Two's (O) Turn",
  },
  style: "green",
};
//End Messages

//WHEN id="startBtn" is clicked
function startGame() {
    initGame();
}

//USED BY startGame();
function initGame() {
  var xSize = document.getElementById("numX").value;
  var ySize = document.getElementById("numY").value;
  var startBtn = document.getElementById("startBtn");

  if (xSize < 3 || ySize < 3) {

      getMessageBox.innerHTML = warnBelowThree.msg;
      getMessageBox.style.background = warnBelowThree.style;

      if(restart == true){

        getMessageBox.innerHTML = warnBelowThree.msg;
        getMessageBox.style.background = warnBelowThree.style;

        //Removes board
        board = [];
        var getTable = document.getElementById("table");
        getTable.parentNode.removeChild(getTable);
        startBtn.innerHTML = "Start";
        restart = false;
      }

  } else {

    if(restart == true){

        //Removes board
        board = [];
        var getTable = document.getElementById("table");
        getTable.parentNode.removeChild(getTable);

        getMessageBox.innerHTML = warnGameStarted.msg;
        getMessageBox.style.background = warnGameStarted.style;

        //Inits the mechanics
        buildBoard();
        squareBoard();
        initPlayerTurns();

    } else {

      startBtn.innerHTML = "Restart";

      getMessageBox.innerHTML = warnGameStarted.msg;
      getMessageBox.style.background = warnGameStarted.style;

      //Inits the mechanics
      buildBoard();
      squareBoard();
      initPlayerTurns();

      if(restart == false){
          restart = true;
      }

    }

  }

}

//USED BY initGame();
function buildBoard() {

    var xSize = document.getElementById("numX").value;
    var ySize = document.getElementById("numY").value;

    var boardEl = document.getElementById('board');
    var table = document.createElement("TABLE");
    table.id = "table";
    var createTable = boardEl.appendChild(table);

    //Creates a 2d array representing the board
    for (var i = 0; i < xSize; i++) {

        board.push([]);
        var row = document.createElement("TR");

        for(var j = 0; j < ySize; j++){

            board[i].push(0);
            var cell = document.createElement("TD");
            cell.setAttribute("data-x", i);
            cell.setAttribute("data-y", j);
            row.appendChild(cell);

        }
        table.appendChild(row);
    }
    console.log(board);

    createTable;
}

//USED BY initGame();
function squareBoard() {

    var xSize = document.getElementById("numX").value;
    var ySize = document.getElementById("numY").value;

    //RESIZE HEIGHT TO OFF TD TO MAKE IT A SQUARE AT ALL TIMES
    var tdWidth = document.getElementsByTagName("td")[0].offsetWidth;
    for(var i = 0; i < xSize * ySize; i++){
        var setTdHeight = document.getElementsByTagName("td")[i];
        setTdHeight.style.height = tdWidth + "px";
    }

    window.onresize = function(event) {
        var tdWidth = document.getElementsByTagName("td")[0].offsetWidth;
        for(var i = 0; i < xSize * ySize; i++){
            var setTdHeight = document.getElementsByTagName("td")[i];
            setTdHeight.style.height = tdWidth + "px";
        }
    }
}

//USED BY initGame();
function initPlayerTurns() {
  var cell = document.getElementsByTagName("td");
  var xSize = document.getElementById("numX").value;
  var ySize = document.getElementById("numY").value;

  var turnPlayerOne = true;
  var turnPlayerTwo = false;

  for(var i = 0; i < xSize * ySize; i++) (function(i){

    var cellX = cell[i].getAttribute("data-x");
    var cellY = cell[i].getAttribute("data-y");

    //When a cell is clicked
    cell[i].onclick = function() {

      var x = "cross";
      var o = "circle";

      if(checkBoardFull() == true){

        getMessageBox.innerHTML = warnGameOver.msg;
        getMessageBox.style.background = warnGameOver.style;

      } else if(board[cellX][cellY] >= 1) {

        getMessageBox.innerHTML = warnOccupied.msg + " [Cell("+cellX+","+cellY+")]";
        getMessageBox.style.background = warnOccupied.style;

      } else {

        if(turnPlayerOne == true) {

          board[cellX][cellY] = playerOne;
          turnPlayerOne = false;
          turnPlayerTwo = true;
          this.className = x;

          /*
          STILL IN DEVELOPMENT

          var currentCell = board[cellIndex[0]][cellIndex[1]];
          var nextCell = board[cellIndex[0]][cellIndex[1] + 1];
          var prevCell = board[cellIndex[0]][cellIndex[1] - 2];
          console.log(currentCell, nextCell, prevCell);
          if(currentCell == 1 && nextCell == 1 && prevCell == 1){
            console.log("Player 1 Wins!");
          }*/

          if(checkBoardFull() == true) {
            getMessageBox.innerHTML = warnGameOver.msg;
            getMessageBox.style.background = warnGameOver.style;
          }else{
            getMessageBox.innerHTML = warnPlayer.playerTwo.msg;
            getMessageBox.style.background = warnPlayer.style;
          }

        } else if( turnPlayerTwo == true) {

          board[cellX][cellY] = playerTwo;
          turnPlayerOne = true;
          turnPlayerTwo = false;
          this.className = o;

          if(checkBoardFull() == true) {
            getMessageBox.innerHTML = warnGameOver.msg;
            getMessageBox.style.background = warnGameOver.style;
          }else{
            getMessageBox.innerHTML = warnPlayer.playerOne.msg;
            getMessageBox.style.background = warnPlayer.style;
          }
        }

      }

    }

  })(i);
}

//USED By initPlayerTurns();
function checkBoardFull() {
  var xSize = document.getElementById("numX").value;
  var ySize = document.getElementById("numY").value;
  var boardSpace = 1;
  for(var i = 0; i < xSize; i++){
    for(var j = 0; j < ySize; j++){
      boardSpace = boardSpace * board[i][j];
    }
  }

  if (boardSpace == 0){
    return false;
  }else{
    return true;
  }
}

//NOT DONE YET!
function checkWin() {
  var cell = document.getElementsByTagName("td");
  var xSize = document.getElementById("numX").value;
  var ySize = document.getElementById("numY").value;

  for(var i = 0; i < xSize * ySize; i++) (function(i){
    var cellIndex = cell[i].id.split("_");

    cell[i].onclick = function(){
      //vertical

    }

  })(i);
}
