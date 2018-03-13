var KEYS_LIST = ["0011 0001", "0011 0010", "0011 0100", "0011 0111", "0011 1000", "0011 1011", "0011 0111", "0011 1110"];

var startKey = document.querySelector("#key");
var spanKey = document.querySelector("#show-key");
var btnCreateKey = document.querySelector("#create-key");

var getKey = function(key) {
  var yourKey = key.value.split('');
  var totalKey = "";
  for(var i = 0; i < yourKey.length; i++) {
    if(i != 0) {
      totalKey += " ";
    }
    totalKey += KEYS_LIST[yourKey[i]];
  }
  return totalKey;
};

var onClickButtonCreateKey = function(evt) {
  evt.preventDefault();
  spanKey.innerText = "You have: " + getKey(startKey);
};

btnCreateKey.addEventListener("click", onClickButtonCreateKey);