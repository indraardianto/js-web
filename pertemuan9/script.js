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

function btnHapus(index) {
    mahasantri.hapusData(index)
}

class Mahasantri {
    constructor() {
        this.dataMahasantri = []
    }
    //ini tambah data
    tambahData(nama, usia) {
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
            <td> <button class="btn btn-danger" onclick="btnHapus(${index})">
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