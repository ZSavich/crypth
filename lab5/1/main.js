var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var outTable = ['k','w','r','h','p','t','b','n','u','_','d','o','z','e','j','f','c','y','v','g','a','i','x','m','q','l','s'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");

var onClickButton = function(evt) {
  evt.preventDefault();
  if(inText.value != "") {
    var textArray = inText.value.split('');
    var cryptMessage = "";
    for(var i = 0; i < textArray.length; i++) {
    	for(var j = 0; j < inTable.length; j++) {
    		if(textArray[i] === " ") {
    			cryptMessage += outTable[26].toUpperCase();
    			break;
    		}
    		 else if(textArray[i].toLowerCase() === inTable[j]) {
    			cryptMessage += outTable[j].toUpperCase();
    			break;
    		}
    	}
    }
  } else {
  	console.log("Enter your message!");
  }
  outText.innerText = cryptMessage;
};

btnSubmit.addEventListener("click", onClickButton);