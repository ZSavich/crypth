var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var inText = document.querySelector("#message");
var inKey = document.querySelector("#key");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");
var outTextY = document.querySelector(".resultY");
var outTextK = document.querySelector(".resultK");

var getYKey = function(firstKey, length) {
  var newKey = firstKey.concat();
  for(var i = 3; i < length; i++) {
    var key = +newKey[i-3] + +newKey[i-1]
    while(key >= 26) {
      key -= 26 ;
    }
    newKey[i] = key;
  }
  return newKey;
}

var onClickButton = function(evt) {
  evt.preventDefault();
  var key = inKey.value.split(' ');
  var message = inText.value.split('');
  var keyK = [];
  var keyY = getYKey(key, message.length)
  var mylastkey;
  
  if(inText.value != "") {
    var codeMessage = [];
    for(var i = 0; i < message.length; i++) {
    	for(var j = 0; j < inTable.length; j++) {
    		if(message[i] === " ") {
    			codeMessage[i] = 25;
          mylastkey = 25 + +keyY[i];
          while(mylastkey >= 26) {
            mylastkey -= 26;
          }
          keyK[i] = mylastkey;
    			break;
    		}
    		 else if(message[i].toLowerCase() === inTable[j]) {
          codeMessage[i] = j;
          mylastkey = j + +keyY[i]
          while(mylastkey >= 26) {
            mylastkey -= 26;
          }
          keyK[i] = mylastkey;
    			break;
    		}
    	}
    }
  } else {
  	console.log("Enter your message!");
  }
  outTextY.innerText = keyY;
  outTextK.innerText = keyK;
  outText.innerText = codeMessage;
};

btnSubmit.addEventListener("click", onClickButton);