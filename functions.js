// Q.No.5 Return all the palindromes in an array
// Anonymous function
let a=[565,202,252,56,69,88];
let b;
const palindromes=((e)=>{
    for (let i = 0; i < a.length; i++) {
        b=a[i];
      let number=b;
      let reverse=0;
       while (b>0) {
          let reminder =b%10;
           reverse = reverse * 10 + reminder
           b=Math.floor (b/10);          
       };
      if(number==reverse){
          console.log(number);
      }  
    }
});
palindromes(a);
// IIFE
((e)=>{
    for (let i = 0; i < a.length; i++) {
        b=a[i];
      let number=b;
      let reverse=0;
       while (b>0) {
          let reminder =b%10;
           reverse = reverse * 10 + reminder
           b=Math.floor (b/10);          
       };
      if(number==reverse){
          console.log(number);
      }  
    }
})(a);
// output= 565,202,252,88

// Q.No.7 Remove duplicates from an array
// Anonymous function
let a=[1,2,3,4,5,4,1];
var b=[];
const Noduplicate=(e)=>{
    a.forEach((e)=>{
        if(!b.includes(e))
        {  b.push(e);}      
        })
        console.log(b);
}
Noduplicate(a);

// IIFE
((e)=>{
    var b=[];
    if(!b.includes(e))
        {  b.push(e);}       
})(a);
console.log(b);

// Output =[1,2,3,4,5]
