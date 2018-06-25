
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function bubbleSortBasic(array) {
	  for(var i = 0; i < array.length; i++) {
	    for(var j = 1; j < array.length; j++) {
	      if(array[j - 1] > array[j]) {
	        swap(array, j - 1, j);
	      }
	    }
	  }
	  return array;
	}

	console.log(bubbleSortBasic(array.slice()));
	
	
	var array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

	function insertionSort(array) {
	  for(var i = 0; i < array.length; i++) {
	    var temp = array[i];
	    var j = i - 1;
	    while (j >= 0 && array[j] > temp) {
	      array[j + 1] = array[j];
	      j--;
	    }
	    array[j + 1] = temp;
	  }
	  return array;
	}

	console.log(insertionSort(array1));
	
	
	function binary_Search(items, value){
	    var firstIndex  = 0,
	        lastIndex   = items.length - 1,
	        middleIndex = Math.floor((lastIndex + firstIndex)/2);

	    while(items[middleIndex] != value && firstIndex < lastIndex)
	    {
	       if (value < items[middleIndex])
	        {
	            lastIndex = middleIndex - 1;
	        } 
	      else if (value > items[middleIndex])
	        {
	            firstIndex = middleIndex + 1;
	        }
	        middleIndex = Math.floor((lastIndex + firstIndex)/2);
	    }

	 return (items[middleIndex] != value) ? -1 : middleIndex;
	}
	var items = [1, 2, 3, 4, 5, 7, 8, 9];
	console.log(binary_Search(items, 1));   
	console.log(binary_Search(items, 5));
	
	
	for (var i = 1; i <= 3; i++) {
		  (function(i) {
		    setTimeout(function() {
		      console.log(i + " second(s) elapsed");
		    }, i * 1000);
		  })(i);
		}
	
	const arr = [10, 12, 15, 21];
	for (var i = 0; i < arr.length; i++) {
	  // pass in the variable i so that each function 
	  // has access to the correct index
	  setTimeout(function(i_local) {
	    return function() {
	      console.log('The index of this number is: ' + i_local);
	    }
	  }(i), 3000);
	}