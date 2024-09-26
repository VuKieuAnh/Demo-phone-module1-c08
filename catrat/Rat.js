class Rat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true;
    }

    sound(text){
        console.log(text);
    }
}
//khoi tao doi tuong
let baTuan = new Rat("Ba Tuan", 63, 50);
let nyBaTuan = new Rat("Ny 1", 45, 30);
