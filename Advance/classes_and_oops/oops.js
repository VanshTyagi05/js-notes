 // agr kabhi four main pillars ke bare mai padhna ho...
 // https://chatgpt.com/g/g-2DQzU5UZl-code-copilot


 // object literal :- ye toh vohi object hai jinke bare mai humne padha tha....
 const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
      //console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this);
  }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
      console.log(`Welcome ${this.username}`);

  }

  return this
}
// new ka use isliye jruri hai kyuki "new " keyword ek nya ur separate object create kr deta hai...toh value overwrite nhi hoti..
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);