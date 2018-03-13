var inputKey = document.querySelector("#key");
var inputLKey = document.querySelector("#key-l");
var inputRKey = document.querySelector("#key-r");
var spanPKey = document.querySelector("#show-Pkey");
var spanR1Key = document.querySelector("#show-R1");
var spanDESKey = document.querySelector("#show-des");
var btnResult = document.querySelector("#show-result");
var P_TABLE = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25];

var getPKey = function(key) {
  var keyArray = key.value.replace(/\s+/g,'').split('');
  var totalString = "";
  var index = 0;
  for(var i = 0; i < keyArray.length; i++) {
    if(index == 4) {
      totalString += " ";
      index = 1;
    } else {
      index++;
    }
    totalString += keyArray[P_TABLE[i] - 1];
  }
  return totalString;
};

var getR1Key = function(lkey, pkey) {
  var Pkey = pkey.replace(/\s+/g,'').split('');
  var Lkey = lkey.value.replace(/\s+/g,'').split('');
  var totalString = "";
  for(var i = 0; i < Lkey.length; i++) {
    if(Pkey[i] == 1 && Lkey[i] == 1) {
      totalString += "0";
    } else if (Pkey[i] == 1 || Lkey[i] == 1) {
      totalString += "1";
    } else if ((Pkey[i] == 0 && Lkey[i] == 0) && (Pkey[i] == 0 || Lkey[i] == 0)) {
      totalString += "0"
    } 
  }
  return totalString;
};

var getDESKey = function(r0, r1) {
  var r0Array = r0.value.replace(/\s+/g,'').split('');
  var r1Array = r1.replace(/\s+/g,'').split('');
  var total = r0Array.concat(r1Array);
  var totalString = "";
  var index = 0;
  for(var i = 0; i < total.length; i++) {
    if(index == 4){
      totalString += " ";
      index = 1;
    } else {
      index++;
    }
    totalString += total[i];
  }
  return totalString;
};

var onClickButtonKey = function(evt) {
  evt.preventDefault();
  var Pkey = getPKey(inputKey);
  var R1key = getR1Key(inputLKey,Pkey);
  var des = getDESKey(inputRKey,R1key);

  spanPKey.innerText = "f(R0,K1): " + Pkey;
  spanR1Key.innerText = "R1: " + R1key;
  spanDESKey.innerText = "DES: " + des;
};

btnResult.addEventListener("click", onClickButtonKey);