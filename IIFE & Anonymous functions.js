// Q.No.1 Print odd numbers in an array
// Anonymous function
let a =[1,2,3,4,5,6];
const odd=(e)=>{
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
           console.log(a[i]);
        }
    }
}
odd(a);
// IIFE
((e)=>{
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
        console.log(a[i]);
         }
  }
}
)(a)
// Print odd numbers in an array Output:1 3 5

// Q.No.2  Convert all the strings to title caps in a string array
// // Anonymous function
let a=["arun", "kumar", "guvi"];
const arr= ((e)=>{
    for(let i=0;i<a.length;i++){
        console.log(e[i][0].toUpperCase()+e[i].slice(1))
    } 
});
arr(a);
// // IIFE
((e)=>{
    for(let i=0;i<a.length;i++){
        console.log(e[i][0].toUpperCase()+e[i].slice(1))
    } 
})(a)
// // Output = Arun, Kumar, Guvi

// Q.No.3. Sum of all numbers in an array
// // Anonymous function
let a=[1,2,3,4,5];
var temp=0;
const add=((e)=>{
    for (let i = 0; i < a.length; i++) {
         temp += a[i];   
    }
console.log(temp);
})
add(a);
// // // IIFE
var temp=0;
((e)=>{
    for (let i = 0; i < a.length; i++) {
        temp += a[i]; 
    }
    console.log(temp);
})(a);
// // Output : a=[1,2,3,4,5] is 15

// Q.No.4 Return all the prime numbers in an array
// Anonymous function
let a=[3,4,5,6,7,13,9];
let prime;
let b=((e)=>{
    for (let i = 0; i < a.length; i++) {
        prime=true;
        for (let j = 2; j <e[i];j++){  
            if(e[i]%j ===0){
                prime =false;
               break;
            }            
        }    
        if(prime==true){
            console.log(e[i]);            
        }     
           }          
})
 b(a);
 
//  IIFE
let a=[3,4,5,6,7,13,9];
let x=[];
((e)=>{  
   for (let i = 0; i < a.length; i++) {
    prime=true;
    for (let j = 2; j <e[i];j++){  
        if(e[i]%j ===0){
            prime =false;
           break;
        }            
    }    
    if(prime==true){
        console.log(e[i]);            
    }     
       }  
})(a);
// Output = 3,5,7,13