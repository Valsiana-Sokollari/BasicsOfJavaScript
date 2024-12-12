//Generate a number N (1-100)  and print the first N numbers that are odd numbers
/**
 * If N=4
 * 1,3,5,7
 * If N=5
 * 1,3,5,7,9
 * If N=6
 * 1,3,5,7,9,11
 * Rule: We need to iterate 2*N -1 times
 */
let N = Math.floor(Math.random()*100 +1);
console.log(`First ${N} odd numbers:`)
for (let number=1;number<2*N ;number++){
   if(number%2!==0){
      console.log(number)
   }
}
/**
 * Generate random numbers (0-100) until a value of 0 is generated. Find the greatest number among them
 * 
 */

let randomNumber =Math.floor(Math.random()*101);
let maximum = randomNumber;
while(randomNumber!=0){
   randomNumber= Math.floor(Math.random()*101);
  if(randomNumber>maximum)
   maximum = randomNumber;
}
console.log("Maximum of generated numbers: "+maximum);
/**
 * Generate a number N and find the sum of first N natural numbers
 * n=3 1+2+3
 * n=4 1+2+3+4
 */

let number = Math.floor(Math.random()*100)
let sum =0;
for (let no =1;no<=number ;no++){
   sum+=no;
}

console.log(`Sum of first ${number} numbers is: ${sum}`)

/**
 * Find the multiplication of 2 values without using the multiplication operator
 */
let number1 =5;
let number2 = 6;

numberOfTimes = Math.min(number1,number2);
numberToSum = numberOfTimes===number1?number2:number1
let multiplication =0
for(let index =0;index<numberOfTimes;index++){
 multiplication +=numberToSum;
}

console.log("The result of multiplication of "+number1+" and "+number2+" is "+multiplication)
/**
 * Generate N numbers. Find the average of 2digit numbers that are divisible by 13
 * 
 */
N =Math.floor(Math.random()*100)
let numbers = new Array(N);

for(let index=0;index<numbers.length;index++){
   numbers[index]=Math.floor(Math.random()*100)
}
console.log("Numbers:" +numbers)
let divisibleBy13 = [];
for(let index =0;index<numbers.length;index++){
   if(numbers[index]%13===0 &&(numbers[index] >= 10 && numbers[index] <= 99) )
      divisibleBy13.push(numbers[index])
}
console.log("Numbers that are divisible by 13: "+divisibleBy13)
let sumOfdivisibleBy13 =0;
for(let element of divisibleBy13){
   sumOfdivisibleBy13+=element;
}
let average = sumOfdivisibleBy13/divisibleBy13.length;
console.log("The average of numbers that are divisible by 13 is: "+average);
/**
 * Generate numbers until their sum surpasses the value of 100. Print how many numbers are read to meet this value
 */
let sumUntil100 =0;
let countNumbersTill100 =0
while(sumUntil100<=100){
   let number = Math.floor(Math.random()*10)
   sumUntil100+=number;
   countNumbersTill100++;
}
   console.log(`${countNumbersTill100} numbers are read until their sum surpasses 100`)
/**
 * Perform a test on a class of 30 students.
At the end of each test, generate a grade for the student, and check his
level.

The levels are:

- Excellent (average grade > 9)

- Average (average grade [7-9])

- Poor (average grade < 6)

At the end of each test, a message will be printed:

'Student [number] is a student of level [level].
 */
const STUDENTS=30;

for(let i=1;i<=STUDENTS;i++){
    let nota = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    if(nota >9){
        console.log("Student "+i+" is a student of excellent level")
    }
    else if(nota>7 && nota <9){
        console.log("Student "+i+"is a student of average level ")
    }
    else
        console.log("Student "+i+" is a student of poor level")
}
/**
 * Create the following figures for a given number of 'n' rows.
Use loops.
 */

/**
 *  *
    **
    ***
    ****
    *****
    ******

 */
let n =6
 for (let i=1;i<=n ;i++){
    let stars='';
    for(let j =1;j<=i;j++){
       stars+="*";
    }
    console.log(stars);
 }
//Alternative way
for(let i=0;i<n;i++){
   let str='*'.repeat(i+1);
   console.log(str);
}
 console.log();

 /**
   ******
   ****
   ***
   **
   *
  */
 n=5;

 for(let i=1;i<=n;i++){
    let stars='';
    for(let j=n;j>=i;j--){
        stars+="*";
    }
    console.log(stars)
 }

 //Alternative way
 for(let i=0 ;i<n;i++){
   let str='*'.repeat(n-i);
   console.log(str);
 }

console.log();

/**
 * 
 *  *
   ***
  *****
 *******
*********

 */
n=5
for(let i=1;i<=n;i++){
    let string ='';
   for(let j=1;j<n*2;j++){
     if(j>(n-i)&&j<(n+i)){
        string+="*";
     }
     else{
     string+=" "
     }
   }
   console.log(string)
}
console.log();
n=5
//Alternative way
for(let i=0;i<n;i++){
   let str =' '.repeat(n-i-1) + "*".repeat(2*i+1);
   console.log(str)
}

/**
 *  *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

 */
console.log("Rhombus")
let numberOfRows=5;
let result='';
 for(let actualRow =1;actualRow<numberOfRows;actualRow++){
      result+=" ".repeat(numberOfRows-actualRow)+"*".repeat(2*actualRow-1)+"\n";
 }
 for (let actualRow = numberOfRows - 1; actualRow >= 1; actualRow--) {
   result += " ".repeat(numberOfRows - actualRow) + "*".repeat(2 * actualRow - 1) + "\n";
}

console.log(result);

/**
 * 
*****
*   *
*   *
*   *
*****

 * 
 */
n=5
for(let i=1;i<=n;i++){
   let string='';
   for(let j=1;j<=n;j++){
      if(i==1||i==5){
         string+="*"
      }

      else{
         if(j==1||j==n){
         string+='*';
      }
      else{
         string+=" "
      }
      }
      
   }
   console.log(string);
}

//Alternative way
for(let i=0;i<n;i++){
   let str='';
   if(i==0||i==n-1){
      str="*".repeat(n);
   }
   else{
      str="*"+" ".repeat(n-2)+"*"
   }
   console.log(str)
}

/**
 *  *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

 */
console.log("Empty rhombus")
for (let i = 1; i <= n; i++) {
   let spacesOutside = " ".repeat(n - i);
   let spacesInside = i === 1 ? "" : " ".repeat(2 * i - 3);
   result += spacesOutside + "*" + (i > 1 ? spacesInside + "*" : "") + "\n";
}

for (let i = n - 1; i >= 1; i--) {
   let spacesOutside = " ".repeat(n - i);
   let spacesInside = i === 1 ? "" : " ".repeat(2 * i - 3);
   result += spacesOutside + "*" + (i > 1 ? spacesInside + "*" : "") + "\n";
}

console.log(result);