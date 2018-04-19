var rowOpen = '<div class="row">';
var rowClose = '</div>';
var chessboardSize = 5;
var idNumber = 0;
var id = 1;

//this creates grid
for (j = 1; j <= chessboardSize; j++) {
  document.write(rowOpen);
  for (i = 1; i <= chessboardSize; i++) {
    idNumber++;
    document.write('<div class=\"square color' + getNumber() + '\" id=\"' + idNumber + '\"></div>');
  };
  document.write(rowClose);
};

//adds class drench to the first same colors

var square = document.getElementById(id);
var right = document.getElementById(id + 1);
var bottom = document.getElementById(id * chessboardSize + 1);
// console.log(bottom);
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
  //variables 'square' and 'right' must be declared outside
  square = (square.classList);
  right = (right.classList);
  while (JSON.stringify(square) === JSON.stringify(right)) {
    square = document.getElementById(id);
    square.className += " drench";
    id = id + 1;
    square = document.getElementById(id);
    right = document.getElementById(id + 1);
    square = (square.classList);
    right = (right.classList);
  }
  square = document.getElementById(id);

  right = document.getElementById(id);
  right.className += " drench";
}

/*var arr = ["#fcfaef", "#fffa05", "#f7c3cd", "#f4d442", "#e6b0f2", "#e5c76e"]
var arr = { "white" : "#fcfaef", "yellow" : "#fffa05", "pink": "#f7c3cd", "orange" : "#f4d442", "purple" : "#e6b0f2", "brown": "#e5c76e", }; 
*/

//changes the colors class on click according to the newColor
function makeDrench(newColor) {
  //catches square and right square
  var id = 1;
  var square = document.getElementById(id);
  square.classList.remove('drench');
  square = (square.classList);
  var right = document.getElementById(id + 1);
  right = (right.classList);

  //while square and right colors are equal, removes all classes, adds current class through parameter
  //moves to the right, does the same
  while (JSON.stringify(square) === JSON.stringify(right)) {
    square = document.getElementById(id);
    square.classList.removeMany('color1 color2 color3 color4 color5 color6');
    square.className += " drench ";
    square.className += newColor;

    id = id + 1;

    square = document.getElementById(id);
    right = document.getElementById(id + 1);

    square = (square.classList);
    right = (right.classList);
  }

  //marks the right square
  right = document.getElementById(id);
  right.classList.removeMany('color1 color2 color3 color4 color5 color6');
  right.className += " drench ";
  right.className += newColor;

  //catches and shows all in class drench
  //var drench = document.getElementsByClassName('drench')[0];
  // console.log(drench);
}


//CHANGES FIRST COLOR on click and adds class drench to the same colors
function changeColor(newColor) {
  //in the first square changes color (class)
  var id = 1;
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

    idRight = idRight + 1;
    right = document.getElementById(idRight);
  }
  right = document.getElementById(idRight);
  right.className += " drench";
  addMoreDrench();

  function addMoreDrench() {
    idRight ++;
    var rightRight = document.getElementById(idRight);
    right = (right.classList);
    rightRight = (rightRight.classList);

    if(right.contains('drench') == true) {
      right.remove('drench');
    }
    while (JSON.stringify(right) === JSON.stringify(rightRight)) {

      //prida drench right i rightRight
      right = document.getElementById(idRight);
      right.className += " drench";
      console.log(right);
      rightRight = document.getElementById(idRight + 1);
      rightRight.className += " drench";
      console.log(rightRight);

      //zvysi obema id o 1
      idRight = idRight + 1;
      right = document.getElementById(idRight);
      rightRight = document.getElementById(idRight);
      
      //prevede zpatky na classList
      right = (right.classList);
      rightRight = (rightRight.classList);

      if(right.contains('drench') == true) {
        right.remove('drench');
      }

    }
    right = document.getElementById(idRight);
    rightRight = document.getElementById(idRight + 1);
    // right.className += " drench";
      console.log(right);
      console.log(rightRight);
  }
 
  console.log('___________________________');




  //BUG - if there are more than one color, the next one doesnt have class drench
  //POSSIBLE SOLUTION - allways check whether the last right has the same color next to it
}
//BUG - square changes color even if it doesn't match

//TO ADD drenching also from top to BOTTOM, also to the LEFT and UP
//add counter
//add reset
//



/*if(square.classList.contains('drench') !=true) {
  square.className += " drench";*/