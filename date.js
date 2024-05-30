// DATES IN JS

let myDate= new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.getHours());
// console.log(myDate.getTime());

// let myCreatedDAte= new Date(2023,0,22);

let myCreatedDAte= new Date("01-14-2024");// mm-dd-yy
// console.log(myCreatedDAte.toDateString());
// console.log(myCreatedDAte.toLocaleString());

//+++++++++++++++++++++++++++++ TIME  +++++++++++++++++++++++++

let myTime= Date.now()
// console.log(myTime);
// console.log(Math.floor(myTime/1000));

let newDate= new Date();

 let mydate3=newDate.toLocaleString('default',{
  weekday:"long",
  day:"numeric",
  
})

console.log(mydate3);
