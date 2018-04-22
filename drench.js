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


drenchRight();
drenchDown();


//randomly chooses number
function getNumber() {
  var number = Math.floor((Math.random() * 2) + 1);
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



//PRIDA CLASS VSEM CTVERCUM STEJNE BARVY SMEREM VPRAVO
function drenchRight() {
  id = 1;
  idRight = id + 1;
  var square = document.getElementById(id);
  square = (square.classList);

  var right = document.getElementById(idRight);
  right = (right.classList);

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

//PRIDA CLAS VSEM CTVERCUM STEJNE BARVY SMEREM DOLU
function drenchDown() {
  id = 1;
  idBottom = id * chessboardSize + 1;
  var square = document.getElementById(id);
  square = (square.classList);

  var bottom = document.getElementById(idBottom);
  bottom = (bottom.classList);

  if (square.contains('drench') == true) {
    square.remove('drench');
  }

  while (JSON.stringify(square) === JSON.stringify(bottom)) {
    square = document.getElementById(id);
    square.className += " drench";

    id = idBottom;
    idBottom = idBottom + chessboardSize;
    square = document.getElementById(id);
    bottom = document.getElementById(idBottom);

    square = (square.classList);
    bottom = (bottom.classList);
  }
  square = document.getElementById(id);
  square.className += " drench";
}




//CHANGES FIRST COLOR on click and adds class drench to the same colors
function changeColor(newColor) {

  
  square.classList.removeMany('color1 color2 color3 color4 color5 color6');
  square.classList.add(newColor);

  //if there's class drench give it new color
  for (id = 1; id <= chessboardSize * chessboardSize; id++) {
    square = document.getElementById(id);
    //checks the class
    if (square.classList.contains('drench') == true) {
      square.classList.removeMany('color1 color2 color3 color4 color5 color6');
      square.classList.add(newColor);
    }
  }

    //adds class drench to the next group of color
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
}
//BUG - square changes color even if it doesn't match

//TO ADD drenching also from top to BOTTOM, also to the LEFT and UP
//add counter




/*if(square.classList.contains('drench') !=true) {
  square.className += " drench";*/