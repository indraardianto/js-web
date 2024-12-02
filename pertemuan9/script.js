// const a = () => {
// }
function btnTambah() {
    //tangkep id masing-masing field input
    const nama = document.getElementById("nama")
    const usia = document.getElementById("usia")
    //akses fungsi tambahData yang ada didalam class Mahasantri
    //objek.namaFungsi()
    mahasantri.tambahData(nama.value, usia.value)
}

//ini fungsi buat nambahin pop up data sebelum dihapus
//confirm di javascript itu akan menghasilkan return value true or false
//ok = true
//cancel = false
//kalau true maka akan menjalankan sebuah fungsi yaitu btnHapus()
//kalau false maka akan menjalankan sebuah alert
//parameter index akan digunakan di fungsi btnHapus()
//karena ketika akan memanggil fungsi btnHapus() harus disertai juga dengan 1 parameter
function cek(index) {
    if (confirm("Yakin neeh ? data ini akan dihapus")) {
        btnHapus(index)
    } else {
        alert("Data tidak jadi dihapus")
    }
}

function btnHapus(index) {
    mahasantri.hapusData(index)
}

class Mahasantri {
    constructor() {
        this.dataMahasantri = []
    }
    //ini tambah data

    tambahData(nama, usia) {
        const namaVal = document.getElementById("nama")
        const usiaVal = document.getElementById("usia")
        namaVal.value = ""
        usiaVal.value = ""

        //nama sama usia akan jadi key objeknya
        const dataBaru = { nama, usia }
        // this.dataMahasantri.push({ nama: "", usia:})
        this.dataMahasantri.push(dataBaru)
        //console.log(this.dataMahasantri);
        this.tampilData()
    }
    //ini proses tampil data
    tampilData() {
        const tbody = document.getElementById("dataSantri")
        let no = 1
        tbody.innerHTML = ""
        this.dataMahasantri.forEach((data, index) => {
            let tr = document.createElement("tr")
            tr.innerHTML = `
            <td>${no++}</td>
            <td>${data.nama}</td>
            <td>${data.usia}</td>
            <td> <button class="btn btn-danger" onclick="cek(${index})">
            <i class="fa fa-trash"></i> </button> 
            </td>
            `
            tbody.appendChild(tr)
        })
    }

    hapusData(index) {
        this.dataMahasantri.splice(index, 1)[0]
        this.tampilData()
    }
}

const mahasantri = new Mahasantri()