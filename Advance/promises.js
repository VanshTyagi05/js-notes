// promises in js ki mehtavpoorna batein....


// promise kya hai?    jo bhi task apne diya hai aur  vo abhi ke abhi complete nhi hua hai.. lekin vo queue mai lag gya hai...mtlb pura  hoga ya nhi hoga ye hume thode tym bad pta chlega...The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// itna yad rkhna ki  kahi na khi promise bhi ek object hi hai...for example jab hum koi DB se data mangate hai to vo hume ek promise return krta hai.... ab us promise se hum data extract lkrte hai...




const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 1");
    resolve(); // resolve hi to value iss function ka response pass karta hai .then vale function mai
  }, 1000);
});

promise.then(function () {
  console.log("async task resolved");
});

// anoyther method to handle promises

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task2 resolved");
});

// resolve ka mtlb yha smjh aayega

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 1");
    resolve({ username: "vansh", age: "17" }); // resolve hi to  iss function ka response pass karta hai .then vale function mai... ab yha jo ye object pass kiya hai..vo hi .then vale function mai argument ban jayega....
  }, 1000);
});

promise3.then(function (user) {
  // ye user equal hai resolve ke andar pass hue object ke...
  console.log(user); // output:-{username: "vansh" , age: "17"}
});

//

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "vansh", age: "17" });
    } else {
      console.log("error occurred");
    }
  }, 1000);
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });



  // ab thodi majedaar batein aayegi...
  // ASYNC AWAIT ki batein hongi..



  
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", age: "17" });
    } else {
      reject('error occurred');
    }
  }, 1000);
});

// async function consumePromise5(){
//   const response=await promise5
//   console.log(response); // yha aayega error..kyuki humne promise5 mai error introduce kiya hai....isliye jrurt pdegi "try-catch" ki
// }

async function consumePromise5(){
  try {
    const response=await promise5
  console.log(response); 
    
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();


// fetch ke bare mai bhi bat kr li jaye....

async function users(){
  try {
    const resonse= await fetch('https://api.github.com/users')
  const data= await resonse.json()

  console.log(data);
    
  } catch (error) {
    console.log('error:',error)
  }
}

users()