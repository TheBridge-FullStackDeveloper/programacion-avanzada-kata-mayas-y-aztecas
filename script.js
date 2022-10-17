// clases
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        // console.log(`Power: ${this.power}`);
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`Life: ${this.life}`);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColacao() {
        this.power += 10;
        console.log("Maya is drinking ... " + this.life + "  ^^" + this.power + "AT ");
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
        console.log("Aztec is drinking ... " + "^^" + this.life + "HP  " + this.power);
    }
}

// pelea
let guerrero1 = new Warrior(200, 5);
let guerrero2 = new Warrior(200, 10);

let maya = new Maya(guerrero1.life, guerrero1.power);
let azteca = new Aztec(guerrero2.life, guerrero2.power);

azteca.drinkNesquik();
maya.drinkColacao();

console.log("___________________");
console.log("Maya attack Aztec");
azteca.defend(maya.attack());
console.log("___________________");
console.log("Aztec attack Maya");
maya.defend(azteca.attack());