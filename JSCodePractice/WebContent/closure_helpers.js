
//Callback
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}


//Adding closure
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


//Using let
for (let i = 1; i <= 3; i++) {
	  setTimeout(function() {
	    console.log(i + " second(s) elapsed");
	  }, i * 1000);
	}

//Promises
function getData(options) {
	  return new Promise(function(resolve, reject) {                    //create a new promise
	    $.get("example.php", options, function(response) {
	      resolve(JSON.parse(response));                                //in case everything goes as planned
	    }, function() {
	      reject(new Error("AJAX request failed!"));                    //in case something goes wrong
	    });
	  });
	}

	// usage
	getData({name: "John"}).then(function(data) {
	  console.log(data)
	}, function(err) {
	  console.log("Error! " + err);
	});
	
	
	
	
	
	/*<ul id="todo-app">
	  <li class="item">Walk the dog</li>
	  <li class="item">Pay bills</li>
	  <li class="item">Make dinner</li>
	  <li class="item">Code for one hour</li>
	</ul> */
	
	document.addEventListener('DOMContentLoaded', function() {
		  
		  let app = document.getElementById('todo-app');
		  let items = app.getElementsByClassName('item');
		  
		  // attach event listener to each item
		  for (let item of items) {
		    item.addEventListener('click', function() {
		      alert('you clicked on item: ' + item.innerHTML);
		    });
		  }
		  
		});
	
	document.addEventListener('DOMContentLoaded', function() {
		  
		  let app = document.getElementById('todo-app');
		  
		  // attach event listener to whole container
		  app.addEventListener('click', function(e) {
		    if (e.target && e.target.nodeName === 'LI') {
		      let item = e.target;
		      alert('you clicked on item: ' + item.innerHTML);
		    }
		  });
		  
		});
	
	
	
	
	function debounce(fn, delay) {
		  // maintain a timer
		  let timer = null;
		  // closure function that has access to timer
		  return function() {
		    // get the scope and parameters of the function 
		    // via 'this' and 'arguments'
		    let context = this;
		    let args = arguments;
		    // if event is called, clear the timer and start over
		    clearTimeout(timer);
		    timer = setTimeout(function() {
		      fn.apply(context, args);
		    }, delay);
		  }
		}
	
	function foo() {
		  console.log('You are scrolling!');
		}

		// wrap our function in a debounce to fire once 2 seconds have gone by
		let elem = document.getElementById('container');
		elem.addEventListener('scroll', debounce(foo, 2000));
		
		
		
		
		var counter=function() {
			  var _counter=0;
			  return {
			    add: function(num) { _counter+=num; },
			    retrieve: function() { return "the value of counter is currently: "+_counter; }
			  };	
			};

			var count=counter();
			count.add(9);
			count.add(5);
			count.retrieve(); //==> 'the value of counter is currently: 5'
	
	