var rowOpen = '<div class="row">';
var rowClose = '</div>';
var chessboardSize = 10;
var id = 0;

//this creates grid
for (j = 1; j <= chessboardSize; j++) {
  document.write(rowOpen);
  for (i = 1; i <= chessboardSize; i++) {
    id++;
    document.write('<div class=\"square color' + getNumber() + '\" id=\"' + id + '\"></div>');
  }
  document.write(rowClose);
}

id = 1;
var idRight = id + 1;
var idBottom = id + chessboardSize;
var idLeft = id - 1;
var idUp = id - chessboardSize;
var square = document.getElementById(id);
var right = document.getElementById(idRight);
var bottom = document.getElementById(idBottom);
var left = document.getElementById(idLeft);
var up = document.getElementById(idUp);

checkDrench();

//randomly chooses number
function getNumber() {
  var number = Math.floor((Math.random() * 6) + 1);
  return number;
}


//removes many classes
DOMTokenList.prototype.removeMany = function (classes) {
  var array = classes.split(' ');
  for (var i = 0, length = array.length; i < length; i++) {
    this.remove(array[i]);
  }
}

//checks every square and drenches right and down
function checkDrench() {
  var square_1 = document.getElementById(1);
  square_1.classList.add("drench");

  for (id = 1; id <= chessboardSize * chessboardSize; id++) {
    idRight = id + 1;
    idBottom = id + chessboardSize;
    idLeft = id - 1;
    idUp = id - chessboardSize;

    square = document.getElementById(id);
    right = document.getElementById(idRight);
    bottom = document.getElementById(idBottom);
    left = document.getElementById(idLeft);
    up = document.getElementById(idUp);

    square = (square.classList);

    //DRENCHES RIGHT
    if (square.contains('drench') == true) {
      square.remove('drench');
      if (idRight < (chessboardSize * chessboardSize + 1)) {
        right = (right.classList);
        if (JSON.stringify(square) === JSON.stringify(right)) {
          right = document.getElementById(idRight);
          right.className += " drench";
          right = (right.classList);
        }
      }
      //DRENCHES DOWN
      if (idBottom < (chessboardSize * chessboardSize + 1)) {
        bottom = (bottom.classList);
        if (JSON.stringify(square) === JSON.stringify(bottom)) {
          bottom = document.getElementById(idBottom);
          bottom.className += " drench";
          bottom = (bottom.classList);
        }
      }
      //DRENCHES LEFT
      if (idLeft > 0) {
        left = (left.classList);
        if (JSON.stringify(square) === JSON.stringify(left)) {
          left = document.getElementById(idLeft);
          left.className += " drench";
          left = (left.classList);
        }
      }
      //DRENCHES UP
      if (idUp > 0) {
        up = (up.classList);

        if (JSON.stringify(square) === JSON.stringify(up)) {
          up = document.getElementById(idUp);
          up.className += " drench";
          up = (up.classList);
        }
      }
      square = document.getElementById(id);
      square.className += " drench";
    }
  }
}


//CHANGES FIRST COLOR on click and adds class drench
function changeColor(newColor) {
  id = 1;

  for (id = 1; id <= chessboardSize * chessboardSize; id++) {
    square = document.getElementById(id);

  //if there's class drench, gives it new color
  if (square.classList.contains('drench') === true) {
      square = document.getElementById(id);
      square.classList.removeMany('color1 color2 color3 color4 color5 color6');
      square.classList.add(newColor);
    }
  }
  checkDrench();
}

var clicks = 30;
function counter() {
  clicks--;
  document.getElementById('counter').innerHTML = '<br><br><p>You have ' + clicks + ' moves to dreanch the board</p>';
  
}



