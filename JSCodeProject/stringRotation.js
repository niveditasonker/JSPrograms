var stringRotation = function(string1, string2) {
	console.log("len:",string1.length, string2.length);
  if (string1.length !== string2.length) {
    return false;
  }
  console.log("s1, s2",string1, string2, string2+string2 );
  return (string2 + string2).includes(string1); // one call of isSubString
};


console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);