const myObject={
    game1:'NFS',
    game2:'GTA',
    game3:'CS'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
// objects not iterable with for of 

for (const key in myObject) {
//    console.log(`${key} is ${myObject[key]}`);
}

//for in is iterable for objects 

const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('FR',"France")

for (const key in map) {
    // console.log(key);
}

//map is not iterable in for in loop


//for each loop

const coding=["js","java","cpp"]

// coding.forEach(function (item){
//     console.log(item)
// } )

// coding.forEach((item)=>{

//     console.log(item)
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

 