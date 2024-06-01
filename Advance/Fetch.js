// FETCH ko samajhna padega achae se....
 //fetch is liye important hai kyuki iski priority execution mai sbse jyada hoti hai...kena ka mtlb hai ki jo request fetch ke sath hui hai vo sbse pehle hogi....
 // fetch ke andar sirf url nhi object bhi pass kar skte ho...
 // fetch('URL', {object})
 // 
fetch('https://api.github.com/users')
.then(function(response){
 let data=response.json()
 return data
})
.then(function(users){
 console.log(users)
})
.catch(function(error){
  console.log(error);
})