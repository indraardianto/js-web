class Person {
    //deklarasi properti
    //properti itu mirip variabel
    nama = "Asep"
    umur = 10
    gender
    jabatan = "Ketua"

    salam(alamat) {
        console.log(`Hai, saya ${this.nama} usia ${this.umur} - ${this.gender} - alamat ${alamat} - ${this.jabatan}`);
    }
    bebas() {
        //gender lk = "laki-laki"
        if (this.gender == "lk") {
            this.gender = "laki-laki"
            console.log(`Hai, saya ${this.nama} usia ${this.umur} - ${this.gender}`);
        } else {
            this.gender = "perempuan"
            console.log(`Hai, saya ${this.nama} usia ${this.umur} - ${this.gender}`);
        }
    }
}

const asep = new Person();
console.log(asep);
console.log(asep.nama);
asep.umur = 100
asep.gender = "pr"
console.log(asep.umur);
console.log(asep.gender);
asep.salam("GG Mangga")
asep.bebas()

asep.salam("GG Manggis");


