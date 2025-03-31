// const coding=["js","java","cpp"]

// const values=coding.forEach((item)=>{
//    console.log(item);
//    return item
// })

// console.log(values);

const nums=[1,2,3,4,5,6]

// const newNums=nums.filter((num)=>num>2)

// const newNums=nums.filter((num)=>{
//    return num>3
// })

// console.log(newNums);

// when u open the scope of call back function in filter use return statement 

// const newNums=[]

// nums.forEach((num)=>{

//     if(num >3){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks=books.filter((bk)=>bk.genre==='History')

  const userBooks1=books.filter((bk)=>{
    return bk.publish>=2000
})

  console.log(userBooks1);