//Take the input from user
const num=parseInt(prompt("Enter the integer value:"))

if(num<0){
    console.log('Number should Positive value');
}
else if(num===0){
    console.log(`The factorial of ${num} is 1.`);
}
else{
    let factorialNum=1;
    for(var i=1;i<=num; i++){
        fact*=i
    }
    console.log(`The factorial of ${num} is ${factorialNum}`);
}