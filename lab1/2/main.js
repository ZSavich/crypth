var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var onClickButton = function(evt) {
  evt.preventDefault();
  if(inText.value != "") {
    var textArray = inText.value.split('');
    var codeMessage = "";
    for(var i = 0; i < textArray.length; i++) {
      for(var j = 0; j < inTable.length; j++) {
        if(textArray[i] === " ") {
          codeMessage += (26).toString(2) + " ";
          break;
        }
         else if(textArray[i].toLowerCase() === inTable[j]) {
          codeMessage += (j).toString(2) + " ";
          break;
        }
      }
    }
  } else {
    console.log("Enter your message!");
  }
  outText.innerText = codeMessage;
};

btnSubmit.addEventListener("click", onClickButton);