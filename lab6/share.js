var startKey = document.querySelector("#key");
var InputName = document.querySelector("#name");
var spanKeyC = document.querySelector("#show-Ckey");
var spanKeyD = document.querySelector("#show-Dkey");
var spanKeyCD = document.querySelector("#show-CDkey");
var spanKeyK = document.querySelector("#show-Kkey");
var spanName = document.querySelector("#show-binarName");
var spanIP = document.querySelector("#show-ip");
var spanL = document.querySelector("#show-L");
var spanR = document.querySelector("#show-R");
var spanER = document.querySelector("#show-ER");
var spanERK = document.querySelector("#show-ERK");
var btnShareKey = document.querySelector("#share-key");
var improtpMess = document.querySelector("#import");
var CTABLE_LIST = [57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36];
var DTABLE_LIST = [63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4];
var KTABKE_LIST = [14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32];
var WORDS_LIST  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var WORD_COD_LIST = ["0100 0001","0100 0010","0100 0011","0100 1000","0100 0101","0100 0110","0100 0111","0100 1000","0100 1001","0100 1010","0100 1011","0100 1100","0100 1101","0100 1110","0100 1111","0101 0000","0101 0001","0101 0010","0101 0011","0101 0100","0101 0101","0101 0110","0101 0111","0101 1000","0101 1001","0101 1010"];
var IP_LIST = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7];
var EP_LIST = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28 , 29, 28, 29, 30, 31, 32, 1];

var getShareCTable = function(key) {
  var cTable = "";
  var keyArray = key.value.replace(/\s+/g,'').split('');
  var spaceIndex = 0;
  for(var i = 0; i < CTABLE_LIST.length; i++) {
    if(spaceIndex == 4) {
      cTable += " ";
      spaceIndex = 1;
    } else {
      spaceIndex++;
    }
    cTable += keyArray[CTABLE_LIST[i]-1];
  }
  return cTable;
};

var getShareDTable = function(key) {
  var dTable = "";
  var keyArray = key.value.replace(/\s+/g,'').split('');
  var spaceIndex = 0;
  for(var i = 0; i < DTABLE_LIST.length; i++) {
    if(spaceIndex == 4) {
      dTable += " ";
      spaceIndex = 1;
    } else {
      spaceIndex++;
    }
    dTable += keyArray[DTABLE_LIST[i]-1];
  }
  return dTable;
};

var getShareCandDKey = function(ckey, dkey) {
  var keyC = ckey.replace(/\s+/g,'').split('');
  var keyD = dkey.replace(/\s+/g,'').split('');
  keyC.push(keyC[0]);
  keyC.splice(0,1);
  keyD.push(keyD[0]);
  keyD.splice(0,1);
  var totalArray = keyC.concat(keyD);
  var keyCandD = "";
  var spaceIndex = 0;
  for(var i = 0; i < totalArray.length; i++) {
    if(spaceIndex == 4) {
      keyCandD += " ";
      spaceIndex = 1;
    } else {
      spaceIndex++;
    }
    keyCandD += totalArray[i];
  }
  return keyCandD;
};

var getShareKkey = function(key) {
  var keyArray = key.replace(/\s+/g,'').split('');
  var result = "";
  var spaceIndex = 0;
  for(var i = 0; i < KTABKE_LIST.length; i++) {
    if(spaceIndex == 4) {
      result += " ";
      spaceIndex = 1;
    } else {
      spaceIndex++;
    }
    result += keyArray[KTABKE_LIST[i]-1];
  }
  return result;
};

var getNameToBinar = function(name) {
  var nameArray = name.value.toLowerCase().split('');
  var code = "";
  for(var i = 0; i < nameArray.length; i++) {
    for(var j = 0; j < WORDS_LIST.length; j++) {
      if(nameArray[i] === WORDS_LIST[j]) {
        if(i != 0) {
          code += " ";
        }
        code += WORD_COD_LIST[j];
      }
    }
  }
  return code;
};

var getShareIP = function(key) {
  var keyArray = key.replace(/\s+/g,'').split('');
  var code = "";
  var spaceIndex = 0;
  for(var i = 0; i < keyArray.length; i++) {
    if(spaceIndex == 4) {
      code += " ";
      spaceIndex = 1;
    } else {
      spaceIndex++;
    }
    code += keyArray[IP_LIST[i]-1];
  }
  return code;
};

var getLKey = function(key) {
  var lTable = "";
  var keyArray = key.replace(/\s+/g,'').split('');
  for(var i = 0; i < 32; i++) {
    lTable += keyArray[i];
  }
  return lTable;
};

var getRKey = function(key) {
  var rTable = "";
  var keyArray = key.replace(/\s+/g,'').split('');
  for(var i = 32; i < 64; i++) {
    rTable += keyArray[i];
  }
  return rTable;
};

var getERkey = function(key) {
  var keyArray = key.split('');
  var keyString = "";
  for(var i = 0; i < EP_LIST.length; i++) {
    keyString += keyArray[EP_LIST[i]-1];
  }
  return keyString;
};

var getERKkey = function(Kkey, ER) {
  var KArray = Kkey.replace(/\s+/g,'').split('');
  var ERArray = ER.replace(/\s+/g,'').split('');
  var totalString = "";
  for(var i = 0; i < ERArray.length; i++) {
    if(KArray[i] == 1 && ERArray[i] == 1) {
      totalString += "0";
    } else if (KArray[i] == 1 || ERArray[i] == 1) {
      totalString += "1";
    } else if ((KArray[i] == 0 && ERArray[i] == 0) && (KArray[i] == 0 || ERArray[i] == 0)) {
      totalString += "0"
    } 
  }
  return totalString;
};

var onClickButtonShareKey = function(evt) {
  evt.preventDefault();

  var cTable = getShareCTable(startKey);
  var dTable = getShareDTable(startKey);
  var cdTable = getShareCandDKey(cTable, dTable);
  var Kkey = getShareKkey(cdTable);
  var binarname = getNameToBinar(InputName)
  var nameIP = getShareIP(binarname);
  var Lkey = getLKey(nameIP);
  var Rkey = getRKey(nameIP);
  var ERkey = getERkey(Rkey);
  var ERKkey = getERKkey(ERkey,Kkey);

  spanKeyC.innerText = "C0: " + cTable;
  spanKeyD.innerText = "D0: " + dTable;
  spanKeyCD.innerText = "C1D1: " + cdTable;
  spanKeyK.innerText = "K1: " + Kkey;
  spanName.innerText = "BinarName: " + binarname;
  spanIP.innerText = "Name IP: " + nameIP;
  spanL.innerText = "L0: " + Lkey;
  spanR.innerText = "R0: " + Rkey;
  spanER.innerText = "E(R0): " + ERkey;
  spanERK.innerText = "E(R0)+K1: " + ERKkey;
  improtpMess.classList.remove("hidden");
};

btnShareKey.addEventListener("click", onClickButtonShareKey);