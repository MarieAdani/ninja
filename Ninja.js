class Ninja {
    constructor (nombre, salud){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad= 3;
        this.fuerza= 3;
    }

    sayName(){
        console.log(this.nombre)
    }

    showStats(){
        console.log("Nombre:" + this.nombre + " | Fuerza: " + this.fuerza + " | Velocidad: " + this.velocidad + " | Salud: " + this.salud);
        //console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`) otra forma
    }

    drinkSake () {
        this.salud += 10;
        console.log(this.nombre + " tomo sake y su salud subio a: " + this.salud);
    }
}

const ninja1 = new Ninja ("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();








