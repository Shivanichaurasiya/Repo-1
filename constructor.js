// const promiseOne = new Promise();
// const date = new Date();


//new is a constructor function used to create a new context

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this

}

const userOne=new User("hitesh",12,true)
const userTwo=new User("herry",11,false)

console.log(userOne.constructor);
console.log(userTwo);


//new keyword user karte hi ek empty object create hotahai jise instance bolte hai
//constructor function call hota hai new keyword ke vajah se ye sare arguments ko bind karta hai or de deta hai
//