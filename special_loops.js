//Special loopa matlb filter, map aur reduce ...

// Filter

const myNum=[1,2,3,4,5,6,7,8,9,10];

const mewNum1=myNum.forEach((item)=>{
   //return item>4;   // dikkat ye hai ki for each loop kabhhi kuch return nhi karta hai...isliye hi ek nya method filter ki jrurt oadi
})

const newNum=myNum.filter((num)=>{
 return num>4;
})
//console.log(newNum);

//dekho jaise ab ye data kisi api se aaya hoga..ab hum isme se info nikalege
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const HistoryBooks=books.filter((books)=>{
  return books.genre==="History"
})
//console.log(HistoryBooks);

const newpublish=books.filter((bk)=> bk.publish>=1995 && bk.genre==="History")

//console.log(newpublish);




//+++++++++++++++ MAP method of loops ++++++++++++++++++++



// dekho map bhi kam for-each jaisa hi krta hai...mtlb callback fn ko har ek array element par apply krta hai lekin ye return kar skta hai value

const mynumbers=[1,2,3,4,5,6,7,8,9,10]

const newNumbers = mynumbers.map((item)=>{
  return item+10
})

//console.log(newNumbers);

//chaining bhi possible hai....
// chaining matlb .map().map()    .map().filter()

const numbers2=mynumbers
                       .map((num)=> num*10)
                       .map((num)=>num+1)
                       .filter((num)=> num>50)
                       .filter((num)=>num< 90)

                       //console.log(numbers2);

 

//+++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++
//sare elements ka summation krta h

const mynums=[1,2,3]
const myTotal=mynums.reduce((acc,curval)=>{// curval= each element of array
  //console.log(`acc: ${acc} and curval: ${curval}`);
//output
//   acc: 4 and curval: 1
//   acc: 5 and curval: 2
//   acc: 7 and curval: 3
  return acc+curval
},4)

//console.log(myTotal)

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999+4
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);