class User{
  constructor(username,email,password){
 this.username=username
 this.email=email
 this.password=password
  }
  

   printUser(){
    console.log(`username: ${this.username}`);
   }
   printPassword(){
    console.log(`password: ${this.password}`);
   }
   changeEmail(){
    console.log(``);
   }
}

const chai=new User("vansh","vansh@gmail", "123@abc")
chai.printPassword()
chai.printUser()


// yhi same cheeez prototype se bhi kar skte ho..