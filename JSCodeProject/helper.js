function contains(arr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === value) return true;
    }
    return false;
}

var sec = Number.MIN_SAFE_INTEGER - 1;
var sec = Number.MIN_VALUE; Number.MAX_VALUE;
var third = Number.MIN_SAFE_INTEGER - 1;
//Object.keys(data)
//.sort()
//.forEach(function(v, i) {
////  console.log(v, data[v]);
//});

//var ks = Object.keys(data).sort(function(a,b){return data[a]-data[b]});

function flatten(arr) {
	  return arr.reduce(function (flat, toFlatten) {
	    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	  }, []);
	}

function sortNumber(a,b) {
    return a - b;
}
function formatRGB ( r, g, b ) {
    return (toHex(r) + toHex(g) + toHex(b)).toUpperCase();
}

function toHex ( c ) {
    var s = c.toString ( );
    return ( s.length == 1 ) ? "0" + s : s;
}


R = hexToR("#FFFFFF");
G = hexToG("#FFFFFF");
B = hexToB("#FFFFFF");

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

console.log(formatRGB(64,55,78));