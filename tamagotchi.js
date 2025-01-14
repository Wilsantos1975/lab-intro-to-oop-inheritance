// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  status() {
    console.log(
      `My mood is: ${this.mood}, I am this full: ${this.full}, My energy is: ${
        this.energy
      } and im ${this.sick ? "sick" : "not sick"}`
    );
  }
  eat() {
    if (this.full < 8) {
      this.full += 2;
      this.mood += 1;
      this.energy -= 1
      console.log(`${this.name} is eating`);
    } else {
      console.log(`${this.name} is full`);
    }
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`${this.name}, refused to take medicine.`);
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick === true) {
      console.log(`${this.name} is sick and doesn't want to play.`);
      this.energy -= 1;
    } else if (this.mood > 9) {
      console.log(`${this.name} is happy and doesn't want to play.`);
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log(`${this.name} is tired and doesn't want to play.`);
      this.energy -= 1;
    }
  }

  sleep() {
    if (this.energy < 9) {
      this.energy += 4;
      this.full -= 3;
      console.log(`${this.name} is sleeping`);
    } else {
      console.log(`${this.name} is not tired`);
    }
  }

  timePasses() {
    if (this.sick !== true) {
      this.energy -= 1;
      this.full -= 1;
      this.mood -= 2;
    } else {
      this.energy -= 2;
      this.full -= 1;
      this.mood -= 2;
    }
  }

  badGuardian() {
    console.log(`${this.name} has been rehomed.`);
    if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
      this.rehomed = true;
    }
  }
}

let tama = new Tamagotchi("tama", 10, 10, 10);
console.log(tama);
tama.eat();
console.log(tama);

// Do not edit below this line
module.exports = Tamagotchi;
