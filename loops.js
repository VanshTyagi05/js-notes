// for,while,do while ye sab same hai..jyada bakchodi nhi

//FOR OF loop mostly used for arrays and Maps
// iska jo iterator hai vo directly values uthalata hai

// ["","",""]
// [{},{},{}]



//+++++++++++++++++++++++ for 0f loop ++++++++++++++++++++++++++++++++++++



const myArr=[1,2,3,4,5]
for (const num of myArr) {
  // console.log(num);
  
}
const greetings="hello world"
for (const i of greetings) { // i= iterator greetings=object
  // console.log(` each character is ${i}`);
  
}

// MAPS : also a kind of datatype
const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRAMCE")
map.set('USA', "UNITED STATES")
map.set('IN', "INDIA") // this will not be added bcz maps only have unique values
// console.log(map);

for (const[ key,Value] of map) {
  // console.log(key, ":-", Value);
  
}

const myObject={
   game1: "BGMI",
   game2:"freeFire",
   game3: "VICE CITY"
}

// for (const [key,Value] of myObject) {
//   console.log(key, ":-", Value); // myObject is not iterable by forof loop
// }




//+++++++++++++++ For objects we have " For-in" loop ++++++++++++++++++++




// isme jo iterator hai vo keys ka hi access leta hai
const myObject1={
  JS:"JavaScript",
  cpp:"C++",
  rb:"ruby"

}

for (const key in myObject1) {
  //console.log(`  ${key} is short cut for  ${myObject1[key]}`); 
}


const programming =[ "js", "cpp", "java"]
 for (const key in programming) {
  // console.log(`${programming[key]}`);
 }



//++++++++++++++++++++++++ For-each loop +++++++++++++++++++++++++



//A function { lekin function ka nam nhi hona chahiye }that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//Performs the specified action for each element in an array.




const coding=["js","cpp","java","python","c"]

 coding.forEach( function(item){
//       console.log(item);
 })

coding.forEach((item,index,arraylist)=>{ // yehi teen arguments ki upar bat ho rhi thi
 //console.log(item,index, arraylist);
})


const myArr4=[
  {
    name: "Vansh",
    "full name":"Vansh TYagi",
   
  },
  {
    name: "Vansh",
    "full name":"Vansh TYagi",
    
  },
  {
    name: "himanshi",
    "full name":"Vansh TYagi",
    
  },
  {
    name: "deepti",
    "full name":"Vansh TYagi",
    
  }
]

myArr4.forEach((item)=>{
  console.log(item.name);
})

// ye kam aayega database se data laate waqt 

