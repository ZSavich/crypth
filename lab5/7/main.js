var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var inCrypt = document.querySelector("#crypt");
var btnDecrypt = document.querySelector("#decrypt");
var decResult = document.querySelector(".dec-result");

var getRandomNum = function(min, max) {
  var number;
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

var generateKey = function(length) {
	var keyArray = [];
  for(var i = 0; i < length; i++) {
    keyArray[i] = getRandomNum(15,80);
  }
  return keyArray;
};

var getCrypt = function(message) {
  var mesArray = message.value.toLowerCase().split('');
  var mesLength = mesArray.length;
  var totalArray = "";
  window.keyArray = generateKey(mesLength);
  for(var i = 0; i < mesLength; i++) {
  	for(var j = 0; j < inTable.length; j++) {
  		if(mesArray[i] === inTable[j]) {
        var crypt = j + keyArray[i];

        while(crypt >= 27) {
        	crypt -= 27;
        }
        
        totalArray += inTable[crypt];
  		}
  	}
  }

  return totalArray;
};

var getDecrypt = function(message) {
  var mesArray = message.value.toLowerCase().split('');
  var mesLength = mesArray.length;
  var totalArray = "";

  for(var i = 0; i < mesLength; i++) {
  	for(var j = 0; j < inTable.length; j++) {
  		if(mesArray[i] === inTable[j]) {
        var crypt = j - keyArray[i];

        while(crypt < 0) {
        	crypt += 27;
        }
        
        totalArray += inTable[crypt];
  		}
  	}
  }

  return totalArray;
};

var onClickButtonCrypt = function(evt) {
  evt.preventDefault();
  
  outText.innerText = getCrypt(inText);
};

var onClickButtonDecrypt = function(evt) {
	evt.preventDefault();

	decResult.innerText = getDecrypt(inCrypt);
}

btnSubmit.addEventListener("click", onClickButtonCrypt);
btnDecrypt.addEventListener("click", onClickButtonDecrypt);