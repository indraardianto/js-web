const salam = (nama) => {
    return `Hai, ${nama}`
    // console.log(`Hai, ${nama}`);
}

const nama = "Badrul, programmer koplo"
const angka = [1, 23, 4, 5]

class Person {
    constructor(param) {
        this.param = param
    }
    sayHi() {
        console.log(`Hai, ${this.param} selamat pagi`);
    }
}

export { nama, salam, angka, Person }
