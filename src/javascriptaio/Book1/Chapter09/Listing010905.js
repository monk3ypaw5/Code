class Cat {
  static species = 'Felis catus';
  #isSleeping;
  paws = 4;
  sound = 'meow';

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
  static herd() {
    throw new Error(`You can't do that.`);
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}
