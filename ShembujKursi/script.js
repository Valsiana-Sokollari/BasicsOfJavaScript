
console.log(2 == 3) // false
console.log(2 == '2') // true
console.log(2 === '2') // false

console.log(2 === '4' / 2) // true


console.log('a' < 'A') // bazohet ne renditjen e shkronjave ne Unicode


console.log(1 && 0 && 2) // 0
console.log(1 || 0 || -1) // 1
console.log(2 && 3 && 4) // 4


function gjejSiperfaqenEDrejtkendeshit(brinja1, brinja2) {
    return brinja1 * brinja2;
}

console.log('Siperfaqja e nje drejtkendeshi me brinje 2x3 eshte ' + gjejSiperfaqenEDrejtkendeshit(2, 3))


let robotQeFshin = x => {
    console.log(`Okej do te fshije shtepine me siperfaqe : ${x}`)
}

robotQeFshin(10)

// OOP - Object Oriented Programming

let drejtkendesh = {
    // metoda
    // v1
    // gjejSiperfaqen: function (brinja1, brinja2) {
    //     return brinja1 * brinja2;
    // }  

    gjejSiperfaqen(brinja1, brinja2) {
        return brinja1 * brinja2;
    }
}

console.log(drejtkendesh.gjejSiperfaqen(4, 3))
// functionall programming
console.log(gjejSiperfaqenEDrejtkendeshit(4, 3))


// arrays 
let b = [2, 3, 'Hiii', true, [
    '2.1', '3.1'
]]
console.log(b)


class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }
}


let objektA = new A(2, 3)

console.log(objektA.getA())

for (let a of [2, 3, 4]) {
    console.log(a)
}