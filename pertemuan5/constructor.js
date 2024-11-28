class MyClass {
    color
    anggota = []
    mahasantri = []
    //fungsi yang akan otomatis pertama kali dijalankan ketika objek diciptakan
    constructor(nama, usia) {
        //kalau ingin nambahin properti didalam fungsi constructor
        //diawali sama kata kunci this.nama_properti
        this.name = nama
        this.age = usia
    }

    sayHi() {
        console.log(`Hi, saya ${this.name}`);
    }

    tambahAnggota(nama) {
        this.anggota.push(nama)
        console.log(this.anggota);
    }

    insertInto(id, name, saudara) {
        //ini simulasi jika ada 1 field/parameter yang bisa nampung banyak data
        //dalam kasus ini yang bisa nampung banyak data yaitu field/parameter saudara
        this.mahasantri.push({ "id": id, "nama": name, "saudara": [saudara] })
        console.log(this.mahasantri);
    }

    selectAll() {
        console.log(`Daftar Mahasantri`);
        this.mahasantri.forEach((data) => {
            console.log(`${data.id} - ${data.nama}`);
            console.log(`saudara : ${data.saudara}`);
            //console.log(Array.isArray(data.saudara));
        })
    }
}

const object = new MyClass("asep", 50);
console.log(object);
object.sayHi()
object.tambahAnggota("Iwan")
object.tambahAnggota("Asep")
object.insertInto(1, "Khodam", ["andi", "budi"])
object.insertInto(2, "Abidin", ["zikri", "izzan"])
object.selectAll()