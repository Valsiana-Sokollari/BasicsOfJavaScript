//Ush1 Shkruaj nje funksion ne JavaScript qe kontrollon nese inputi eshte nje string ose jo

let retrievedInput ="Hello";

function isString(input){
    if(typeof input =="string" ){
        return "Inputi i dhene eshte nje string";
    }
    else{
        return "Inputi i dhene nuk eshte nje string";
    }

}

console.log("Rezultati i funksionit isString: "+isString(retrievedInput));

//Ush2 Shkruaj nje funksion qe kontrollon nese stringu i dhene eshte bosh apo jo

function isBlank(string){
    return string?"Stringa nuk eshte bosh":"Stringa eshte bosh";
}

console.log("A eshte stringa e dhene bosh? "+isBlank(retrievedInput));

//Ush3 Shkruaj nje funksion qe ndan stringen dhe e konverton ate ne nje vektor fjalesh

let theStringToSplit = "My name is Valsiana.";

function splitTheString(string){
    let wordsOfString = string.split(" ");
    return wordsOfString;
}

console.log("Fjalet qe fjalia "+ theStringToSplit+" permban jane: "+ splitTheString(theStringToSplit));

//Ush4 Shkruaj nje funksion JavaScript qe ekstrakton nje numer te caktuar karakteresh nga stringa

let originalString = "Hello from me";

function extractCharacters(string, number){
    let characters;
    if(typeof string =="string" && number>0){
         characters = string.substring(0,number)
    }
    return characters;
}

console.log("Karakteret e vecuara nga stringa origjinale '"+ originalString +"' jane: "+ extractCharacters(originalString,5));

//Ush5 Shkruaj nje funksion qe e kthen stringen ne nje forme te shkurtuar

function abbreviate(string){
    if(string.length>0){
        let words;
        let abbreviatedResult ="";
        if(string.includes(" ")){
           words = string.split(" ");
           abbreviatedResult = words[0];
           for(let i=1;i<words.length;i++){
            abbreviatedResult += " "+ words[i].charAt(0);
           }
        }
        else{
            abbreviatedResult = string
        }
        return abbreviatedResult;
    }
else{
    return "Stringa eshte bosh"
}
}

console.log("Versioni i shkurtuar i stringes: "+ originalString+ " eshte "+ abbreviate(originalString));

//Ush 6 Shkruaj nje funksion ne JavaScript qe fsheh adresen e email per te parandaluar aksesin e paautorizuar

let emailAdress = "svalsiana@gmail.com";

function hideEmail(emailAdress){
    let emailParts = emailAdress.split("@");
    let secondParts = emailParts[1].split(".");
    let allParts = [];
    allParts.push(emailParts[0]);
    allParts.push(secondParts[0]);
    allParts.push(secondParts[1]);
    let hiddenEmail='';
    hiddenEmail+=".".repeat(allParts[0].length);
    hiddenEmail+="@"+allParts[1];
    hiddenEmail+="."+allParts[2];
    return hiddenEmail;
}

console.log(hideEmail(emailAdress));

//Ush7 Shkruaj nje funksion qe kapitalizon shkronjen e pare te cdo fjale ne string

let lowerCaseString = "i am worthy";
 
function capitalize(string){
    let words = string.split(" ");
    let capitalizedWords=[];
    let capitalizedString ='';
    for(let i=0;i<words.length;i++){
        let firstChar = words[i].charAt(0).toUpperCase();
        let capitalizedWord = firstChar+words[i].substring(1);
        capitalizedWords.push(capitalizedWord);
    }
    for(let i=0;i<capitalizedWords.length;i++){
        capitalizedString+=capitalizedWords[i]+" ";
    }
    return capitalizedString;
}

console.log("Stringa origjinale: "+ lowerCaseString);
console.log("Stringa ku cdo germe e pare eshte kapitale: "+ capitalize(lowerCaseString));