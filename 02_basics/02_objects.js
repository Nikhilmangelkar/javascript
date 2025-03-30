//object literals

const mySymb=Symbol("key1")

const JsUser={
    name:"nikhil",
    [mySymb]:"mykey1",
    age:25,
    email:"n@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","friday"]
}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log( JsUser[mySymb])

// Object.freeze(JsUser)
JsUser.email="r@gmail.com"

// console.log(JsUser)

JsUser.greeting= function(){
    console.log("hello nik");
}

JsUser.greeting2= function(){
    console.log(`Hello User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());