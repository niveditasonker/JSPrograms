var num = 43;

function intToRoman(n){
  var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  
  if(n<=0||n>=4000){
    return n;
  }
  var romanStr = "";
  for(var i=0;i<roman.length;i++){
    while(n>=decimal[i]){
      n -= decimal[i];
      romanStr += roman[i];
    }
  }
  return romanStr;

}

console.log(intToRoman(num));