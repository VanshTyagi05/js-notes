// let myName = "hitesh     " 
// iski length=11;
// lekin actual alphabets kitne hai=6;
// let mychannel = "chai     "
// mujhe aisa ek method bna na hai jo sab string pe applicable ho aur actual length btaye...

// ye possible hai Prototype ki vjah se....


// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// dekho yha kya hua... Object ke prototype mai ek additional function add hua hai hitesh nam ka..
// ab ye function kuch kam kar rha hai...jo ye kam kar rha hai vo kisi bhi object par lagaya ja skta hai...


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance
// ek object ki info dusre kisi object mai access karna is inheritence of objects 
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax of prototype

 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()