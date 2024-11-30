//SIMULASI 2 TABEL BERELASI
class Dashboard {
    constructor() {
        this.tampilMahasantri()
        // this.formInput = document.querySelectorAll('input')
        // console.log(this.formInput);
    }

    //simulasi tabel mahasantri
    mahasantri = [
        { id: 1, nama: "Abidin", usia: 70, jurusan_id: 3 },
        { id: 2, nama: "Yusuf", usia: 20, jurusan_id: 2 },
        { id: 3, nama: "Isro", usia: 22, jurusan_id: 1 },
        { id: 4, nama: "Udin", usia: 11, jurusan_id: 2 },
        { id: 10, nama: "Khodam", usia: 80, jurusan_id: 1 },
        { id: 11, nama: "Dadam", usia: 17, jurusan_id: 3 },
        { id: 12, nama: "Fatih", usia: 40, jurusan_id: 2 },
        { id: 13, nama: "Farhan", usia: 30, jurusan_id: 1 },
        { id: 14, nama: "Latif", usia: 25, jurusan_id: 1 },
    ]

    //simulasi tabel jurusan
    jurusan = [
        {
            id: 1,
            nama_jurusan: "PPW"
        },
        {
            id: 2,
            nama_jurusan: "PPM"
        },
        {
            id: 3,
            nama_jurusan: "PSJ"
        },
    ]

    tampilMahasantri() {
        //tangkep id tabel tbody nya
        const tabelData = document.getElementById("data")
        let no = 1
        //ini pake variabel no buat ngantisipasi kalau ID mahasantri ngga berurutan
        //no++ = ditampilin dulu angkanya baru ditambah 1
        //++no = ditambah 1 dulu baru ditampilin angkanya
        //no-- = ?
        //--no = ?
        //looping tabel mahasantri
        this.mahasantri.forEach((data) => {
            //console.log(`${data.nama}-${data.usia}`);
            //PR - nampilin di HTML
            //cek jurusan_id apakah sama dengan id yang ada di array jurusan
            let dataJurusan = this.jurusan.find((elemen) => elemen.id === data.jurusan_id)
            //dibawah ini pake operator ternary
            //sintaks : kondisi ? jika true : jika false
            //let namaJurusan = dataJurusan ? dataJurusan.nama_jurusan : "not found"

            let badge = ""
            if (dataJurusan.nama_jurusan === "PPW") {
                badge = `<span class="badge bg-success">PPW</span>`
            } else if (dataJurusan.nama_jurusan === "PPM") {
                badge = `<span class="badge bg-primary">PPM</span>`
            } else {
                badge = `<span class="badge" style="background-color:#22177A">PSJ</span>`
            }

            //bikin dulu tag tr nya
            const tr = document.createElement('tr')
            const td = `<td>${no++}</td>
            <td>${data.nama}</td>
            <td>${badge}</td>
            <td>${data.usia}</td>`
            //masukin td ke tr
            tr.innerHTML = td
            //masukin tr ke tbody
            tabelData.appendChild(tr)
        })
    }

    tambahData() {
        const formInput = document.querySelectorAll('input')
        // console.log(formInput);
        const formSelect = document.getElementById('jurusan')
        formInput.forEach((input) => {
            if (input.value.trim() === "") {
                input.classList.add("is-invalid")
            } else {
                input.classList.remove("is-invalid")
            }
        })
        if (formSelect.value === "") {
            formSelect.classList.add("is-invalid")
        } else {
            formSelect.classList.remove("is-invalid")
        }
        if (formInput[0].value !== "" && formInput[1].value !== "" && formSelect.value !== "") {
            const nama_santri = document.getElementById("nama").value
            const usia_santri = parseInt(document.getElementById("usia").value)
            const jurusan_santri = parseInt(document.getElementById("jurusan").value)
            const data = document.getElementById("data")
            const berhasil = document.getElementById("berhasil")
            data.innerHTML = ""

            berhasil.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Successfull..!!</strong> Data berhasil ditambahkan.
            </div>`

            //pesan ilang otomastis setelah berapa detik
            setTimeout(() => {
                berhasil.innerHTML = ""
            }, 5000)

            this.mahasantri.push({ id: 15, nama: nama_santri, usia: usia_santri, jurusan_id: jurusan_santri })
            this.tampilMahasantri()
        }
    }
}


const dashboard = new Dashboard();

