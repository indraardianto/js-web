class MyClass {
  color;

  constructor(nama, usia) {
    this.name = nama;
    this.age = usia;
  }

  tambahAnggota(nama) {
    this.anggota.push(nama);
    console.log(this.anggota);
  }
}

const object = new MyClass("asep", 50);
object.tambahAnggota("Robert");
object.tambahData(1, "Khodam");

//OUTPUT YANG DIHARAPKAN TERDAPAT DI SCREENSHOOT
