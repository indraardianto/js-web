export const salam = (nama) => {
    return `Hai, ${nama}`
    // console.log(`Hai, ${nama}`);
}

export const nama = "Badrul, programmer koplo"
export const angka = [1, 23, 4, 5]

export class Person {
    constructor(param) {
        this.param = param
    }
    sayHi() {
        console.log(`Hai, ${this.param} selamat pagi`);
    }
}

//export const person = new Person("Slamet")
