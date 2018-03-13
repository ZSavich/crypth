var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");
var inKey = document.querySelector("#key");

var getCrypt = function(message, key) {
  var keyArray = key.value.toLowerCase().split('');
  var messArray = message.value.toLowerCase().split('');
  var keyAllArray = [];
  var result = "";
  var keyIndex = 0;
  for(var b = 0; b < messArray.length; b++) {
    if(keyIndex >= keyArray.length) {
      keyIndex = 0;
    }
    keyAllArray[b] = keyArray[keyIndex];
    keyIndex++;
  }

  for(var i = 0; i < messArray.length; i++) {
    for(var j = 0; j < inTable.length; j++) {
      if(messArray[i] === inTable[j]) {
        var mesNum = j;
        break;
      }
    }
    

    for(var l = 0; l < inTable.length; l++) {
      if(keyAllArray[i] === inTable[l]) {
        var keyNum = l;
        break;
      }
    }
    
    var totalNum = mesNum + keyNum;

    if(totalNum >= 27) {
      totalNum -= 27;
    }

    result += inTable[totalNum];
  }
  
  return result;
};

var onClickButton = function(evt) {
  evt.preventDefault();
  outText.innerText = getCrypt(inText, inKey);
};

btnSubmit.addEventListener("click", onClickButton);