function cek(a, b, callback) {
    return a + b
    callback()
}

function teks() {
    console.log("Hai");
}

console.log(cek(4, 5, teks()));
