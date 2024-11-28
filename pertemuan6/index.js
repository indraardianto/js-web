//tujuan class ini digunakan untuk nambahin produk yang bisa dibeli
class Produk {
    constructor(nama_barang, harga, stok) {
        this.nama_barang = nama_barang
        this.harga = harga
        this.stok = stok
    }
    //menampilkan detail produk
    infoProduk() {
        console.log(`Nama Produk: ${this.nama_barang}, Harga: ${this.harga}, Stok: ${this.stok}pcs`);
    }
}

class Keranjang {
    //bisa ngapain aja ?
    //1. nambah pesanan
    //2. ngapus pesanan
    //3. nampilin total harga
    //4. kurangi stok

    //nambah produk, buat properti yang digunakan untuk menampung produk
    //yang mau dibeli
    daftarPesanan = []
    //butuh properti buat nampun total harga
    totalHarga = 0
    title = "PESANAN"
    //buat fungsi nambah produk
    //parameter produk digunakan untuk menampung data produk yang mau dibeli
    //parameter jumlah digunakan untuk menampung jumlah yang mau dibeli
    //insertInto
    tambahProduk(produk, jumlah) {
        //console.log("ini fungsi tambah produk");
        //console.log(produk);
        // console.log(jumlah);
        //cek kondisi stok masih tersedia atau tidak
        if (produk.stok >= jumlah) {
            // console.log("Pesanan Berhasil");
            //push data ke properti daftarPesanan[]
            this.daftarPesanan.push({ namaBarang: produk.nama_barang, harga: produk.harga, jumlah: jumlah })
        } else {
            console.log("Maaf, stok produk tidak tersedia");
        }
    }

    //selectAll
    lihatKeranjang() {
        console.log(`\n-= RINCIAN ${this.title} =-`);
        this.totalHarga = 0;
        this.daftarPesanan.forEach((data) => {
            console.log(`- Nama Produk: ${data.namaBarang}, ${data.jumlah}pcs, ${data.harga * data.jumlah}`);
        })

        //looping buat nambahin harga total pesanan
        this.daftarPesanan.forEach((elemen) => {
            this.totalHarga += elemen.harga * elemen.jumlah
            // 0 = 0 + 520000
            // 520000 = 520000 + (45000)
            // 970000 = 970000 + ?
            // ? = ? + ?

            // this.totalHarga = this.totalHarga + (elemen.harga * elemen.jumlah)

        })
        //console.log(this.daftarPesanan);
        console.log(`Total Harga: Rp${this.totalHarga.toLocaleString()}`);
    }

    hapusProduk(namaProduk) {
        const index = this.daftarPesanan.findIndex(item => item["namaBarang"] === namaProduk);
        //  console.log(index);

        if (index !== -1) {
            // console.log(this.daftarPesanan.splice(index, 1));
            this.daftarPesanan.splice(index, 1)
            //  console.log(this.daftarPesanan);
        }
    }

}

class Transaksi {
    constructor(keranjang) {
        this.keranjang = keranjang
    }

    //buat logika voucher
    voucher = ["MERDEKA", "BERBAGI"]
    kembalian = 0
    potongan = 0

    //kalau kode nya merdeka dapet potongan 10%
    //kalau kode nya berbagi dapet potongan 15%

    //ini kalau saya mau melakukan pembayaran
    pembayaran(uangSaya) {
        if (uangSaya < this.keranjang.totalHarga) {
            console.log("Maaf, uang anda tidak cukup");
        } else if (uangSaya > this.keranjang.totalHarga) {
            this.kembalian = uangSaya - this.keranjang.totalHarga
            console.log(`Kembalian: ${this.kembalian.toLocaleString()}`);
        }
    }

    kodeVoucher(kode) {
        if (kode === "MERDEKA") {
            this.potongan = (10 / 100) * this.keranjang.totalHarga
            console.log(`Potongan harga: ${this.potongan.toLocaleString()}`);
            console.log(`Total bayar: ${this.keranjang.totalHarga - this.potongan}`);
            this.keranjang.totalHarga -= this.potongan
        } else if (kode === "BERBAGI") {
            this.potongan = (15 / 100) * this.keranjang.totalHarga
            console.log(`Potongan harga: ${this.potongan.toLocaleString()}`);
            console.log(`Total bayar: ${this.keranjang.totalHarga - this.potongan}`);
            this.keranjang.totalHarga -= this.potongan
        }
    }

    //SELECT ALL
    rincianTransaksi() {
        console.log("\n-= RINCIAN TRANSAKSI =-");
        this.keranjang.totalHarga = 0
        this.keranjang.daftarPesanan.forEach((data) => {
            console.log(`- Nama Produk: ${data.namaBarang}, ${data.jumlah}pcs, ${data.harga * data.jumlah}`);
        })
        this.keranjang.daftarPesanan.forEach((elemen) => {
            this.keranjang.totalHarga += elemen.harga * elemen.jumlah
            // 0 = 0 + 520000
            // 520000 = 520000 + (45000)
            // 970000 = 970000 + ?
            // ? = ? + ?
        })
        console.log(`Total Bayar: ${this.keranjang.totalHarga.toLocaleString()}`);

    }
}

const produk1 = new Produk("Sepatu Adibas", 260000, 10)
const produk2 = new Produk("Tas Ransel", 150000, 21)
const produk3 = new Produk("Galon Kosong", 50000, 4)
console.log("-= DAFTAR PRODUK =-");
produk1.infoProduk()
produk2.infoProduk()
produk3.infoProduk()

const keranjang = new Keranjang()
keranjang.tambahProduk(produk1, 2)
keranjang.tambahProduk(produk2, 3)
keranjang.tambahProduk(produk3, 1)
keranjang.lihatKeranjang()
keranjang.hapusProduk("Galon Kosong")
keranjang.lihatKeranjang()
keranjang.tambahProduk(produk3, 1)
keranjang.lihatKeranjang()

const transaksi = new Transaksi(keranjang)

transaksi.rincianTransaksi()
transaksi.kodeVoucher("MERDEKA")
transaksi.pembayaran(2000000)
