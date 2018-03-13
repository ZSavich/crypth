var inTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var outTable = ['k','w','r','h','p','t','b','n','u','_','d','o','z','e','j','f','c','y','v','g','a','i','x','m','q','l','s'];

var inText = document.querySelector("#message");
var btnSubmit = document.querySelector("#submit");
var outText = document.querySelector(".result");
var inKey = document.querySelector("#key");

var sort = function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};

var getTable = function(keyLength, messLength, message) {
  var table = [];
  table[keyLength-1] = "1";
  var index = 0;
  
  for(var m = 0; m < keyLength; m++) {
    table[m] = [];
  }

  for(var i = 0; i < messLength/keyLength; i++) {
    for(var j = 0; j < keyLength; j++) {
      if(index < messLength) {
        table[j].splice(i,0,message[index]);
        ++index;
      }
    }
  }

  return table;
};

var getSort = function(mass) {
  var sortKey = mass.slice();
  sortKey.sort(sort)

  var sortArrayKey = [];

  for(var i = 0; i < sortKey.length; i++) {
    for(var j = 0; j < mass.length; j++) {
      if(mass[j] === sortKey[i]) {
        sortArrayKey[i] = j;
        break;
      }
    }
  }

  return sortArrayKey;
};

var getCryptMass = function(mass,keyArray) {
  var result = "";

  for(var j = 0; j < keyArray.length; j++) {
    for(var k = 0; k < mass[keyArray[j]].length; k++) {
      result += mass[keyArray[j]][k];
    }
    if(j != keyArray.length-1) {
      result += "-";
    }
  }
  return result;
};

var getCrypt = function(message, key) {
  var mesArray = message.value.replace(/\s+/g,'').toLowerCase().split('');
  var keyArray = key.value.toLowerCase().split('');
  var table = getTable(keyArray.length, mesArray.length, mesArray);
  var newKey = [];

  for(var i = 0; i < keyArray.length; i++) {
    for(var j = 0; j < inTable.length; j++) {
      if(keyArray[i] === inTable[j]) {
        newKey[i] = j;
      }
    }
  }
  
  var sortKey = getSort(newKey);

  outText.innerText = getCryptMass(table, sortKey);

};

var onClickButton = function(evt) {
  evt.preventDefault();
  
  getCrypt(inText, inKey);
};

btnSubmit.addEventListener("click", onClickButton);