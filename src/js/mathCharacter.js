import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type, health = 100, level = 1, attack) {
    super(name, type, health, level, attack);
  }

  set stoned(stonedValue) {
    this.xstoned = stonedValue;
  }

  get stoned() {
    return this.xstoned;
  }

  set attack(attack) {
    if (attack > 0) {
      const basicAttack = Math.round(attack * (1 - (this.distance - 1) / 10));
      if (basicAttack >= 0) {
        this.xattack = basicAttack;
      } else {
        this.xattack = 0;
      }
    } else {
      this.xattack = 0;
    }
  }

  get attack() {
    if (this.xattack > 0) {
      if (this.stoned) {
        const attackDope = this.xattack - Math.round((Math.log(this.distance) / Math.log(2)) * 5);
        if (attackDope > 0) {
          return attackDope;
        }
        return 0;
      }
      return this.xattack;
    }
    return 0;
  }
}
