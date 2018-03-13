var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var btnCrypt = document.querySelector("#encrypt");

var WORDS_LIST = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

var getEightBitKey = function(message) {
  var messageString = message.value.replace(/\s+/g,'');
  while(messageString.length % 6 != 0) {
    messageString += "0";
  }
  var count = messageString.length;
  var messageResult = [];
  for(var i = 0; i < count / 6; i++) {
    var string = "";
    for(var l = 0; l < 6; l++) {
        string += messageString[0];
        messageString = messageString.slice(1,messageString.length);
    }
    messageResult[i] = string;
  }
  return messageResult;
};

var getRADIXKey = function(key) {
  var totalArray = [];
  for(var i = 0; i < key.length; i++) {
    var element = parseInt(key[i],2);
    totalArray[i] = WORDS_LIST[element];
  }
  return totalArray;
};

var onButtonClick = function(evt) {
    evt.preventDefault();

    var eightKey = getEightBitKey(inputMessage);
    var radixKey = getRADIXKey(eightKey);

    result.innerText = "RADIX-64 Key: " + radixKey.join(' ');
};

btnCrypt.addEventListener("click", onButtonClick);