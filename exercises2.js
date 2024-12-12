

//Generate a number and find the sum of its digits

let randomNumber = Math.round(Math.random()*10_000);
sum=0;
console.log(randomNumber);


   while(randomNumber/10!=0){
    let modulus = randomNumber%10;
    sum+=modulus;
   randomNumber=(randomNumber -modulus)/10;
  

}
console.log(sum);

//Generate a number and control if it has two consecutive identical digits

let userNumber = Math.round(Math.random()*10_000);

console.log(userNumber);

while(userNumber/10!=0){
    let modulus =userNumber%10;
    let firstDigit = modulus;
    userNumber=(userNumber -modulus)/10;
    modulus =userNumber%10;
    let secondDigit = modulus;
    if(firstDigit===secondDigit){
        console.log("It has  "+firstDigit+" and "+secondDigit+" consecutive identical digits");
        break;
    }
    userNumber=(userNumber-modulus)/10;
  
}

if(userNumber/10==0){
    console.log("It doesn't have two consecutive identical digits")
}

//Alternative way -using strings

userNumber =Math.round(Math.random()*10_000);
userNumber = new String(userNumber);
let hasEqualNumbers=false;
console.log(+userNumber);
for(let i=0;i<userNumber.length;i++){
    if(userNumber.charAt(i)===userNumber.charAt(i+1)){
      console.log("It has "+userNumber.charAt(i)+ " and "+ userNumber.charAt(i+1)+ "consecutive identical digits")
      hasEqualNumbers=true;
      break;
    }
}
if(hasEqualNumbers===false){


    console.log("It doesn't have 2 consecutive identical digits")
}
//Find if a number is a prime number

let number=  Math.round(Math.random()*10_000);
console.log("Number to check: "+number)
let isPrimeNumber = true;
 
for(let i=2;i<Math.floor(number/2);i++){
    if(number%i===0){
        console.log("Number is not prime number");
        isPrimeNumber = false;
        break;
    }
}

if(isPrimeNumber){
    console.log("Number is prime number")
}

//Generate the terms of the Fibonacci series for N =6
let termNumber = 6;
let firstTerm =0;
let secondTerm = 1;
let actualTerm = firstTerm + secondTerm;
let result= `${firstTerm} , ${secondTerm}, ${actualTerm},`;
let index =3;

while(index<termNumber){
     firstTerm = secondTerm;
     secondTerm= actualTerm;
     actualTerm =firstTerm+ secondTerm;
     result+=`${actualTerm} ,`
     index++;
}
console.log(result);

//Check if a number is palindrome

let numberToCheck = 127321;
let isPalindrome = true;

numberToCheck = new String(numberToCheck);
let middle = numberToCheck.length/2;
let start = 0
let end = numberToCheck.length-1;

while(start<middle){
    if(numberToCheck.charAt(start++)!==numberToCheck.charAt(end--)){
        isPalindrome = false;
        break;
    }

}
if(isPalindrome){
    console.log("Numri eshte nje palindrome")
}
else{
    console.log("Numri nuk eshte nje palindrome")
}

