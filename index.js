class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;

    }

    toAttack(){

        let attack;

        if (this.type === "warrior"){
            attack = "sword"
        } else if (this.type === "mage"){
            attack = "magic"
        } else if (this.type === "monk"){
            attack = "martial arts"
        } else if (this.type === "ninja"){
            attack = "shuriken"
        }
        
            console.log(`${this.name} ${this.age} years old of the ${this.type} attacked using ${attack}`)

    }

}
    let hero = new hero(prompt("enter your name"),prompt("enter your age"),prompt("enter your type"))
    hero.toAttack()
