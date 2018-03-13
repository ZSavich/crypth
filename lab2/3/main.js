var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var spanResultText = document.querySelector("#resultText");
var btnCrypt = document.querySelector("#encrypt");
var radioText = document.querySelector("#text");
var radioNumbers = document.querySelector("#numbers")

var WORDS_LIST = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

var compressCount = 1;

var getNumbersKey = function(key) {
  var messageString = key.replace(/\s+/g,'');
  var count = messageString.length / 4;
  var dividedArray = [];
  for(var i = 0; i < count; i++) {
    var string = "";
    for(var l = 0; l < 4; l++) {
        string += messageString[0];
        messageString = messageString.slice(1,messageString.length);
    }
    dividedArray[i] = string;
  }

  var preTotalArray = [];

  for(var d = 0; d < dividedArray.length / 2; d++) {
    string = "";
    for(var s = 0; s < 6; s++) {
      if((dividedArray[d][s] == "0" && dividedArray[dividedArray.length/2+d][s] == "0") || (dividedArray[d][s] == "1" && dividedArray[dividedArray.length/2+d][s] == "1")) {
        string += "0";
      } else if ((dividedArray[d][s] == "1" || dividedArray[dividedArray.length/2+d][s] == "1")) {
        string += "1";
      }
    }
    preTotalArray[d] = string;
  }

  var totalArray = [];

  for(var j = 0; j < preTotalArray.length / 2; j++) {
    string = "";
    for(var k = 0; k < 6; k++) {
      if((preTotalArray[j][k] == "0" && preTotalArray[preTotalArray.length/2+j][k] == "0") || (preTotalArray[j][k] == "1" && preTotalArray[preTotalArray.length/2+j][k] == "1")) {
        string += "0";
      } else if ((preTotalArray[j][k] == "1" || preTotalArray[preTotalArray.length/2+j][k] == "1")) {
        string += "1";
      }
    }
    totalArray[j] = string;
  }
  return totalArray;
};

var getTextKey = function(message) {
  var messageArray = message.value.replace(/\s+/g,'').split('');
  var totalArray = [];
  for(var i = 0; i < messageArray.length; i++) {
    for(var j = 0; j < WORDS_LIST.length; j++) {
      if(messageArray[i] === WORDS_LIST[j]) {
        var number = (j).toString(2);
        while(number.length < 6) {
          number = "0" + number;
        }
        totalArray[i] = number;
        break;
      }
    }
  }
  var count = 1;
  var startArray = totalArray[0];
  while(count < totalArray.length) {
    startArray = getCompress(startArray, totalArray[count]);
    count++;
  }
  spanResultText.innerText = "RADIX-64 key: " + totalArray.join(' ');
  spanResult.innerText = "Compressed key: " + startArray;
}

var getCompress = function(key1, key2) {
  var mykey1 = key1;
  var mykey2 = key2;
  for(var j = 0; j < compressCount; j++) {
    mykey2 = " " + mykey2;
  }
  compressCount++;
  var total = "";
  for(var i = 0; i < mykey2.length; i++) {
    if (mykey1[i] != "undefined" && mykey2[i] == " ") {
      total += mykey1[i];
    } else if (mykey1[i] == undefined && mykey2[i] != "undefinde") {
      total += mykey2[i];
    } else if(mykey1[i] != "undefined" && mykey2[i] != "undefined") {
      if((mykey1[i] == "0" && mykey2[i] == "0") || (mykey1[i] == "1" && mykey2[i] == "1")) {
        total += "0";
      } else if (mykey1[i] == "1" || mykey2[i] == "1") {
        total += "1";
      }
    }
  }
  return total;
};

var onButtonClick = function(evt) {
    evt.preventDefault();
    if(radioText.checked) {
      getTextKey(inputMessage);
    } else if (radioNumbers.checked) {
      spanResult.innerText = "Compressed key: " + getNumbersKey(inputMessage.value).join(' ');
    }
};

btnCrypt.addEventListener("click", onButtonClick);