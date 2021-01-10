class MetaBuilder {
  static TITLE = 'title';
  static DESC = 'description';
  static URL = 'url';

  constructor() {
    this.site = 'Culto al Perro Café';
    this.description = 'Cafetería Indie Experimental. Una cafetería que entiende a la gente que trabaja. Hermosillo, Sonora.';
    this.url = '';
    this.image = 'https://cultoperrocafe.com/images/social.jpg';
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
