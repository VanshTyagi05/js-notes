//Singletons
//Object.create 
//declaration:   "const user= new Object();"  here user is singleton object

// object Literals
  const mySym= Symbol("key1")
  
  
  const myObj={
    name: "Vansh",
    "full name":"Vansh TYagi",
    age: "17",
    location: "Meerut",
    [mySym]:"mykey1", //important syntax for Symbols
    osLoggedIn: "false",
    email:"vansh@9012gmail.com",
    lastLoginDays:["monday", "saturday"]
  }
 
  //  console.log(myObj.email);
  // console.log(myObj["email"]);
  // console.log(myObj["full name"]);
  // console.log(myObj[mySym]);
  
  myObj.age=15;
  // console.log(myObj["age"]);
  // Object.freeze(myObj);
  myObj.age=16; // meaning less bcz myObj is already freezed!
  // console.log(myObj);

  myObj.greeting=()=>{
    console.log("Hello User");
  }

  console.log(myObj.greeting());
  myObj.greetingtwo=function(){
    console.log(`Hello Mr, ${this.name}`); // "this" can be used to acces keys of object  but inside ${this.onjectkey}
  }
  console.log(myObj.greetingtwo());
