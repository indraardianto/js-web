class Hardisk {
    folder = [
        {
            "name": "Data 1",
            "isi": ["file1", "file2", "file3"],
            "total": 200
        }, {
            "name": "Data 2",
            "isi": ["file4", "file5"],
            "total": 100
        }, {
            "name": "Data 3",
            "isi": ["file6", "file7", "file8", "file9", "file10"],
            "total": 50
        }];

    constructor(kapasitas) {
        this.kapasitas = kapasitas;
    }

    infoHardisk() {
        console.log(`Kapasitas Hardisk: ${this.kapasitas} GB`);
    }

    isiFile() {
        this.folder.forEach(item => {
            console.log(`Folder: ${item.name}`);
            item.isi.forEach(item => {
                console.log(`- ${item}`);
            });
            console.log(`Total: ${item.total}`);
            console.log("\n");
        })
    }

    tambahFolder(folderBaru) {
        let total = this.folder.reduce((total, nilaiSaatIni) => total + nilaiSaatIni.total, 0);
        if (total + folderBaru.total <= this.kapasitas) {
            this.folder.push(folderBaru)
        } else {
            console.log("Penyimpanan hardisk penuh");
        }
    }

    sisaDisk() {
        let total = this.folder.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
        console.log("Sisa Kapasistas : ", this.kapasitas - total);
    }
}

class Seagate extends Hardisk {
    constructor(kapasitas) {
        super(kapasitas);
    }
}

const hardisk = new Hardisk(500);

hardisk.tambahFolder({
    "name": "Data 4",
    "isi": ["file11", "file12", "file13"],
    "total": 100
})

hardisk.infoHardisk();
hardisk.sisaDisk();
hardisk.isiFile();

const seagate = new Seagate(500);
seagate.tambahFolder({
    "name": "Data 5",
    "isi": ["file14", "file15", "file16"],
    "total": 100
})