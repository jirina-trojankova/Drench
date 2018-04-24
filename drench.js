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
  };
  document.write(rowClose);
};

id = 1;
var idRight = id + 1;
var idBottom = id * chessboardSize + 1;
var square = document.getElementById(id);
var right = document.getElementById(idRight);
var bottom = document.getElementById(idBottom);

checkDrench();

//randomly chooses number
function getNumber() {
  var number = Math.floor((Math.random() * 6) + 1);
  return number;
}

//adds many classes
DOMTokenList.prototype.addMany = function (classes) {
  var array = classes.split(' ');
  for (var i = 0, length = array.length; i < length; i++) {
    this.add(array[i]);
  }
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

    square = document.getElementById(id);
    right = document.getElementById(idRight);
    bottom = document.getElementById(idBottom);

    square = (square.classList);

    //DRENCH RIGHT
    if (square.contains('drench') == true) {
      square.remove('drench');
      if (idRight < 101) {
        right = (right.classList);
        if (JSON.stringify(square) === JSON.stringify(right)) {
          right = document.getElementById(idRight);
          right.className += " drench";
          right = (right.classList);
        }
      }
      //DRENCH DOWN
      if (idBottom < 101) {
        bottom = (bottom.classList);
        if (JSON.stringify(square) === JSON.stringify(bottom)) {
          bottom = document.getElementById(idBottom);
          bottom.className += " drench";
          bottom = (bottom.classList);
        }
      }
      square = document.getElementById(id);
      square.className += " drench";
    }
  }
}


//CHANGES FIRST COLOR on click 
function changeColor(newColor) {
  id = 1;
  //if there's class drench give it new color
  for (id = 1; id <= chessboardSize * chessboardSize; id++) {
    square = document.getElementById(id);

    //checks the class
    if (square.classList.contains('drench') === true) {
      square = document.getElementById(id);
      square.classList.removeMany('color1 color2 color3 color4 color5 color6');
      square.classList.add(newColor);
    }
  }
  checkDrench();
}

  //CHANGES FIRST COLOR on click and adds class drench to the same colors
  // function changeColor(newColor) {
  //   //in the first square changes color (class)
  //   id = 1;
  //   idRight = 2;
  //   var square = document.getElementById(id);
  //   square.classList.removeMany('color1 color2 color3 color4 color5 color6');
  //   square.classList.add(newColor);
  //   //check if ther's class drench at right
  //   var right = document.getElementById(idRight);

  //   //if there's class drench give it new color
  //   while (right.classList.contains('drench') == true) {

  //     right.classList.removeMany('color1 color2 color3 color4 color5 color6');
  //     right.classList.add(newColor);
  //     //move step right and do the same

  //     idRight++;
  //     right = document.getElementById(idRight);
  //   }

  //   //adds class drench to the next group of color
  //   idRight++;
  //   id = idRight - 1;

  //   square = document.getElementById(id);
  //   right = document.getElementById(idRight);

  //   square = (square.classList);
  //   right = (right.classList);

  //   while (JSON.stringify(square) === JSON.stringify(right)) {
  //     square = document.getElementById(id);
  //     square.className += " drench";

  //     id++;
  //     idRight++;

  //     square = document.getElementById(id);
  //     right = document.getElementById(idRight);

  //     square = (square.classList);
  //     right = (right.classList);
  //   }
  //   square = document.getElementById(id);
  //   square.className += " drench";
  // }

// function checkDrench() {
//   var square_1 = document.getElementById(1);
//   square_1.classList.add("drench");

//   for (id = 1; id <= chessboardSize * chessboardSize; id++) {
//     idRight = id + 1;
//     idBottom = id + chessboardSize;

//     square = document.getElementById(id);
//     right = document.getElementById(idRight);
//     bottom = document.getElementById(idBottom);

//     square = (square.classList);
//     right = (right.classList);
//     bottom = (bottom.classList);

//       //DRENCH RIGHT
//       if (square.contains('drench') == true) {
//         square.remove('drench');

//       if (JSON.stringify(square) === JSON.stringify(right)) {
//         square = document.getElementById(id);

//         right = document.getElementById(idRight);
//         right.className += " drench";

//         square = (square.classList);
//         right = (right.classList);
//       }

//       //DRENCH DOWN
//       if (JSON.stringify(square) === JSON.stringify(bottom)) {

//         square = document.getElementById(id);

//         bottom = document.getElementById(idBottom);
//         bottom.className += " drench";

//         square = (square.classList);
//         bottom = (bottom.classList);
//       }

//       square = document.getElementById(id);
//       square.className += " drench";    
//     }
//   }
// }
  //adds class drench to the next group of color DALSI NA RADE
  // id = 1;
  // idRight = id + 1;
  // square = document.getElementById(id);
  // right = document.getElementById(idRight);
  // square = (square.classList);
  // right = (right.classList);
  // while (JSON.stringify(square) !== JSON.stringify(right)) {

  //   GO RIGHT AND ADD CLASS DRENCH, CHECK WHETHER THEY ARE SAME, AND AGAIN

  //   idRight++;
  //   id = idRight - 1;

  //   square = document.getElementById(id);
  //   right = document.getElementById(idRight);

  //   square = (square.classList);
  //   right = (right.classList);

  //   while (JSON.stringify(square) === JSON.stringify(right)) {
  //     square = document.getElementById(id);
  //     square.className += " drench";

  //     id++;
  //     idRight++;

  //     square = document.getElementById(id);
  //     right = document.getElementById(idRight);

  //     square = (square.classList);
  //     right = (right.classList);
  //   }
  //   square = document.getElementById(id);
  //   square.className += " drench";
  // }

//BUG - square changes color even if it doesn't match

//TO ADD drenching also from top to BOTTOM, also to the LEFT and UP
//add counter




/*if(square.classList.contains('drench') !=true) {
  square.className += " drench";*/

//drenches down
// function drenchDown() {
//   square = document.getElementById(id);
//   bottom = document.getElementById(idBottom);
//   square = (square.classList);
//   bottom = (bottom.classList);

//   if (square.contains('drench') == true) {
//     square.remove('drench');
//   }

//   while (JSON.stringify(square) === JSON.stringify(bottom)) {
//     square = document.getElementById(id);
//     square.className += " drench";

//     id = idBottom;
//     idBottom = idBottom + chessboardSize;
//     square = document.getElementById(id);
//     bottom = document.getElementById(idBottom);

//     square = (square.classList);
//     bottom = (bottom.classList);
//   }
//   square = document.getElementById(id);
//   square.className += " drench";
// }

//drenches right
// function drenchRight() {
//   square = document.getElementById(id);
//   right = document.getElementById(idRight);
//   square = (square.classList);
//   right = (right.classList);

//   if (square.contains('drench') == true) {
//     square.remove('drench');
//   }

//   while (JSON.stringify(square) === JSON.stringify(right)) {
//     square = document.getElementById(id);
//     square.className += " drench";
//     id++;
//     idRight++;
//     square = document.getElementById(id);
//     right = document.getElementById(idRight);

//     square = (square.classList);
//     right = (right.classList);
//   }
//   square = document.getElementById(id);
//   square.className += " drench";
// }