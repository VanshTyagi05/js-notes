// yha pe bat hai ki tum objects ki kuch hidden properties ko bhi access kar skte ho..aur unhe change kr skte ho...lekin vo object tuma=hara khud ka banahya hua hona chaiye....
//jo already JS mai defined hai...for example 'Math' ke andr 'PI' ki value... uska tum kuch change nhi kr skte..

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);
// // output:- value: 3.141592653589793,
//             writable: false,
//             enumerable: false,
//             configurable: false

// console.log(Math.PI);
// Math.PI = 5 // not possible
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// object is not iterable....lekin Object.entries(name_Object) is used to make object iterable
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
