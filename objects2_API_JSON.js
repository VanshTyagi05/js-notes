const instaUser = new Object(); // instaUser is singleton object
const user = {}; // user is literal object

instaUser.id = "123abc";
instaUser.name = "vansh";
instaUser.isLoggedIn = false;

// console.log(instaUser);
// console.log(typeof instaUser.isLoggedIn);

// Nesting of Objects is possible

const regularUser = {
  email: "some@gmail.com",
  name: {
    username: {
      firstname: "vansh",
      lastname: "tyagi",
    },
  },
};
// console.log(regularUser.name.username.firstname);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// target is converted to returned target
// Expected output: true

const returnedTarget2 = Object.assign({}, target, source);
// console.log(returnedTarget2)

// console.log(returnedTarget2 === target);
//returnedtarget2 is individual
// Expected output: false
const obj3 = { ...target, ...source }; // spread method whicH is mostly used
// console.log(obj3);

const users = [
  { firstname: "vansh", lastname: "tyagi" }, // each element of array is an object
  { firstname: "vansh", lastname: "tyagi" },
  { firstname: "vansh", lastname: "tyagi" },
  { firstname: "vansh", lastname: "tyagi" },
];

// console.log(users[1].firstname);

// console.log(Object.keys(instaUser));

//+++++++++++++++++++++++++ DE-STRUCTURING +++++++++++++++++++++++++++++++++++++++++++
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};
// console.log(course.courseInstructor) // not usable syntax

// const {courseInstructor}=course; // destructuring
// console.log(courseInstructor);
// const {keys_name}=Object_name
const { courseInstructor: instructor } = course; // alias naming

console.log(instructor);

//++++++++++++++++++++++++ API & JSON{JavaScript Object Notation} +++++++++++++++++++++++++++++++++++++++
//in earlier times APi returns data in form of xml file but now  Api returns data in form of json file
// JSON file is nothing but a object
// for example this api output is returned from github api
// {
//   "login": "VanshTyagi05",
//   "id": 159777456,
//   "node_id": "U_kgDOCYYCsA",
//   "avatar_url": "https://avatars.githubusercontent.com/u/159777456?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/VanshTyagi05",
//   "html_url": "https://github.com/VanshTyagi05",
//   "followers_url": "https://api.github.com/users/VanshTyagi05/followers",
//   "following_url": "https://api.github.com/users/VanshTyagi05/following{/other_user}",
//   "gists_url": "https://api.github.com/users/VanshTyagi05/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/VanshTyagi05/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/VanshTyagi05/subscriptions",
//   "organizations_url": "https://api.github.com/users/VanshTyagi05/orgs",
//   "repos_url": "https://api.github.com/users/VanshTyagi05/repos",
//   "events_url": "https://api.github.com/users/VanshTyagi05/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/VanshTyagi05/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Vansh Tyagi",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": "enthusiastic to learn programming skills.\r\n",
//   "twitter_username": null,
//   "public_repos": 7,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 3,
//   "created_at": "2024-02-12T11:20:54Z",
//   "updated_at": "2024-05-29T12:03:50Z"
// }


