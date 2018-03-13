var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var outTable = ['k','w','r','h',',','p','t','b','n','u','_','d','o','z','e','j','f','.','c','y','v','g','a','i','x','m','-','q','l','s'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");
var key =   [["k","w","r","h",","],
             ["p","t","b","n","u"],
             ["_","d","o","z","e"],
             ["j","f",".","c","y"],
             ["v","g","a","i","x"],
             ["m","-","q","l","s"]];

var getCrypt = function(message) {
  var messageArray = message.value.toLowerCase().split('');
  var biogram = [];
  var msIndex = 0;
  for(var l = 0; l < messageArray.length/2;l++) {
    biogram[l] = [];
    for(var k = 0; k < 2; k++){
      if(messageArray[msIndex] == undefined) {
        biogram[l][k] = "x";
      }
      else {
        biogram[l][k] = messageArray[msIndex];
      }
      msIndex++;
    }
  }

  var f1,f2;
  var s1,s2;
  var resultArray = [];

  for(var a = 0; a < biogram.length; a++) {
    for(var i = 0; i < key.length; i++) {
      for(var j = 0; j < key[i].length; j++) {
        if(biogram[a][0] == key[i][j]) {
          f1 = i;
          f2 = j;
          console.log(biogram[a][0] + " = " + f1 + " " + f2);
          break;
        }
      }
    }
    for(var v = 0; v < key.length; v++) {
      for(var b = 0; b < key[v].length; b++) {
        if(biogram[a][1] == key[v][b]) {
          s1 = v;
          s2 = b;
          console.log(biogram[a][1] + " = " + s1 + " " + s2);
          break;
        }
      }
    }

    if(f1 == s1) {
      resultArray += key[f1][f2+1] + key[s1][s2+1];
    } else if (f2 == s2) {
      resultArray += key[f1+1][f2] + key[s1+1][s2];
    } else if (f1 != s1 && f2 != s2) {
      resultArray += key[f1][s2] + key[s1][f2];
    }
    resultArray += " ";
  }
  console.log(biogram);
  console.log(resultArray);
  return resultArray;
}

var onClickButton = function(evt) {
  evt.preventDefault();

  outText.innerText = getCrypt(inText);
};

btnSubmit.addEventListener("click", onClickButton);