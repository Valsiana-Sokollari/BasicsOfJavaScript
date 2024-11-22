//Ush1
const STUDENTS=30;

for(let i=1;i<=STUDENTS;i++){
    let nota = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    if(nota >9){
        console.log("Nxenesi "+i+" eshte nje nxenes i nivelit Ekselent")
    }
    else if(nota>7 && nota <9){
        console.log("Nxenesi "+i+" eshte nje nxenes i nivelit Mesatar")
    }
    else
        console.log("Nxenesi "+i+" eshte nje nxenes i nivelit te dobet")
}

//Ush2
let n =6
 for (let i=1;i<=n ;i++){
    let stars='';
    for(let j =1;j<=i;j++){
       stars+="*";
    }
    console.log(stars);
 }
//Menyra 2
for(let i=0;i<n;i++){
   let str='*'.repeat(i+1);
   console.log(str);
}
 console.log();
 //Ush3
 n=5;

 for(let i=1;i<=n;i++){
    let stars='';
    for(let j=n;j>=i;j--){
        stars+="*";
    }
    console.log(stars)
 }

 //Menyra 2
 for(let i=0 ;i<n;i++){
   let str='*'.repeat(n-i);
   console.log(str);
 }

console.log();
//Ush4
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
//Menyra 2
for(let i=0;i<n;i++){
   let str =' '.repeat(n-i-1) + "*".repeat(2*i+1);
   console.log(str)
}
//Ush5
console.log("Rombi")
let numberOfRows=5;
let result='';
 for(let actualRow =1;actualRow<numberOfRows;actualRow++){
      result+=" ".repeat(numberOfRows-actualRow)+"*".repeat(2*actualRow-1)+"\n";
 }
 for (let actualRow = numberOfRows - 1; actualRow >= 1; actualRow--) {
   result += " ".repeat(numberOfRows - actualRow) + "*".repeat(2 * actualRow - 1) + "\n";
}

console.log(result);

//Menyra 2
for(let I=0;i<numberOfRows;I++){
   let str = ' '.repeat(numberOfRows)
}

//Ush 6
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

//Menyra 2
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

//Ush 7
console.log("Romb i zbrazet")
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