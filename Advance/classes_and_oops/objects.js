function multipleBy5(num){

  return num*5
}

multipleBy5.power = 2

//console.log(multipleBy5(5));
//console.log(multipleBy5.power);
//console.log(multipleBy5.prototype);

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++ // this:- createUser ka context
} 
// yha aap createUser jo function hai uske prototype mai ek property/method  aur add kr rhe ho...


createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`); // this:- createUser ka context
}

createUser.prototype.printname= function(){
  console.log(
    ` name of user is: ${this.username}` // this:- createUser ka context
  );
}
const chai = new createUser("chai", 25)// "new" keyword ke bina ye hoga hi nhi...
const tea = new createUser("tea", 250)

//chai.printMe()
//chai.printname()
tea.printMe()
tea.increment()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/