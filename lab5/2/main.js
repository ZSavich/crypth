var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var initOutTable = ['k','w','r','h','p','t','b','n','u','_','d','o','z','e','j','f','c','y','v','g','a','i','x','m','q','l','s'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");
var glascoText = document.querySelector("#slogan");

var getNewOutTable = function(gasloArray, outTable) {
  var newOutTable = []
  var index = 0;
  for(var i = 0; i < outTable.length; i++) {
    var isHave = true;
    for(var j = 0; j < gasloArray.length; j++) {  
      if(outTable[i] != gasloArray[j]) {
        isHave = false;
      } else {
        isHave = true;
        break;
      }
    }
    if(isHave == false) {
      newOutTable[index] = outTable[i];
      index++;
    }
  }
  var result = gasloArray.concat(newOutTable);
  return result;
}

var onClickButton = function(evt) {
  evt.preventDefault();
  var glascoArray = glascoText.value.toLowerCase().split('');
  var lastOutTable = getNewOutTable(glascoArray, inTable);

  if(inText.value != "") {
    var textArray = inText.value.split('');
    var cryptMessage = "";
    for(var i = 0; i < textArray.length; i++) {
      for(var j = 0; j < inTable.length; j++) {
        if(textArray[i] === " ") {
          textArray[i] = "_";
        }
        if(textArray[i].toLowerCase() === inTable[j]) {
          cryptMessage += lastOutTable[j].toUpperCase();
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