class ManageData {
    constructor() {
        this.dataArray = [];
        this.hapusArray = [];
    }

    tambahData(nama, harga) {
        const dataBaru = { nama, harga }
        const berhasiladd = document.getElementById('berhasil');


        this.dataArray.push(dataBaru)


        //selesai tambah data, langsung ditampilkan
        berhasiladd.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfull..!!</strong> Data berhasil ditambahkan
        </div>
        `
        setTimeout(() => {
            berhasiladd.innerHTML = ""
        }, 5000);

        this.tampilData()
    }

    tampilData() {
        const tabel = document.querySelector('#tabelData tbody');
        const barang = document.getElementById('barang')
        const harga = document.getElementById('harga')

        tabel.innerHTML = ''
        barang.value = ""
        harga.value = ""
        let no = 1;
        this.dataArray.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${no++}</td>   
                <td>${item.nama}</td>
                <td>${item.harga}</td>
                <td><button onclick="btnhapus(${index})" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
            `;

            tabel.appendChild(row);
        });

        this.tampilDataHapus()
    }

    hapusData(index) {
        const berhasildel = document.getElementById('berhasil');
        const deletedItem = this.dataArray.splice(index, 1)[0];
        this.hapusArray.push(deletedItem);

        berhasildel.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfull..!!</strong> Data berhasil dihapus
        </div>
        `

        setTimeout(() => {
            berhasildel.innerHTML = ""
        }, 5000);

        this.tampilData();
    }

    tampilDataHapus() {

        const restore = document.querySelector('#tabelRestore tbody');
        restore.innerHTML = ''
        let no = 1;
        this.hapusArray.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${no++}</td>
                <td>${item.nama}</td>
                <td>${item.harga}</td>
                <td>
                <button onclick="btnrestore(${index})" class="btn btn-warning"><i class="fa fa-refresh"></i></button>
                <button onclick="btnpaten(${index})" class="btn btn-danger"><i class="fa fa-circle-minus"></i></button>
                </td>
            `;
            restore.appendChild(row);
        });

    }

    restoreData(index) {
        const berhasilres = document.getElementById('berhasil');
        const restoredItem = this.hapusArray.splice(index, 1)[0];
        this.dataArray.push(restoredItem);

        berhasilres.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfull..!!</strong> Data berhasil dikembalikan
        </div>
        `

        setTimeout(() => {
            berhasilres.innerHTML = ""
        }, 5000);

        this.tampilData();

    }

    deletePaten(index) {
        this.hapusArray.splice(index, 1)[0];
        const berhasilpaten = document.getElementById('berhasil');

        console.log(this.hapusArray);

        berhasilpaten.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Successfull..!!</strong> Data berhasil dihapus
        </div>
        `

        setTimeout(() => {
            berhasilpaten.innerHTML = ""
        }, 5000);

        this.tampilData();
    }

}

const dataManage = new ManageData();

function btntambah() {
    const nama = document.getElementById('barang')
    const harga = document.getElementById('harga')

    if (nama.value == '' || harga.value == '') {
        alert("isi data dengan benar")
    } else {
        dataManage.tambahData(nama.value, harga.value)
    }

}

function btnhapus(index) {
    dataManage.hapusData(index);
}

function btnrestore(index) {
    dataManage.restoreData(index);
}

function btnpaten(index) {
    dataManage.deletePaten(index)
}

