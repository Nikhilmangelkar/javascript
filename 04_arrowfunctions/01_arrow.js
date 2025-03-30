const user={
    username:"nikhil",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="rut"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="rahul"
//     console.log(this.username);
// }

// chai()

// const chai= function(){
//     let username="nikhil"
//     console.log(this.username);
// }

const chai= ()=>{
    let username="nikhil"
    console.log(this);
}

//chai()

//  const addTwo= (num1,num2)=>{
//     return num1+num2
//  }


// const addTwo= (num1,num2)=>(num1+num2)
 
const addTwo = (num1,num2) => ({username:"hitesh"})

 console.log(addTwo(50,54))
