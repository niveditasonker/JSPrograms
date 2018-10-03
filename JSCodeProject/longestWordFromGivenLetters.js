/*
function longestWord (wordsList, letters) {
//  var wordsList = wordsList.split('\n');
	console.log(letters);
  var letters = [].slice.call(arguments, 1);
  console.log(letters);
  var lettersHash = {};
  letters.forEach(function(val, i) {
    lettersHash[val] = (lettersHash[val] === undefined) ? 1 : lettersHash[val] + 1;
  });
  var solution = [];

  console.log(lettersHash);
  for (var i=0;i<wordsList.length;i++) {
    var word = wordsList[i];
    console.log("Word: "+word);
    if ( (solution.length === 0 && checkWord(word, lettersHash)) || (solution.length && word.length === solution[0].length && checkWord(word, lettersHash)) ){
      solution.push(solution.push(word));
    } else if (solution.length && word.length > solution[0].length && checkWord(word, lettersHash)){
      solution = [word];
    }
  }

  console.log(solution);
}

function checkWord(testWord, lettersHash) {
  var testWordHash = {};
  for (var i=0;i<testWord.length;i++){
    var letter = testWord[i];
    testWordHash[letter] = (testWordHash[letter] === undefined) ? 1 : testWordHash[letter] + 1;
    console.log("testWordHash: "+letter,testWordHash[letter]);
    if (lettersHash[letter] === undefined || testWordHash[letter] > lettersHash[letter]) return false;
  }
  return true;
}
*/
var dict = ["toes","to","toe"];
var str = "oet";

function getHash(ltrs){
	var d = {};
	
	for(var j=0;j<ltrs.length;j++){
		if(ltrs[j] in d){
			d[ltrs[j]]++;
		}else{
			d[ltrs[j]] = 1;
		}
	}
	return d;
}

function check_word(word, letters){
//	console.log("In check: ", word, letters);
	var h = getHash(letters);
	console.log(h);
	for(var i=0;i<word.length;i++){
		if(word[i] in h){
//			console.log("word[i]",word[i],h[word[i]]);
			h[word[i]]--;
			if(h[word[i]] == 0){
				delete h[word[i]];
			}
		}else{
			return false;
		}
	}
	
	return true;
	
}

function longestWord(dict, gStr){
	var res = [];
	var longest = 0;
	for(var i=0;i<dict.length;i++){
//		console.log(dict[i].length, dict[i], longest);
	
		if(dict[i].length < longest) {
//			console.log("here: ",dict[i].length, dict[i], longest);
		
			continue;
		}
//		console.log(check_word(dict[i], gStr));
		if (check_word(dict[i], gStr)){
//			console.log("Longest:.........."+longest);
//			console.log("checking length: ",dict[i].length, longest, (dict[i].length > longest));
			
			
			if(dict[i].length > longest){
//				console.log("longest:",longest,dict[i]);
				longest = dict[i].length;
				res = [];
				res.push(dict[i]);
			}
		}
	}
	
	return res;
}

console.log(longestWord(dict,str));