var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var spanMtk = document.querySelector("#mtk2");
var spanMtkFour = document.querySelector("#mtk2four");
var spanMtkSix = document.querySelector("#mtk2sixtenn");
var spanAscii = document.querySelector("#ascii");
var btnCrypt = document.querySelector("#encrypt");

var ENG_WORDS_LIST  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var RUS_WORDS_LIST = ['а','б','ц','д','е','ф','г','х','и','й','к','л','м','н','о','п','я','р','с','т','у','ж','в','ь','ы','з'];
var NUM_LIST = ['–','?',':','','3','э','ш','щ','8','ю','(',')','.',',','9','0','1','4','‘','5','7','=','2','/','6','+'];
var MTK2_LIST = ['11000','10011','01110','10010','10000','10110','01011','00101','01100','11010','11110','01001','00111','00110','00011','01101','11101','01010','10100','00001','11100','01111','11001','10111','10101','10001'];
var MTK2_LANG_LIST = ['00000','11111','11011','00100','01000','00010'];
var SIX_SYS = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var ANSII_LIST = ['30','31','32','33','34','35','36','37','38','39','41','42','43','44','45','46'];
var ENG_UPPER_LIST = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var ENG_LOWER_LIST = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var RUS_UPPER_LIST = ['А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
var RUS_LOWER_LIST = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
var SYMBOLS_LIST = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\','^','_','{','|','}','~','№'];
var NUMBERS_LIST = ['0','1','2','3','4','5','6','7','8','9'];
var ANSII_ENG_UPPER = ['41','42','43','44','45','46','47','48','49','4A','4B','4C','4D','4E','4F','50','51','52','53','54','55','56','57','58','59','5A'];
var ANSII_ENG_LOWER = ['61','62','63','64','65','66','67','68','69','6A','6B','6C','6D','6E','6F','70','71','72','73','74','75','76','77','78','79','7A'];
var ANSII_RUS_UPPER = ['80','81','82','83','84','85','86','87','88','89','8A','8B','8C','8D','8E','8F','90','91','92','93','94','95','96','97','98','99','9A','9B','9C','9D','9E','9F','F0'];
var ANSII_RUS_LOWER = ['A0','A1','A2','A3','A4','A5','A6','A7','A8','A9','AA','AB','AC','AD','AE','AF','E0','E1','E2','E3','E4','E5','E6','E7','E8','E9','EA','EB','EC','ED','EE','EF','F1'];
var ANSII_SYMBOLS = ['20','21','22','23','24','25','26','27','28','29','2A','2B','2C','2D','2E','2F','3A','3B','3C','3D','3E','3F','40','5B','5C','5D','5E','5F','7B','7C','7D','7E','FC'];
var ANSII_NUMBERS = ['30','31','32','33','34','35','36','37','38','39'];

var getPasteZero = function(message, length) {
  var upgCodeMessage = message.split(" ");
  for(var l = 0; l < upgCodeMessage.length; l++) {
    var myString = '' + upgCodeMessage[l];
    while(upgCodeMessage[l].length < length) {
      upgCodeMessage[l] = "0" + upgCodeMessage[l];
    }
  }
  return upgCodeMessage;
}

var getMTKKey = function(text) {
    var lang = "";
    var messageArray = text.value.toLowerCase().split('');
    var mtkArray = [];
    var dopArray = 0;
    var mtkString = "";
    var mtkFourBitArray = [];
    for(var i = 0; i < messageArray.length; i++) {
      for(var j = 0; j < RUS_WORDS_LIST.length; j++) {
          if(messageArray[i] === " ") {
              mtkArray[dopArray] = MTK2_LANG_LIST[3];
              break;
          }
          if(messageArray[i] === ENG_WORDS_LIST[j]) {
              if(lang != "ENG") {
                  mtkArray[dopArray] = MTK2_LANG_LIST[1];
                  dopArray++;
              }
              mtkArray[dopArray] = MTK2_LIST[j];
              lang = "ENG";
              break;
          }
          if(messageArray[i] === RUS_WORDS_LIST[j]) {
              if(lang != "RUS") {
                  mtkArray[dopArray] = MTK2_LANG_LIST[0];
                  dopArray++;
              }
              mtkArray[dopArray] = MTK2_LIST[j];;
              lang = "RUS";
              break;
          }
          if(messageArray[i] === NUM_LIST[j]) {
              if(j == 5 || j == 6 || j == 7 || j == 9) {
                  if(lang != "RUS") {
                      mtkArray[dopArray] = MTK2_LANG_LIST[0];
                      dopArray++;
                      lang = "RUS";
                  }
              } else {
                  if(lang != "NUM") {
                      mtkArray[dopArray] = MTK2_LANG_LIST[2];
                      dopArray++;
                      lang = "NUM";
                  }
              }   
              mtkArray[dopArray] = MTK2_LIST[j];
              break;
          }
      }
      dopArray++;
    }
    
  mtkString = mtkArray.join('');
    spanMtk.innerText = "MTK2 key: " + mtkArray.join(' ');
    while(mtkString.length % 4 != 0) {
      mtkString += "0";
    }
    var length = mtkString.length;
    for(var k = 0; k < length / 4; k++) {
        var string = "";
        for(var l = 0; l < 4; l++) {
            string += mtkString[0];
            mtkString = mtkString.slice(1,mtkString.length);
        }
        mtkFourBitArray[k] = string;
    }

    var resultMessage = getPasteZero(mtkFourBitArray.join(" "), 5);

    return resultMessage;
};

var getSixteenSys = function(masive) {
    var totalArray = [];
    var number;
    for(var i = 0; i < masive.length; i++) {
        number = parseInt(masive[i],2);
        totalArray[i] = SIX_SYS[number];
    }
    return totalArray;
};

var getANSIIKey = function(anskey) {
	var totalArray = [];
  for(var i = 0; i < anskey.length; i++) {
  	var number = parseInt(anskey[i], 16);
    totalArray[i] = ANSII_LIST[number];
  }
  return totalArray;
};

var getANSIIText = function(message) {
	var messageArray = message.value.split('');
  var totalArray = [];
	for(var i = 0; i < messageArray.length; i++) {
		for(var j = 0; j < RUS_UPPER_LIST.length; j++) {
			if(messageArray[i] === ENG_UPPER_LIST[j]) {
        totalArray[i] = ANSII_ENG_UPPER[j];
        break;
			} else if (messageArray[i] === ENG_LOWER_LIST[j]) {
        totalArray[i] = ANSII_ENG_LOWER[j];
        break;
      } else if (messageArray[i] === SYMBOLS_LIST[j]) {
        totalArray[i] = ANSII_SYMBOLS[j];
        break;
			} else if (messageArray[i] === RUS_LOWER_LIST[j]) {
        totalArray[i] = ANSII_RUS_LOWER[j];
        break;
			} else if (messageArray[i] === RUS_LOWER_LIST[j]) {
        totalArray[i] = ANSII_RUS_LOWER[j];
        break;
			} else if (messageArray[i] === NUMBERS_LIST[j]) {
        totalArray[i] = ANSII_NUMBERS[j];
        break;
			} 
		}
	}
	return totalArray;
}

var onButtonClick = function(evt) {
    evt.preventDefault();
    
    var mtkKey = getMTKKey(inputMessage);
    var sixKey = getSixteenSys(mtkKey);
    var ansiiKey = getANSIIKey(sixKey);
    var ansiiMess = getANSIIText(inputMessage);

    spanMtkFour.innerText = "MTK2 4bit key: " + mtkKey.join(' ');
    spanMtkSix.innerText = "16bit: " + sixKey.join(' ');
    spanAscii.innerText = "ANSII: " + ansiiKey.join(' ');
    result.innerText = "Message in ANSII: " + ansiiMess.join(' ');
};

btnCrypt.addEventListener("click", onButtonClick);