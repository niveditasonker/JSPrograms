var validIPAddress = function(IP) {
    if(IP.indexOf('.') > 0)
        return validIPv4(IP) ? 'IPv4' : 'Neither';
    else
        return validIPv6(IP) ? 'IPv6' : 'Neither';
};

var validIPv4 = function(IP) {
    let strs = IP.split('.');
    if(strs.length !== 4) return false;
    for(let str of strs) {
        if(str.length === 0) return false;
        if(str.match(/[^0-9]/)) return false;
        if(str.length > 1 && str.charAt(0) === '0') return false;
        if((+str) > 255) return false;
    }
    return true;
};

var validIPv6 = function(IP) {
    let strs = IP.split(':');
    if(strs.length !== 8) return false;
    for(let str of strs) {
        if(str.length === 0) return false;
        if(str.length > 4) return false;
        if(str.match(/[^0-9a-fA-F]/g)) return false;
    }
    return true;
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));


var validateIPAddress = function(IP) {
    
    if(!IP.length) {
        return 'Neither';
    }
    
    function isIPv4() {
        
        for(var i=0;i < IP.length; i++) {
            if('0123456789'.indexOf(IP.charAt(i)) == -1 && IP.charAt(i) !== '.') {   
                return false;
            } 
        }
        var myIpArr = IP.split('.');
        
        if (myIpArr.length !== 4) {
            return false;
        } 
    
        for(var i=0; i< myIpArr.length; i++) {
            
            if(myIpArr[i].length == 0) {
                return false;
            }
            
            if(myIpArr[i].length > 1 && myIpArr[i][0] == 0) {
                return false;
            }
             
             if(!(myIpArr[i] > -1 && myIpArr[i] < 256)) {
                 return false;
             }
             
        }
        return true;
    }
    
     function isIPv6(IP) {
         var hexChars = "0123456789abcdefABCDEF";
         
        var arr =  IP.split(':');
         
         if(arr.length !== 8) {
             return false;
         }
         
         for(var i=0; i< arr.length; i++) {
            if(arr[i].length == 0 ) {
                 return false;
             }
             if(arr[i].length > 4 ) {
                 return false;
             }
             for(var j=0; j < arr[i].length; j++) {
                 if(hexChars.indexOf(arr[i][j]) == -1) {
                     return false;
                 }
         }
     }
         return true;
     
     }
    
    
    if (isIPv4(IP)) {
        return 'IPv4';
    }
    
    if (isIPv6(IP)) {
        return 'IPv6';
    }
    
    return 'Neither';
    
};

console.log(validateIPAddress("172.16.254.1"));
console.log(validateIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
