 
 // STACK memory {primitive datatypes}
// when info of  one variable is assigned to another then a copy is created;

 let name="vansh";
 let anotherName=name;
 anotherName="gholuu"

//  console.log(name)
//  console.log(anotherName);

 // heap memory { arrys,objects, functions ie non-primitive datatypes}

 let userone={
  email: "vanshtyagi9012@gmail.com",
  upi: "abc"

 }

 let usertwo=userone;

 usertwo.email="dptyagi";
 usertwo.upi="bcd";
 console.log(userone.email);
 console.log(usertwo.email);

 // same output i.e dptyagi bcz everything is stored in heap which means each change is made  in original value