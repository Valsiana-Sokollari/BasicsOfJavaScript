//Declare a variable age that holds a value of 25
let age=25;
//Declare a variable name that has a value of Alex
let name='Alex';
//Declare two variables and print the sum of these two variables
let x=10,y=20;
console.log("Sum: "+(x+y)); //30
//Declare a variable named total and add 5 
let total=10;
total = total+5;
console.log("Result of total: "+total);//15
//Print your surname
surname = 'Sokollari';
console.log("Surname:" +mbiemri)

/** 
 * The difference between const and  let in JavaScript is that const is a keyword used to declare constants
 * whereas let is a keyword used to declare variables in a script. Both are block
 * scoped variables.
 */
//Declare a variable named color and initialize it. Then update the value of this variable
let color = "blue";
color = "red";
console.log("Color: "+color);   //red

//Declare three variables named city, state and population in a single row 
let city="Tirana", state="Shqiperia", population=450000;
const PI = 3.14;
//The value of the PI constant cannot be changed cause it is declared using const keyword 
//  Example: const school;
//           school = "Green High";
//The code above generates an Error cause constants need to be initialized at the moment of declaration
//Find and print the data type of a variable that holds the temperature
let temperature =72; //typeof temperatura do te jete 'number'
console.log("Temperature "+ typeof temperature);
//Declare a variable that holds if the user is active and find its data type
let isActive = true; //typeof isActive is 'boolean'
console.log("Data type of isAcive "+ typeof isActive )
//What is the data type of a string literal
console.log("Data type of this string literl is: "+typeof "Pershendetje") //'string'
//Declare a variable that holds a floating point number
let floatingPointNumber = 5.2;
//Find typeof typeof 45
console.log("Ush 16 "+typeof typeof 45); //string
//Declare a variable that holds a boolean value
let a = true;
//What is typeof null
console.log("Ush 18 "+typeof null); //null is an object whereas undefined is a constant of the language
//What is the data type of 5+ '10'
let resultOfAddition= 5 +'10';//'5' do te konvertohet ne string dhe rezultati do te jete '510'
console.log("Result: "+typeof resultOfAddition);//dhe typeof rezultati do te jete nje string
/**
 * List all the data types that JavaScript supports
 * Primitive : 1. number
 *             2. string
 *             3. boolean
 *             4. null
 *             5. undefined
 * Objects :   1. Functions
 *             2. Arrays
 *             3. Literal Objects  etc
 */
//what is the result of 10 + 5*2.
console.log("Ush 21"+ (10 + 5*2)); //20  * OPERATOR IS OF A HIGHER PRECEDENCE THAN + OPERATOR
// what is the role of modulus operator: The modulus operator calculates the remainder of dividing the first operand by the second operand. 
//Example
console.log("Modulus of 10 divided by 4: "+(10%4)); //2
//Give an example where we can use += 
let u=5;
u+=3
console.log("The value of u after addition:  "+u); //8
//Use the ternary operator ?;
let d=6, w=5;
let result = (d>w)?true:false;
console.log("Ush 24 "+result)
//Give with an example the diference between equality and strict equality in JavaScript
console.log("Ush 25 5=='5' "+(5=='5')); //  true cause the == operator checks only the values but not the data types of operands 
console.log("Ush 25 5==='5' "+(5==='5'))//false cause the === operator checks the value and the data types of operands

//What is the result of 5<=10 
console.log("Ush 26 "+(5<=10)); //Relational operators always gives a boolean result

//U 27 - Error
let number=8;
 number = number -1; 
 console.log(" exercise 27: number-1 "+number);

 console.log("Preincrement and postincrement");
 console.log(x);
console.log(++x); //U 28 Preinkrement: We add 1 to the variable then the value is printed://11
console.log(x++) //Postincremet: The value is printed and then we add 1 to it : It is printed the existing value: 11 and then the value of x is 12
//Use the shorthand *= operator
let z=4;
z*=2;
console.log("The result of shorthand operator"+z); //8
//Use the ** operator to calculate 3^2 
console.log("Result: "+(3**2))//9 
//Calculate the sum of two variables
a=6;
let b =6;
let shuma = a + b;
console.log("Ush 31 "+shuma);
//What is the esult of "Result:" +100
let result1= "Rezultati:" +100; // The + operator in this case is used to concatenate two strings. The number is converted to a string value and then two strings are concatenated
  console.log("The result: "+result1)                               
                                   
let word= "Pershendetje";
number=3;
console.log("The result of concatenation"+word+number); //"Pershendetje3"

//What is the result of 4*(3+2)
console.log("");
console.log(4*(3+2))// The expression inside the brackets is performed first then the multiplication
//What is teh result of a number divided by 0
let totali =10;
console.log("Ush 35 "+totali/0); //Infinity cause we are dividing a large number by an extremely small number. If the total were a negative number the output would be -Infinity
//Give an example where we use - operator
let difference= number-5; //-2
console.log("Difference "+difference);
//What is the datatype of 5+"5"
console.log(typeof(5+"5")); //Returns string cause 5  is converted to string and the total result is "55" whose datatype is string
//When we use + oeprator with a number and a string operand, the string always takes precedence

//let v =10;
//v=v+1;
let v =10;
v=v+1;
console.log("The value of the variable after incrementing it by 1: "+v);
//What is the result of 3*"5"
console.log(); //15  The * operator requires both operands to be numbers. "5" is converted to a number automatically (it is convertible because the string starts with a number).
// Ex 41
let m =3, n=6, o=5;
m=n;
n=o;
console.log("Exercise number 41")
console.log(m+", "+n+", "+o)
//Exercise 42
let price=100;
price-=20;
console.log("Exercise 42 "+price);
//Ex 43
let points = "10" -3; //The - operator requires both operands to be numbers. "10" is convertible to a number and returns 10. So the result is
                     // 10-3=7
console.log("Ex 43 " +points);                  
// Use + operator when one of the operands is a number and the other of a boolean data type
let res = true+5;  //true will be converted to the value 1 and res=1+5 will be 6
console.log("Result of ex 43: "+ res)
//Divide a number by a string
console.log(10/"2"); //
console.log(typeof (10/"2"))//NaN
//Calculate the surface area of ​​a rectangle
let length = 4;
let width= 5;
let area = width* length;
console.log("Ex 46: "+area);
//u 47
let number1 =5;
number1*=4;
console.log("Ex 47 "+ number)
//The difference between x=x+1 and x+=1 is only in the shorthand operator used in the second case. But both increase the value of the variable x by 1.
//What is the result of 2+null
console.log("U 49 "+(2+null))//2+0 =2
console.log(typeof(2+null)) //'number'
//Print adult if age is greater than 18 and child if it is less than 18
let myAge=21;
let status = myAge>18?"Adult":"Child";
console.log("Result of age:  "+ status)
//Ex 51
let t="5" +3 +2; //"53"+2="532"
console.log("Result of exercise 51: "+t);  //"532"
// Exercise 52
let c = 10-"5"; //10-5=5
console.log("Ex 52"+c); //5

//Claculate the expression  2+3+"7"
let p = 2+3+"7"
console.log("Result: "+p); //5+"7" ="57"

//Are 5 and "5" equal?
let i =5;
let j="5";
console.log("Ush 54 "+(i==j)); //true cause 5 =="5" returns true since it only compares values ​​and not data types

let r = null;
console.log("Ush 55 "+(typeof r)); //'object' since null itself is an object

//U 56 l ne vend te x

let l = 0.1 + 0.2;
console.log("Ush 56")
console.log(l==0.3) // false cause in operations with floating point numebrs the exact value is never obtained
                    // So when we want to work with floating point numbers we must convert them back to
                    // whole numbers and then do the operations and then convert them back to floating point numbers so that the result is what we want or expect
//Ex 57
let num = "5";
console.log("Ex 57 "+num*2); //"5" is converted to 5 and the result of the expression is 10
//What is the data type of NaN?
console.log(typeof NaN) // 'number'
// Calculate "Hello" + null
let g = "Hello" + null;
console.log("Result "+g); // null is converted to a string and the result is "Hellonull"
// Ex 60
let q =5;
console.log(q++ +  ++q); //5+ 7 =12 Both preincrement and postincrement are done before addition

// Ex 61
let e = "10";
console.log("Ex 61")
console.log(-e); // -10

//Ex 62
let ab = 1 + "2" + 3;
console.log("Ex 62 result:  "+ab);  //ab="12" + 3= "123"
//Ex 63
let ac;
console.log("Ex 63")
console.log(ac+5) // ac's value is undefined since it is a new uninitialized variable
//undefined is not convertible to a number and the result
// will ultimately be NaN

//Calculate true+false
console.log(true+false) // 1 cause true is converted to 1 and false to 0.

//Ex 65
let Number = "10" -5 + "5";
console.log("Result: "+Numer); // 10 - 5 = 5 Then 5 + "5" will give "55"

// Ex 66

let f = null;
let h = undefined;
console.log("Ex 66");
console.log(f == h) //true cause null and undefined are considered equal

//Ex 67
console.log(typeof typeof 1); //"string"

// Ex 68

console.log("5" * "4");//Both operands are converted to numbers. Strings in these case are convertible to numbers
//5 * 4 = 20

//Ex 69
let _x = 5 + true;
console.log("Result:"+_x); // true is converted to number . true =1 so the result is 6

//Ex 70

let _b="5";
console.log(++_b); //_b is converted to number. _b is 5. Preincrement is done before printing the value so 6 is printed.

