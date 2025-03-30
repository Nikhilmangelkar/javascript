// const tinderUser=new Object() //singleton object

const tinderUser={} //non singleton object

tinderUser.id="123nik"
tinderUser.name="nikhil"
tinderUser.age=25

// console.log(tinderUser);

const regularUser={
    email:"n@gmail.com",
    fullname:{
       userfullname:{
        firstname:"nikhil",
        lastname:"mangelkar"
       } 
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:2,
        email:"r@gmail.com"
    }
]

//console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('age'))

const course={
    coursename:"js in english",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor}=course

console.log(courseInstructor);

    