//for

for (let i = 0; i <= 10; i++) {
//    console.log(`Outer loop value:${i}`);
   for (let j = 0; j <= 10; j++) {
//    console.log(`Inner loop value:${j}`);
    
   }
}

let myArray=["flash","batman","superman"]
for(let i=0;i<myArray.length;i++){
    const element=myArray[i];
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
   if(i==5){
   // console.log(`Detected 5`);
    break
   }
  // console.log(`value of i is ${i}`);
    
}

for (let i = 0; i < 10; i++) {
    if(i==5){
     console.log(`Detected 5`);
    continue
    }
    console.log(`value of i is ${i}`);
     
 }