var nearestPalindromic = function(n) {
    if(n==null || n.length==0) return "";
    var val= parseInt(n);
    /*val1:100->101;  val2: 100/10->10-1->9*10->90+9->99->99; val3: 100/10=10+1=11*10->110->111;
    val1=5964->5995; va2: 5964/100->59+1->60*100->6000->6006;  val3: 5964/1000->59-1->58*100->5800+90->5890->5885
    */
    var delta=Math.pow(10, parseInt(n.length/2)); 
    var val1=parseInt(getPal(n));
    var val2=parseInt(getPal(((val/delta+1)*delta)+"")); 
    var val3=parseInt(getPal(((val/delta-1)*delta+(9*delta/10))+""));
    var diff1=Math.abs(val1-val), diff2=val2-val, diff3=val-val3;
    if(val1==val||diff1>diff2||diff1>diff3){
        if(diff2>=diff3) return val3+"";
        return val2+"";
    }else{
        if(diff3<=diff1 && diff3<=diff2) return val3+"";
        else if(diff1<=diff2 && diff1<=diff3) return val1+"";
        return val3+"";
    }
};

function getPal(str){
    var firstPart=str.substring(0, (str.length+1)/2);
    var secondPart=str.length%2==1? getSecondPart(firstPart.substring(0, firstPart.length-1)):getSecondPart(firstPart);
    return firstPart+secondPart;
}

function getSecondPart(str){
    var sb= str;
    var tmp = reverseString(sb).toString();
    return tmp;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(nearestPalindromic("123"));
console.log(nearestPalindromic("287"));