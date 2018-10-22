function greet(person) {
	console.log(person);
	if (person.name == 'amy' ) {
//	if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
console.log(greet({ name: 'amy' }));

for (var i = 0; i < 4; i++) {
	  setTimeout(() => console.log(i), 0)
}

for (var i = 0; i < 4; i++) {
	(function(i_local){
		setTimeout(() => console.log(i_local), 0);
	})(i);
	  
}


let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
//console.log("........"+dog.sayName,this.name);
let sayName = dog.sayName
sayName()

function Dog(name) {
  this.name = name
}
Dog.prototype.bark = function() {
//Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()