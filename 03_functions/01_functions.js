function sayMyName(){
    console.log("N");
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
}

//sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result

    return num1+num2
}

const result=addTwoNumbers(2,5)

//console.log("Result:",result)


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username..")
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Nikhil"))
//console.log(loginUserMessage("nik"))

function calculateCartPrice(val1,val2,...num1){

    return num1
}
//console.log(calculateCartPrice(300,400,500,600,700))

const user={
    username:"nikhil",
    price:"1999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username:"sam",
    price:888
})

const myNewArray=[200,400,800]

function returnSecomdValue(getArray){
    return getArray[1]
}

//console.log(returnSecomdValue(myNewArray))

console.log(returnSecomdValue([200,500,700,900]))

