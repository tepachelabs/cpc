class MetaBuilder {
  static TITLE = 'title';
  static DESC = 'description';
  static URL = 'url';
  static IMAGE = 'image';

  constructor() {
    this.site = 'Culto al Perro Café';
    this.description = 'Sirviendo el café más perrón de Hermosillo, Sonora. La cafetería favorita de la gente que trabaja. Ven con tu laptop, libro favorito y/o mascota.';
    this.url = '';
    this.image = 'home.png';
  }

  setProp(prop, value) {
    if (!prop) throw new Error('`prop` should be defined');
    this[prop] = value;
    return this;
  }

  build() {
    const clone = {};
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        clone[prop] = this[prop];
      }
    }
    return clone;
  }
}

module.exports = MetaBuilder;
