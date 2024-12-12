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

//Ush 8 Shkruaj nje funksion ne JavaScript qe merr si parameter nje stringe qe permban edhe shkronja 
//te vogla edhe te medha dhe konverton shkronjat e vogla ne te medha dhe ato te medha ne te vogla

originalString = "AbdFGhjkR";

function invertCase(string){
    let invertedString='';
    for(let index =0;index<string.length;index++){
        if(string.charAt(index) ==string.charAt(index).toUpperCase()){
            invertedString+=string.charAt(index).toLowerCase()
        }
        else{
            invertedString+=string.charAt(index).toUpperCase()
        }
    }
    return invertedString;
}

console.log("Versioni i invertuar i stringes: "+originalString+" eshte "+invertCase(originalString));

//Ush9 Shkruaj nje funksion qe e konverton nje stringe ne camelCase

originalString = "I am valuable no matter what"

function camelize(string){
    let words = string.split(" ");
    let capitalizedWord='';
    let camelizedVersion='';
    for(let i=0;i<words.length;i++){
        let firstLetter = words[i].charAt(0);
        if(firstLetter==firstLetter.toLowerCase()){
            firstLetter = firstLetter.toUpperCase();
        }
       

        capitalizedWord = firstLetter+words[i].substring(1);
        
        camelizedVersion+=capitalizedWord;
    }

    return camelizedVersion;
}

console.log("Versioni camelCase i stringut: "+ originalString+ " eshte: "+ camelize(originalString));

//Ush10 Shkruaj nje funksion qe vendos nje stringe brenda nje stringu ne nje pozicion te caktuar. By default pozicioni eshte 1
// Pyetje : Si ta kontrollojme nese nje argument mungon apo jo?
let mainString = "My name is Valsiana";
let nestedString = "Sokollari";

function insertString(mainString,nestedString,pozition){
     let part1 = mainString.substring(0,pozition);
     let part2 = mainString.substring(pozition);

     let result = part1+nestedString+part2;
     return result;

}

console.log("Stringa: "+mainString+" pas nderthurjes me "+nestedString+" eshte "+ insertString(mainString,nestedString,11));

//Ush11 Shkruaj nje funksion ne JavaScript qe formaton nje numer ne nje stringe te lexueshem nga syri njerezor
//P.sh 1st 2nd 43rd
//Rregulli numrat qe mbarojne me 1 marrin st
//numrat qe mbarojne me 2 marrin nd
//Numrat qe mbarojne me 3 marrin rd
//Vec 11 12 dhe 13 bejne perjashtim pasi marrin th dhe gjithe numrat e tjere marrin th

let number = 56;

function formatNumber(number){
    let formattedNumber;
    if(number===11||number===12||number===13){
        formattedNumber=number+="th"
    }
    else {
        stringVersion = new String(number);
        if(stringVersion.charAt(stringVersion.length-1)==="1")
            formattedNumber= number+"st"
        else if(stringVersion.charAt(stringVersion.length-1)==="2")
            formattedNumber= number+"nd"
         else if(stringVersion.charAt(stringVersion.length-1)==="3")
            formattedNumber= number+"rd"
        else
            formattedNumber= number+"th"
    }

    return formattedNumber;
}

console.log("Numri: "+number+" i formatuar eshte: "+formatNumber(number));

//Ush12 Shkruaj nje funksion ne JS per te shkurtuar nje stringe nese eshte me e gjate 
//se nje numer specifik karakteresh. Stringat e shkurtuara do te mbarojne me karakteret ...
//by default por nese karakteri specifikohet do te mbaroje me ate karakter

let stringToTruncate ="I am learning JavaScript";

function truncateString(string,number,character){
    let truncatedString='';
    if(string.length<number){
        truncatedString=string
    }
    else if(character===undefined){
        truncatedString = string.substring(0,number)+"..."
    }
    else {
        truncatedString=string.substring(0,number)+character?.repeat(3)
    }

    return truncatedString;

}

console.log("Stringa e shkurtuar eshte: "+truncateString(stringToTruncate,5,"&"));

//Ush13 Shkruaj nje funksion qe ndan nje stringe neper pjese me gjatesi te dhene. Nese gjatesia
//nuk jepet stringa nuk ndahet ne nenpjese

let stringToChunk = "I am writing some code in JS"

function chunkString(string,length){
    let resultedChunks =[];
    if(length===0){
        resultedChunks.push(string)
    }
    else {
         let index =0
         while(index<string.length){
            resultedChunks.push(string.substring(index,index+length))
            index+=length
         }
    }
    return resultedChunks;

}

console.log("Stringa e ndare eshte: "+ chunkString(stringToChunk,2));

//Ush14 Shkruaj nje funksion ne JS qe numeron numrin e substringave ne nje stringe

originalString="The quick brown fox jumps over the lazy dog"

function countSubStrings(string, substring) {
    let count = 0;
    let index = string.toLowerCase().indexOf(substring.toLowerCase()); // Kontroll për substring case-insensitive
    while (index !== -1) {
        count++;
        index = string.toLowerCase().indexOf(substring.toLowerCase(), index + substring.length);
    }
    return count;
}


let 
substring = "the";

console.log("Numri i herëve që substringa \"" + substring + 
            "\" shfaqet në stringun \"" + originalString + "\" është: " + 
            countSubStrings(originalString, substring));

//Ush15 Shkruaj nje funksion qe merr si argument nje numer te plote pozitiv,
//kthen mbrapsht prezantimin e ketij numri ne binar dhe perfundimisht kthen 
//vleren decimale te versionit binar

console.log(+"10"+ +"20");

