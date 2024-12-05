class Parent {
    constructor(namaDepan) {
        this.namaDepan = namaDepan
    }

    salam() {
        console.log("Hai, saya parent");
    }

    terbang() {
        console.log("saya bisa terbang");
    }

    hi() {
        console.log(`Hai, ${this.namaDepan}`);

    }
}

class Child extends Parent {
    constructor(namaDepan, namaBelakang) {
        super(namaDepan)
        this.namaBelakang = namaBelakang
    }

    Salam() {
        console.log("Hai, saya child");
        //untuk memanggil method parent class
        super.salam()
    }

    hi() {
        console.log(`Hi, ${this.namaDepan} ${this.namaBelakang} `);

    }
}

const parent = new Parent("Asep")
parent.salam()
parent.hi()
const child = new Child("MEMET", "Cihuy")
child.Salam()
child.terbang()
child.hi()
