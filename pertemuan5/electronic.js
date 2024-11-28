class Electronics {
    device = "TV LED 2.0"
    constructor(a) {
        this.a = a
        console.log(`--= Smart Electronics ${this.a} =--`);
    }
    on() {
        console.log("Engine started");

    }
    off() {
        console.log("Engine stopped");
    }
}

const laptop = new Electronics("Machine");
laptop.on();
console.log("Device :", laptop.device);
laptop.off()