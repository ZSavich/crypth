var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var inCrypt = document.querySelector("#crypt");
var btnDecrypt = document.querySelector("#decrypt");
var decResult = document.querySelector(".dec-result");

var getCrypt = function(message, key) {
  var mesArray = message.value.toLowerCase().split('');
  var totalArray = "";

  for(var i = 0; i < mesArray.length; i++) {
    for(var j = 0; j < inTable.length; j++) {
      if(mesArray[i] === inTable[j]) {
        var crypt = key * j;
        while(crypt > 27) {
          crypt -= 27;
        }
        totalArray += inTable[crypt];
      }
    }
  }

  return totalArray;
}

var getDecrypt =  function(message, key) {
  var mesArray = message.value.toLowerCase().split('');
  var totalArray = "";

  for(var i = 0; i < mesArray.length; i++){
    for(var j = 0; j < inTable.length; j++) {
      if(mesArray[i] === inTable[j]) {
        var crypt = key * j;
        while(crypt > 27) {
          crypt -= 27;
        }
        totalArray += inTable[crypt];
      }
    }
  }

  return totalArray;
}

var onClickButtonCrypt = function(evt) {
  evt.preventDefault();
  
  outText.innerText = getCrypt(inText, 11);
};

var onClickButtonDecrypt = function(evt) {
  evt.preventDefault();

  decResult.innerText = getDecrypt(inCrypt, 5);
}

btnSubmit.addEventListener("click", onClickButtonCrypt);
btnDecrypt.addEventListener("click", onClickButtonDecrypt);