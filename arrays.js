//1- Find sum of elements in an array
let array =[1,2,3,4,5];
let sum =0;
for(let element of array){
    sum+=element;
}
console.log("Sum of array: "+sum);

// reduce
sum = 0;
sum = array.reduce((nr1, nr2) => nr1 + nr2, sum)
console.log(`Sum of array: ${sum}`);


// 2_ Reverse elements of an array
console.log(array.reverse());



// 3- Filter even numbers of an array

let filteredArray = array.filter((element)=> element%2==0);
console.log(filteredArray);


// 4-Find the numbers of times an element is found in an array
let originalArray = [1, 2, 2, 2, 3, 4, 10]
/**
 * {    
 *  1: {
 *      count: 1 
 *  },
 *  2: {
 *      count: 3
 *  }
 * }
 */
let countArray = {}

for (let number of originalArray) {
    countArray[number] = {
        count: number in countArray ? countArray[number]['count']++ : 0
    }
}

console.log(countArray)

//Second solution with arrays

// let countArray =new Array(Math.max(...originalArray)+1);
// countArray.fill(0);

// for(let el of originalArray){
//     countArray[el]++;
// }

// for(let [key, value] of countArray.entries()){
//     console.log(`Elementi ${key} gjendet ${value} here`)
// }


//5- Find maximum element in an array
let maximumValue=array[0]
for (let i=1;i<array.length;i++){
  if(array[i]>maximumValue)
    maximumValue=array[i]
}
console.log(maximumValue);
console.log(Math.max(...array))

// 6- Remove dublicate items in an array

array = [1, 1, 2, 2, 3, 3, 4, 4, 5]
let uniqueArray = [];
for (let i=0;i<array.length;i++){
    if(array.indexOf(array[i], i + 1) === -1)
      uniqueArray.push(array[i])
  }
  console.log(uniqueArray);

console.log(Array.from(new Set(array)))

/**
 * 7-Rotate an array for a given index

    Shembull:

    arr = [1, 2, 3, 4]
    n = 3
    output: [2, 3, 4, 1]
*/

let arr = [1, 2, 5, 3, 4]
let n = 3
let copiedArray =[...arr.slice(arr.length - n), ...arr.slice(0, arr.length - n)];
console.log(copiedArray)

/**
 * 8- Control if an array is palindrome
 * ivi
 */
let palindrome = [...'jjjtjjj']
let middle = Math.floor(palindrome.length/2);

let isPalindrome = true;

for(let i = 0, j = palindrome.length - 1; i < middle; i++, j--){
    if(palindrome[i] !== palindrome[j])
        isPalindrome = false
}

console.log(isPalindrome)

// 9- Merge and sort 2 arrays

//     Shembull:

//         [1, 2, 4] dhe [2, 5] 

//         output: [1, 2, 3, 4, 5]

let array1 =[1,2,4];
let array2 = [1,2,3,4,5, 10];

let sortedArray = array1.concat(array2).sort((num1,num2)=> num1-num2)
console.log(sortedArray)

/**
 * 10- Find numbers that are absent in an array

    [1, 2, 4, 6]

    output: [3, 5]
 */

let exampleArray = [1, 10, 10, 100];
let minimumOfArray = Math.min(...exampleArray);
let maximumOfArray =Math.max(...exampleArray);
let result =[];

for(let i=minimumOfArray;i<maximumOfArray;i++){
    if(exampleArray.indexOf(i)===-1)
        result.push(i)
}

console.log("Result: "+ result)