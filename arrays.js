const myArr= [1,2,3,4,5]
myArr.push(6);
// console.log(myArr);

 const newArr= new Array(1,2,3,4)
//  console.log(newArr);

 const marvel_Heros=["thor","ironMan", "Spiderman"]
 const dc_Heros=["batman","superman","flash"]
const india_heros=["baalveer","shaktiman"]
//  marvel_Heros.push(dc_Heros);
//  console.log(marvel_Heros);
//  console.log(marvel_Heros.concat(dc_Heros));
//  console.log(marvel_Heros.pop());

 const all_new_Heros=[...marvel_Heros,...dc_Heros,...india_heros];// spread method of array
//  console.log(all_new_Heros);

const ajeeb_array=[1,2,3,4,[5,6],7,[6,7,8,[9,10]]]
const sudhri_hui_array=ajeeb_array.flat(Infinity);
// console.log(sudhri_hui_array);

console.log(Array.isArray("vansh"));
console.log(Array.from("vansh"));
console.log(Array.from({name:"vansh"}));//interesting case objects vali array
