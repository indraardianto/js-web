class Perpustakaan {
    kumpulanBuku = []
    tambahBuku(namaBuku) {
        //buat logika nambah buku
        if (namaBuku && !this.kumpulanBuku.includes(namaBuku)) {
            this.kumpulanBuku.push(namaBuku)
            console.log(`Buku ${namaBuku} berhasil ditambahkan`);
        } else {
            console.log(`Buku ${namaBuku} sudah ada, gagal ditambahkan`);
        }
    }

    lihatBuku() {
        console.log("Daftar Buku Perpustakaan");
        this.kumpulanBuku.forEach((data) => {
            console.log(`- ${data}`);
        })
    }

    hapusBuku(namaBuku) {
        //kalau return nya itu bernilai 1 atau positif
        //maka nilai yang dicari ketemu atau ada didalam deret array  
        const hapus = this.kumpulanBuku.indexOf(namaBuku)
        //indexOf diganti pake includes
        if (hapus !== -1) {
            // console.log("buku ketemu");
            //baca dokumentasi array.splice
            this.kumpulanBuku.splice(hapus, 1)
            console.log('Buku Berhasil di Hapus');
        } else {
            console.log("Buku tidak ditemukan");
        }
    }
}

//class ?
//studi kasus nya diganti pakai, menghapus data berdasarkan id
//nambah data bukunya berarti harus berupa objek
//example 
// {
//     "id": 1,
//     "judulBuku": "samson tobat",
//     "stok": 18
// }
const pustik = new Perpustakaan()
pustik.tambahBuku("Kancil menanam timun")
pustik.tambahBuku("Cinderella potong rambut")
pustik.tambahBuku("JS Jos")
pustik.lihatBuku()
pustik.hapusBuku("JS Jos")
pustik.lihatBuku()
