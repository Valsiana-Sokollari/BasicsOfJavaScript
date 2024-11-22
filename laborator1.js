//Ush 7
let sum=0;
let count=0;
while(sum<100){
    sum+=Math.round(Math.random()*15)+5;
    count++;

}
console.log("Numri i numrave qe kane shumen 100 "+count);

//Ush8

let randomNumber = Math.round(Math.random()*10_000);
sum=0;
console.log(randomNumber);


   while(randomNumber/10!=0){
    let modulus = randomNumber%10;
    sum+=modulus;
   randomNumber=(randomNumber -modulus)/10;
  

}
console.log(sum);

//Ush 9

let numriPerdoruesit = Math.round(Math.random()*10_000);

console.log("U 9")
console.log(numriPerdoruesit);

while(numriPerdoruesit/10!=0){
    let modulus =numriPerdoruesit%10;
    let shifra1 = modulus;
    numriPerdoruesit=(numriPerdoruesit -modulus)/10;
    modulus =numriPerdoruesit%10;
    let shifra2 = modulus;
    if(shifra1===shifra2){
        console.log("Ka "+shifra1+" dhe "+shifra2+" numra te njepasnjeshem");
        break;
    }
    numriPerdoruesit=(numriPerdoruesit-modulus)/10;
  
}

if(numriPerdoruesit/10==0){
    console.log("Nuk ka numra te njepasnjeshem")
}

//Zgjidhja 2 me stringa
console.log("Zgjidhja e dyte permes perdorimit te stringave")
numriPerdoruesit =Math.round(Math.random()*10_000);
numriPerdoruesit = new String(numriPerdoruesit);
let hasEqualNumbers=false;
console.log(+numriPerdoruesit);
for(let i=0;i<numriPerdoruesit.length;i++){
    if(numriPerdoruesit.charAt(i)===numriPerdoruesit.charAt(i+1)){
      console.log("Ka shifrat "+numriPerdoruesit.charAt(i)+ " dhe "+ numriPerdoruesit.charAt(i+1)+ "te njepasnjeshme te barabarta")
      hasEqualNumbers=true;
      break;
    }
}
if(hasEqualNumbers===false){


    console.log("Nuk ka numra te njejte te njepasnjeshem")
}
//Ush 10 - Gjej nese nje numer eshte numer i thjeshte

let number=  Math.round(Math.random()*10_000);
console.log("Numri qe do shihet a eshte apo jo nje numer i thjeshte "+number)
let isPrimeNumber = true;
 
for(let i=2;i<Math.floor(number/2);i++){
    if(number%i===0){
        console.log("Numri nuk eshte nje numer i thjeshte");
        isPrimeNumber = false;
        break;
    }
}

if(isPrimeNumber){
    console.log("Numri eshte nje numer i thjeshte")
}

//Ush 11
let numriTermit = 6;
let termiIPare =0;
let termiIDyte = 1;
let termiAktual = termiIPare + termiIDyte;
let rezultati = `${termiIPare} , ${termiIDyte}, ${termiAktual},`;
let index =3;

while(index<numriTermit){
     termiIPare = termiIDyte;
     termiIDyte = termiAktual;
     termiAktual = termiIPare+ termiIDyte;
     rezultati+=`${termiAktual} ,`
     index++;
}
console.log(rezultati);

//Ush 12

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

//Ush 13

let numberOfRows = 4;
let hapsira = '';
let rreshtiStr ='';
let k=1;
for (let rreshti =1; rreshti<=numberOfRows;rreshti++){
     hapsira = hapsira.repeat(numberOfRows-rreshti)
     for(;k!=rreshti;k++){
        rreshtiStr+=k;
     }
}