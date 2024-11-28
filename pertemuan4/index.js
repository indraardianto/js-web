function buatAkun(username, password) {
    this.username = username
    this.password = password

    this.cekLogin = () => {
        if (this.password.length < 8) {
            console.log("akun gagal dibuat");
        } else {
            console.log("akun berhasil dibuat");
        }
    }
}

const berhasil = new buatAkun("badu", "12345678")
const gagal = new buatAkun("budi", "1234567")
berhasil.cekLogin()
gagal.cekLogin()