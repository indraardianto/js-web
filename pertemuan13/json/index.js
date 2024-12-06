
//JSON Stringify
//mengkonversi javascript objek/array kedalam string JSON/ JSON string

//Backend
//ini JS array index biasa 
const nama = ["Asep", "Agus", "Atep"]
const person = {
    "nama": "Robert",
    "usia": 90,
    "Alamat": "GG Mangga"
}
const people = [
    {
        "nama": "Robert",
        "usia": 90,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Aep",
        "usia": 40,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Robinson",
        "usia": 20,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Jhonson",
        "usia": 30,
        "Alamat": "GG Mangga"
    }
]

const jsonString = JSON.stringify(people)

console.log(people);
console.log(jsonString);

//Frontend
//parsing data menggunakan JSON.parse()
//JSON.parse() untuk parsing data JSON String menjadi array/objek javascript biasa
const namaJson = `["Asep", "Agus", "Atep"]`
const personJson = `{
    "nama": "Robert",
    "usia": 90,
    "Alamat": "GG Mangga"
}`
const peopleJson = `[
    {
        "nama": "Robert",
        "usia": 90,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Aep",
        "usia": 40,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Robinson",
        "usia": 20,
        "Alamat": "GG Mangga"
    },
    {
        "nama": "Jhonson",
        "usia": 30,
        "Alamat": "GG Mangga"
    }
]`

const jsonParse = JSON.parse(peopleJson)

console.log(peopleJson);
console.log(jsonParse);
jsonParse.forEach(element => {
    console.log(element.nama);
});