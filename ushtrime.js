//Ush1 Shkruaj nje funksion per te llogaritur shumen e dy numrave
//Menyra 1 Function Expression
let number1 = Math.round(Math.random()*10);
let number2 = Math.round(Math.random()*10);

let sum = function(number1,number2){
    return number1+number2;
}
console.log("Funksioni si first-class function i ruajtur ne nje variabel")
console.log(sum(number1,number2));

//Menyra 2 Funksion normal

function shuma (number1,number2){
    return number1+number2;
}
console.log("Funksion me sintakse normale")
console.log(shuma(number1,number2));

//Menyra 3 Arrow Functions'
console.log("Arrow function")
 let rezMbledhjes = (number1,number2)=> number1+number2;

console.log(rezMbledhjes(number1,number2));


//Ush2 Shkruaj nje program ne JavaScript qe gjen numrin maksimal ne nje vektor

let array = [1,2,3,4,6,10,5,8];
let maxValue = array[0];
let index = 1;

while(index<=array.length-1){
   if(array[index]>maxValue){
    maxValue = array[index]
   }
   index++;

}

console.log("Maximum value of the array is "+maxValue);

//Ush 3 Shkruaj nje program qe kontrollon nese nje stringe eshte nje palindrome

let stringToCheck = "ValslaV";
let isPalindrome = true;
let start = 0;
let end = stringToCheck.length-1;

while(start<end){
    if(stringToCheck.charAt(start)!==stringToCheck.charAt(end)){
        isPalindrome = false;
        break;
    }
    start++;
    end--;
}

console.log("A eshte stringa : "+stringToCheck+" nje palindrome? "+isPalindrome)

//Ush 4 Kthe mbrapsht nje stringe

let originalString = "Valsiana";
let reversedString ='';
let pointer = originalString.length-1;

while(pointer>=0){
    reversedString+= originalString.charAt(pointer);
    pointer--;
}

console.log("Stringa origjinale: "+ originalString);
console.log("Stringa e kthyer mbrapsht "+reversedString)

//Ush 5 Shkruaj nje funksion qe merr nje vektor me numra dhe kthen nje vektor te ri vetem me numrat cift

let originalArray = [4,5,6,7,8,9,3,"Hello","3",true,null,1,NaN];

let evenNumbersArray = [];

for(let index =0;index<originalArray.length;index++){
    if(isNaN(originalArray[index])|| originalArray[index]%2!==0){
        continue;
    }
    else{
        evenNumbersArray.push(originalArray[index])
    }
}
console.log("Vektori origjinal: "+originalArray);
console.log("Vektori vec me numrat cift: "+evenNumbersArray);

//Ush 6 Funksion qe llogarit faktorialin e nje numri te dhene

let number = Math.floor(Math.random()*10);
let factorial =1;
let times =1;

while(times<=number){
    factorial*=times;
    times++;
}

console.log("Faktoriali i numrit "+number+" eshte vlera "+factorial);

//Ush 7 Funksion qe kontrollon nese nje numer eshte nje numer i thjeshte

numberToCheck =2;
let isPrime = true;
function isPrimeNumber(number){
     for(let i=2;i<number/2;i++){
        if( number%i===0){
            isPrime = false;
            break;  
        }
     }
     return isPrime;
}

console.log(isPrimeNumber(numberToCheck));