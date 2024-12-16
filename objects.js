/**
Exercise 1: Create an Object Using an Object Literal
Create an object car with the following properties:

make (string)
model (string)
year (number) Log the car object to the console.
 */

let car = {
    make: "Make",
    model: "Model",
    year: 1999
}

/**
 * 
Exercise 2: Create an Object Using a Constructor Function
Write a constructor function Person that creates objects with the following properties:

firstName (string)
lastName (string)
age (number) Instantiate two objects (person1 and person2) and log them.
 */

let person = new Object(); // krijon nje objekt bosh
person.firstName = 'FirstName';
person.lastName = 'LastName'
person.age = 30

let person2 = { ...person,
    ...{
        firstName: "FirstName2",
        lastName: "LastName",
        age: 32
    }
}

console.log(person, person2)


/**
Exercise 3: Create an Object Using Object.create()
Create a base object animal with the following properties:

species (string)
legs (number) Use Object.create() to create an object cat that inherits from animal. 
Set its species to "cat" and legs to 4, then log it.
 */

const animal = {
    species: "cat",
    legs: 4
}

let dog = Object.create(animal)
dog.species = 'dog'

let cat = Object.create(animal)
let cat2 = Object.create(animal)

/**
 * 
 * 
Exercise 4: Add Properties to an Existing Object
Create an object laptop with the properties:

brand (string)
model (string)
Add the following properties dynamically:

price (number)
year (number) Log the updated object.


*/

let laptop = {
    brand: "Brand",
    "model": "Model",
}

laptop.price = 10;
laptop.year = 1999;



/***
 * 
Exercise 5: Extend an Object
Create an object employee with the properties:

name (string)
position (string)
Create another object manager that copies all properties from employee 
and adds a new property:

department (string) Log the manager object.
 */


let employee = {
    name: "Name Lastname",
    position: "Developer"
}

let manager = {
    ...employee
}

manager.department = 'IT'
console.log(manager)

/**
 * 
Exercise 6: Use Prototypes to Share Properties
Define a prototype object vehicle with the following properties:

type (string)
wheels (number)

Create a new object bike using the vehicle prototype and set 
its properties to "motorcycle" and 2. Log the bike object.

 */

const vehicle = {
    type: 'Vehicle',
    wheels: 4
}

let bike = Object.create(vehicle)
bike.type = 'motorcycle'
bike.wheels = 2

/**
 * 
 * 
Exercise 7: Loop Through Object Properties
Create an object movie with the following properties:

title (string)
director (string)
releaseYear (number)
Use a for...in loop to log all property names and values.


 */

let movie = {
    title: 'Title',
    director: 'Director',
    releaseYear: 1999
}

for(let prop in movie) {    
    console.log(`Name of property is : ${prop} and value is: "${movie[prop]}"`)
}

// Object.entries()
/**
    [
        [ 'title', 'Title' ],
        [ 'director', 'Director' ],
        [ 'releaseYear', 1999 ]
    ]
 */
for (let [key, value] of Object.entries(movie)) {
    console.log(`Name of property is : ${key} and value is: "${value}"`)
}

/**
Exercise 8: Merge Two Objects
Create two objects:

userInfo with properties name (string) and email (string)
userSettings with properties theme (string) and notifications (boolean)
Merge these objects into a new object userProfile and log it.


*/

let userInfo = {
    name: "Name",
    email: "email@email.com"
}

let userSettings = {
    theme: 'theme',
    notifications: true
}

let userProfile = {
    ...userInfo,
    ...userSettings
}

console.log(userProfile)


/**
Exercise 9: Check for a Property
Create an object student with the properties:

name (string)
age (number)
grade (string)
Write code to check if the property grade exists in the object and log the result.
 */

let student = {
    name: 'Name',
    age: 20,
    grade: 'A'
}

console.log('grade' in student)

/**
Create an object city with the following properties:

name (string)
population (number)
country (string)
Perform the following:

print all the properties
print all the values
print all key/value pairs
 */

let city = {
    name: 'City name',
    population: 1_000_999,
    country: "Country"
}

console.log(Reflect.ownKeys(city))
console.log(Object.keys(city))
console.log(Object.values(city))
console.log(Object.entries(city))

