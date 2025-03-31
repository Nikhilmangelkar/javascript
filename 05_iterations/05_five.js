const nums=[1,2,3]

// const newnums=nums.map((num)=>{return num+10})
// console.log(newnums);

// const newNums=nums.map((num)=>num*10)
//                   .map((num)=>num+1)
//                   .filter((num)=>num>=40)

//     console.log(newNums)  
    
// const myTotal=nums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const myTotal=nums.reduce((acc,curval)=>acc+curval,0)


console.log(myTotal);

const shoppingcart=[
    {
        itemname:"js",
        price:2999
    },
    {
        itemname:"java",
        price:3999
    },
    {
        itemname:".net",
        price:3500
    }

]

const price=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(price);