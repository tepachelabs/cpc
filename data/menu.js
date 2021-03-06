const menu = {
  sections: [
    {
      image: "hot-mug.svg",
      width: 80,
      title: "Bebidas Calientes",
      isExtended: true,
      items: [
        { name: "Americano", price: { local: 30, small: 35, big: 39 } },
        { name: "Latte", price: { local: 45, small: 44, big: 49 } },
        { name: "Cappuccino", price: { local: 45, small: 44, big: 49 } },
        { name: "Espresso", price: { local: 30, small: 35, big: 0 } },
        { name: "Macchiato", price: { local: 30, small: 35, big: 0 } },
        { name: "Moccha", price: { local: 50, small: 0, big: 55 } },
        { name: "Flat White", price: { local: 40, small: 45, big: 0 } },
        { name: "Gran Danés", price: { local: 65, small: 0, big: 69 } },
        { name: "Sifón Japonés", price: { local: 60, small: 0, big: 0 } },
        { name: "Chocolate Caliente", price: { local: 50, small: 0, big: 55 } },
        { name: "Caramel Latte", price: { local: 55, small: 0, big: 59 } },
        { name: "Moccha-Menta Latte", price: { local: 55, small: 0, big: 59 } },
      ],
    },
    {
      image: "cold-mug.svg",
      width: 80,
      title: "Bebidas Frías",
      items: [
        { name: "Latte", price: { local: 55, small: 0, big: 59 } },
        { name: "Latte Frappé", price: { local: 55, small: 0, big: 59 } },
        { name: "Moccha", price: { local: 59, small: 0, big: 65 } },
        { name: "Moccha Frappé", price: { local: 59, small: 0, big: 65 } },
        { name: "Oreo™", price: { local: 65, small: 0, big: 69 } },
        { name: "Chips Ahoy!™", price: { local: 65, small: 0, big: 69 } },
      ],
    },
    {
      image: "friends.svg",
      width: 160,
      title: "Otras bebidas",
      items: [
        { name: "Limonada", price: { local: 25, small: 0, big: 29 } },
        { name: "Limonada Mineral", price: { local: 25, small: 0, big: 29 } },
        { name: "Limonada Tepache", price: { local: 49, small: 0, big: 54 } },
        { name: "Perra Uvola", price: { local: 35, small: 0, big: 39 } },
        { name: "Perro Mango", price: { local: 35, small: 0, big: 39 } },
      ],
    },
    {
      image: "couldron.svg",
      width: 120,
      title: "Nuestros Tés",
      items: [
        { name: "Té Perrón", price: { local: 20, small: 0, big: 24 } },
        { name: "Chai", price: { local: 50, small: 0, big: 54 } },
        { name: "Tisana Caliente", price: { local: 50, small: 0, big: 54 } },
        { name: "Tisana Fría", price: { local: 55, small: 0, big: 59 } },
        { name: "Matcha Caliente", price: { local: 50, small: 0, big: 54 } },
        { name: "Matcha Frío", price: { local: 55, small: 0, big: 59 } },
      ],
    }
  ],
};

module.exports = menu;
