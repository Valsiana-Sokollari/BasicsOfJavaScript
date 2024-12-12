//Write a JavaScript function that checks whether the input is a string or not.

let retrievedInput ="Hello";

function isString(input){
    if(typeof input =="string" ){
        return "Given input is a string";
    }
    else{
        return "Given input is not a string";
    }

}

console.log("Result of function isString: "+isString(retrievedInput));

//Write a function that checks whether the given string is empty or not.

function isBlank(string){
    return string?"String is not empty":"String is empty";
}

console.log("Is the given string an empty string? "+isBlank(retrievedInput));

//Write a function that splits the string and converts it into an array of words.

let theStringToSplit = "My name is Valsiana.";

function splitTheString(string){
    let wordsOfString = string.split(" ");
    return wordsOfString;
}

console.log("Words that the phrase "+ theStringToSplit+"contains are "+ splitTheString(theStringToSplit));

//Write a JavaScript function that extracts a specified number of characters from a string.

let originalString = "Hello from me";

function extractCharacters(string, number){
    let characters;
    if(typeof string =="string" && number>0){
         characters = string.substring(0,number)
    }
    return characters;
}

console.log("Characters taken from the original string '"+ originalString +"' are: "+ extractCharacters(originalString,5));

//Write a function that returns a string in a shortened form

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
    return "String is empty"
}
}

console.log("Abbreviatd form of string "+ originalString+ " is "+ abbreviate(originalString));

//Write a JavaScript function that hides the email address to prevent unauthorized access.

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

//Write a function that capitalizes the first letter of each word in a string.

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

console.log("Original string: "+ lowerCaseString);
console.log("String where the first letter is capitalized: "+ capitalize(lowerCaseString));

//Write a JavaScript function that takes as a parameter a string containing both lowercase and uppercase letters and 
// converts lowercase letters to uppercase and uppercase letters to lowercase.
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

console.log("Inverted version of string: "+originalString+" is "+invertCase(originalString));

//Write a function that converts a string to camelCase

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

console.log("camelCase version of string: "+ originalString+ " is: "+ camelize(originalString));

//Write a function that inserts a string into a string at a specific position. By default the position is 1
let mainString = "My name is Valsiana";
let nestedString = "Sokollari";

function insertString(mainString,nestedString,pozition){
     let part1 = mainString.substring(0,pozition);
     let part2 = mainString.substring(pozition);

     let result = part1+nestedString+part2;
     return result;

}

console.log("String: "+mainString+" after attaching the string: "+nestedString+" is"+ insertString(mainString,nestedString,11));

//Write a JavaScript function that formats a number into a human-readable string
//E.g. 1st 2nd 43rd
//Regularly numbers ending in 1 get st
//numbers ending in 2 get nd
//Numbers ending in 3 get rd
//Except 11 12 and 13 are exceptions as they get th and all other numbers get th
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

console.log("Number: "+number+" formatted is: "+formatNumber(number));

//Write a function in JS to truncate a string if it is longer
//than a specific number of characters. The truncated strings will end with the characters ...
//by default but if the character is specified it will end with that character

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

console.log("Shortened string is: "+truncateString(stringToTruncate,5,"&"));

//Write a function that splits a string into parts of a given length. If the length is not given, the string is not split into parts.

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

console.log("Splitted string is: "+ chunkString(stringToChunk,2));

// Write a function in JS that counts the number of substrings in a string

originalString="The quick brown fox jumps over the lazy dog"

function countSubStrings(string, substring) {
    let count = 0;
    let index = string.toLowerCase().indexOf(substring.toLowerCase()); // Control for substring case-insensitive
    while (index !== -1) {
        count++;
        index = string.toLowerCase().indexOf(substring.toLowerCase(), index + substring.length);
    }
    return count;
}


let 
substring = "the";

console.log("Number of times that substring \"" + substring + 
            "\" is in on the main string: \"" + originalString + "\" is: " + 
            countSubStrings(originalString, substring));

