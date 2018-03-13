var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var inCrypt = document.querySelector("#crypt");
var btnDecrypt = document.querySelector("#decrypt");
var decResult = document.querySelector(".dec-result");

var SHIFRANT = [[12,35,51,58,67,74,89,90],
                [15,72],
                [05,36,64],
                [18,21,46,95],
                [08,16,25,38,41,49,55,68,71,82,86,97],
                [13,75],
                [07,59],
                [22,37,53,78,92],
                [10,28,33,61,79,84],
                [23],
                [65],
                [03,44,50,83],
                [09,52],
                [00,29,34,40,63,85,94],
                [02,19,30,45,62,77,88,91],
                [06,47],
                [11],
                [20,39,66,73,81,99],
                [14,31,42,54,87,93],
                [01,17,26,32,43,56,76,80,98],
                [04,27,69],
                [48],
                [24,70],
                [60],
                [96],
                [57]];

var getRandomNum = function(min, max) {
  var number;
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

var getCrypt = function(message) {
  var messArray = message.value.toLowerCase().split('');
  var result = [];
  var index = 0;
  for(var i = 0; i < messArray.length; i++) {
    for(var j = 0; j < inTable.length; j++) {
      if(messArray[i] === inTable[j]) {
        var randomNum = getRandomNum(0, SHIFRANT[j].length - 1);
        result[index] = SHIFRANT[j][randomNum];
        index++;
      }
    }
  }
  return result;
};

var getDecrypt = function(message) {
  var messArray = message.value.split(',');
  var result = "";
  for(var i = 0; i < messArray.length; i++) {
    for(var j = 0; j < SHIFRANT.length; j++) {
      for(var k = 0; k < SHIFRANT[j].length; k++) {
        if(messArray[i] == SHIFRANT[j][k]) {
          result += inTable[j];
          break;
        }
      }
    }
  }
  return result;
}

var onClickCrypt = function(evt) {
  evt.preventDefault();
  var cryptMessage = getCrypt(inText);
  outText.innerText = cryptMessage;
};

var onClickDecrypt = function(evt) {
  evt.preventDefault();
  var decryptMessage = getDecrypt(inCrypt);
  decResult.innerText = decryptMessage;
}

btnSubmit.addEventListener("click", onClickCrypt);
btnDecrypt.addEventListener("click", onClickDecrypt);