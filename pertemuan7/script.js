//SIMULASI 2 TABEL BERELASI
class Dashboard {
    constructor() {
        this.tampilMahasantri()
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
            let namaJurusan = dataJurusan ? dataJurusan.nama_jurusan : "not found"
            // let badge = ""
            // if (dataJurusan) {
            //     if (dataJurusan.nama_jurusan === "PPW") {
            //         badge = "<span style="" class='bg bg-success'>PPW</span>"
            //     }else if (condition) {

            //     }
            // }

            //bikin dulu tag tr nya

            const tr = document.createElement('tr')
            const td = `<td>${no++}</td>
            <td>${data.nama}</td>
            <td> ${namaJurusan}</td>
            <td>${data.usia}</td>`
            //masukin td ke tr
            tr.innerHTML = td
            //masukin tr ke tbody
            tabelData.appendChild(tr)
        })
    }

    tambahData() {
        const nama = document.getElementById("nama")
        const usia = document.getElementById("usia")
        const jurusan = document.getElementById("jurusan")
        if (nama.value === "") {
            //ngapain ?
            //nambahin class is-invalid buat tampilin pesan error kedalam masing-masing field input
            nama.classList.add("is-invalid")
            nama.onchange = () => {
                if (nama.value === "") {
                    nama.classList.add("is-invalid")
                } else {
                    nama.classList.remove("is-invalid")
                }
            }
        } else if (usia === "") {
            usia.classList.add("is-invalid")
            usia.onchange = () => {
                if (usia.value === "") {
                    usia.classList.add("is-invalid")
                } else {
                    usia.classList.remove("is-invalid")
                }
            }
        } else if (jurusan === "") {
            jurusan.classList.add("is-invalid")
            jurusan.onchange = () => {
                if (jurusan.value === "") {
                    jurusan.classList.add("is-invalid")
                } else {
                    jurusan.classList.remove("is-invalid")
                }
            }
        } else {
            const nama_santri = document.getElementById("nama").value
            const usia_santri = parseInt(document.getElementById("usia").value)
            const jurusan_santri = parseInt(document.getElementById("jurusan").value)

            const data = document.getElementById("data")
            //reset ulang tampilan tabel tbody
            data.innerHTML = ""
            //push data ke properti mahasantri
            this.mahasantri.push({ id: 15, nama: nama_santri, usia: usia_santri, jurusan_id: jurusan_santri })
            //ini buat cek data sudah masuk atau belum
            console.log(this.mahasantri);
            this.tampilMahasantri()
        }
    }
}

const dashboard = new Dashboard();

