
// +++++++++++++++++++ FUNCTIONS IN JS +++++++++++++++++++++++++++++++++++
function myname(){
  console.log("Vansh Tyagi")
 }

//  myname();

// function addTwoNum( num1, num2){
//   console.log(num1+num2);
// }
// addTwoNum(2,3) // output= 5
// addTwoNum(2,"3") // OUTPUT= 23


function addTwoNum( num1, num2){
  let result=num1+num2;
  return(
    result
    
  )
}

let result= addTwoNum(3,4)
// console.log(result);
// console.log(typeof result);

// default value in parametr of funcction

 function loggedIn(username="vansh"){
  if(!username){
    console.log("please enter a username");
    return 
  }
  return ` ${username} just logged in`
 }

// console.log(loggedIn()); // kuch nhi daloge to default value run ho jayegi

//console.log(loggedIn("")); //empty input jayega aur if statrmnt run hogi
//console.log(loggedIn("vansh tyagi")); // vanshtyagi just logged in is output

//++++++++++++++REST AND SPREAD IN arguments++++++++++++++++++++

function calculateCartPrice(...num1){// rest operator
  return num1;
  //num1 array contains all the input from user
}
// console.log(calculateCartPrice(200,300,600))


function calculateCartPrice(val1,val2,...num1){// rest operator
  return num1;
  //num1 array contains all the input from user but starting two input will go in val1 and val2
}
// console.log(calculateCartPrice(200,300,600,700))



//++++++++++++++ OBJECTS and ARRAYS in Functions  +++++++++++++++++++++++



 const user={
  username: "vansh",
  age:"16"
 }

 function userDetails(anyObject){
   return ` the username is ${anyObject.username} and the age is ${anyObject.age} `
 }

 const reslt = userDetails(user);
//  console.log(reslt);

// you can directly pass object inside the argument
 const result3=userDetails(
  {
    username: "hitesh",
    age: "15"
  }
 )

//  console.log(result3);

const myArr= [2,3,4,56]

function returnSecond(anyArr){
  return anyArr[1]
}
// console.log(returnSecond(myArr))





// ++++++++++++++ GLOBAL AND LOCAL SCOPE  ++++++++++++++++





// jab bhi {...} kisi  function,if-else,loops ke sath aata hai to vo banjata hai scope

if(true){ 
  let a=10;
  const b=20;
  var c=30;
}

//console.log(a); // errror
//console.log(b);// error
//console.log(c); // output 30 aur issi liye "var " hum usew nahi karte hai

// GLOBAL SCOPE : jo bhi variable declare hota hai globally vo pure code mai kahi bhi use ho skta hai 
// LOCAL SCOpe: jo vairable declare hota hai locally vo sirf { } iske andar  hi accesible hai.. iske bahar nhi 



//+++++++++++++++++ EK INTERESTING BAAAT ++++++++++++++++++++++


addone(6)
function addone(num){ // ye vale function ko isse pehel bhi call kr skte hai error nhi aayega
  return num+1;
}
// addTwo(7) // lekin yha error aajyega isko pehle cll nhi kar skte

const addTwo= function(num){ // is tarh ke declaration ko expression bhi bol dete hai
  return num+2;
}
addTwo(5) // ye bilkul okk hai





//++++++++++++++++= THIS  and ARROW FUNCTION +++++++++++++++++++++++++++++++++++++

//this : jis scope mei aap abhi present ho uske context ko refer karta hai..

const user1 = {
  username: "vansh",
  age: "15",
  welcomeMEssage: function(){
    console.log(` welcome ${this.username} to the website`); // this jo hai vo context ko refer kar rha hai user1 object ke
  //   console.log(this);
   }
  
}
// user1.username="hitesh"
// console.log(user1.welcomeMEssage());
// user1.welcomeMEssage()
// console.log(this); // it will return empty object


//const chai=function(){
 // username= "vansh"
  //console.log(this.username) // not applicable bcz its function not object
//}


//++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++


const chai=()=>{
  username= "vansh"
  console.log(this) //empty object
}
//  chai() 

// const addTwoo=(num1,num2)=>{
//  return num1+num2;
// }
// const addTwoo=(num1,num2)=> num1+num2; // ye bhi thk hai
// const addTwoo=(num1,num2)=> (num1+num2); // ye bhi bilkul thik hai
const addTwoo=(num1,num2)=> ({username:"vansh"});
// object ke liye { } ye to use karna hi padega
// console.log(addTwoo(1,2));



//++++++++++++++ IIFE: Imediately Invoked Function Expressions  ++++++++++++
// IIFE ka use kya hai? jawab hai === iski madat se global scope ka pollution kam ho jata hai ya fir hatt jata hai

(function chasi(){
  console.log(`DB CONNECTED`);
})() 

// first vala () ye wrap kr rha hai function ko... aur dusra() kar rha hai call
