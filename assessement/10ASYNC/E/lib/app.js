const salam = (nama) => {
  return `Hai, ${nama}`;
};

const nama = "Hamdan";

class Person {
  constructor(param) {
    this.param = param;
  }
  sayHi() {
    console.log(`Hai, ${this.param} selamat pagi`);
  }
}

//GUNAKAN SINTAKS MODULE AGAR FILE app.js dapat digunakan di index.html
