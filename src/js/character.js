export default class Character {
  constructor(name, type, health = 100, level = 1, attack) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.distance = 1;
    this.stoned = false;
  }
}
