const feed = [1, 2, 3, 4, 5, 6, 7, 8].map(id => {
  const file = id < 10 ? `0${ id }` : id;

  return {
    src: `/images/pictures/products/${ file }-145.jpg`,
    srcset: `/images/pictures/products/${ file }-145.jpg 480w, /images/pictures/products/${ file }-210.jpg 960w`,
    alt: 'Imagen de nuestro Instagram @cultoperrocafe',
  }
});

module.exports = feed;
