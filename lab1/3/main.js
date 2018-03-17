var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var outTable = [10, 22, 17, 07, 15, 19, 01, 13, 20, 26, 03, 14, 25, 04, 09, 05, 02, 24, 21, 06, 00, 08, 23, 12, 16, 11, 18];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var getPasteZero = function(message, length) {
  var upgCodeMessage = message.split(' ');
  for(var l = 0; l < upgCodeMessage.length; l++) {
    var myString = '' + upgCodeMessage[l];
    while(upgCodeMessage[l].length < length) {
      upgCodeMessage[l] = "0" + upgCodeMessage[l];
    }
  }
  return upgCodeMessage;
}

var onClickButton = function(evt) {
  evt.preventDefault();
  if(inText.value != "") {
    var textArray = inText.value.split('');
    var cryptMessage = "";
    for(var i = 0; i < textArray.length; i++) {
      for(var j = 0; j < inTable.length; j++) {
        if(textArray[i] === " ") {
          cryptMessage += outTable[26];
          if(i+2 < textArray.length) {
            cryptMessage +=  " ";
          }
          break;
        }
         else if(textArray[i].toLowerCase() === inTable[j]) {
          cryptMessage += outTable[j];
          if(i+2 < textArray.length) {
            cryptMessage +=  " ";
          }
          break;
        }
      }
    }
    var resultMessage = getPasteZero(cryptMessage, 2);
  } else {
    console.log("Enter your message!");
  }
  outText.innerText = resultMessage.join(' ');
};

btnSubmit.addEventListener("click", onClickButton);