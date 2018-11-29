function splitSMS(msg, limit){
		var i = 0
		var output = []
		while(i < msg.length){
			var start = i;
			i += limit;
			while(i < msg.length && msg[i] != ' '){
				i -= 1;
			}
//			console.log(i,msg.length,start,space,msg.substring(start,space));
			var space = i;
			output.push(msg.substring(start,space));
			i = i+1;
		}
		
		return output.map(function(chunk, i) {
//			console.log(chunk, i);
			return chunk + "("+(i+1)+"/"+output.length+")";
		});
		
//		return output;
}


function splitMsg(msg, limit) {
	  var chunks = [];
	  var split = msg.split(' ');

	  var thisChunk = split[0];
	  for (var i=1; i < split.length; i++) {
	    var nextLength = thisChunk.length + split[i].length + 1;

	    if (nextLength > (limit-5)) {
	      chunks.push(thisChunk);
	      thisChunk = split[i];
	    } else {
	      thisChunk += " " + split[i];
	    }

	    if (i == split.length-1) chunks.push(thisChunk);
	  }

	  return chunks.map(function(chunk, i) {
	    return chunk + "("+(i+1)+"/"+chunks.length+")";
	  });
	}


var message = "Hello Your Uber driver is arriving.";
var lim = 20;

//console.log(splitMsg(message,lim));
console.log(splitSMS(message,lim));