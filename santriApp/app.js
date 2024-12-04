class Mahasantri {

    constructor(storageKey) {
        this.storageKey = storageKey;
        this.mahasantri = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        this.jurusan = [
            {
                "id": 1,
                "jurusan": "PPW"
            },
            {
                "id": 2,
                "jurusan": "PPM"
            },
            {
                "id": 3,
                "jurusan": "PSJ"
            }
        ]
    }

    saveToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.mahasantri));
    }

    tampilDataSantri() {
        return this.mahasantri
    }

    tambahDataSantri(data) {
        this.mahasantri.push(data);
        this.saveToStorage();
    }

}

const santri = new Mahasantri("appData")