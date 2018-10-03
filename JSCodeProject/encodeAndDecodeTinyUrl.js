var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hash = {};

function codeGen() {
    var ans = "";
    while (ans.length !== 6) {
        ans += s[Math.floor(Math.random() *62)];
    }
    return ans;
}

var encode = function(longUrl) {
    var id = codeGen();
    while (hash[id] !== undefined) {
        id = codeGen();
    }
    hash[id] = longUrl;

    console.log(id);
    console.log(hash);
    return "http://tinyurl.com/" + id;
};

var decode = function(shortUrl) {
    var id = shortUrl.replace("http://tinyurl.com/","");
    console.log(id);
    return hash[id];
};

 console.log(encode("https://leetcode.com/problems/design-tinyurl"));
 console.log(decode("http://tinyurl.com/cbxAri"));