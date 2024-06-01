class User{
  constructor(username){
 this.username=username

  }
  

   logMe(){
    console.log(`username: ${this.username}`);
   }
  }

  class student extends User{
    constructor(username,email,password){
      super(username)
      this.email=email
      this.password=password
    }

    addCourse(){
      console.log(`a new course was added by ${this.username}`);
    }
  }

  const chai=new student("vansh","abc","123")
  chai.addCourse()

  const tea=new User("vansh")

  tea.logMe()