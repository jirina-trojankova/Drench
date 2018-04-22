//this creates grid
var rowOpen = '<div class="row">';
var rowClose = '</div>';
var chessboardSize = 5;
var id = 0;

for (j = 1; j <= chessboardSize; j++) {
  document.write(rowOpen);
  for (i = 1; i <= chessboardSize; i++) {
    id++;
    document.write('<div class=\"square color' + getNumber() + '\" id=\"' + id + '\"></div>');
  };
  document.write(rowClose);
};

//adds class drench to the first same colors
addDrench();


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

//if colors are the same, this adds class drench
function addDrench() {
  id = 1;

  var square = document.getElementById(id);
  square = (square.classList);

  var right = document.getElementById(id + 1);
  right = (right.classList);

  var bottom = document.getElementById(id * chessboardSize + 1);

  while (JSON.stringify(square) === JSON.stringify(right)) {
    square = document.getElementById(id);
    square.className += " drench";
    id = id + 1;
    square = document.getElementById(id);
    right = document.getElementById(id + 1);

    square = (square.classList);
    right = (right.classList);
  }
  right = document.getElementById(id);
  right.className += " drench";
}

//CHANGES FIRST COLOR on click and adds class drench to the same colors
function changeColor(newColor) {
  //in the first square changes color (class)
  id = 1;
  var idRight = 2;
  var square = document.getElementById(id);
  square.classList.removeMany('color1 color2 color3 color4 color5 color6');
  square.classList.add(newColor);
  //check if ther's class drench at right
  var right = document.getElementById(idRight);

  //if there's class drench give it new color
  while (right.classList.contains('drench') == true) {

    right.classList.removeMany('color1 color2 color3 color4 color5 color6');
    right.classList.add(newColor);
    //move step right and do the same

    idRight++;
    right = document.getElementById(idRight);
  }

  idRight++;
  id = idRight - 1;

  square = document.getElementById(id);
  right = document.getElementById(idRight);

  square = (square.classList);
  right = (right.classList);

  //adds class drench to the next group of color
  while (JSON.stringify(square) === JSON.stringify(right)) {
    square = document.getElementById(id);
    square.className += " drench";

    id++;
    idRight++;

    square = document.getElementById(id);
    right = document.getElementById(idRight);

    square = (square.classList);
    right = (right.classList);
  }
  square = document.getElementById(id);
  square.className += " drench";
}



// //changes the colors class on click according to the newColor
// function makeDrench(newColor) {
//   //catches square and right square
//   var id = 1;
//   var square = document.getElementById(id);
//   square.classList.remove('drench');
//   square = (square.classList);
//   var right = document.getElementById(id + 1);
//   right = (right.classList);

//   //while square and right colors are equal, removes all classes, adds current class through parameter
//   //moves to the right, does the same
//   while (JSON.stringify(square) === JSON.stringify(right)) {
//     square = document.getElementById(id);
//     square.classList.removeMany('color1 color2 color3 color4 color5 color6');
//     square.className += " drench ";
//     square.className += newColor;

//     id = id + 1;

//     square = document.getElementById(id);
//     right = document.getElementById(id + 1);

//     square = (square.classList);
//     right = (right.classList);
//   }

//   //marks the right square
//   right = document.getElementById(id);
//   right.classList.removeMany('color1 color2 color3 color4 color5 color6');
//   right.className += " drench ";
//   right.className += newColor;

//   //catches and shows all in class drench
//   //var drench = document.getElementsByClassName('drench')[0];
//   // console.log(drench);
// }




//BUG - square changes color even if it doesn't match

//TO ADD drenching also from top to BOTTOM, also to the LEFT and UP
//add counter




/*if(square.classList.contains('drench') !=true) {
  square.className += " drench";*/