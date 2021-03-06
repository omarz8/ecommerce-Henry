const {
  Product,
  Category,
  User,
  product_category,
  Reviews,
} = require("./db.js");

const bcrypt = require("bcrypt");

const loadProducts = () => {
  Product.bulkCreate([
    {
      name: "Remera Camiseta Deportiva Hombre Gdo Fit Running Ciclista",
      stock: Math.floor(Math.random() * 10),
      description: "Remera deportiva masculina manga corta Gol De Oro fit®",
      price: 480.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_920114-MLA40362495956_012020-F.jpg",
    },
    {
      name: "3 Top Deportivo Algodon Con Lycra Corpiño Fitness T Grande",
      stock: Math.floor(Math.random() * 10),
      description: "3 Top Deportivo Algodon Con Lycra Corpiño Fitness T Grande",
      price: 900.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_859507-MLA32792380829_112019-F.jpg",
    },
    {
      name: "Remera De Entrenamiento Boxeo Crossfit Fitness Running Gym",
      stock: Math.floor(Math.random() * 10),
      description: "Remera De Entrenamiento Boxeo Crossfit Fitness Running Gym",
      price: 750.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_905095-MLA40836192992_022020-F.jpg",
    },
    {
      name: "Remera Térmica Compresión Hydrowick - Dry - Alfest",
      stock: Math.floor(Math.random() * 10),
      description: "Remera Térmica Compresión Hydrowick - Dry - Alfest",
      price: 1300.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_763314-MLA32872921619_112019-F.jpg",
    },
    {
      name: "Remera Deportiva Pro Dry - Tecnología Hydrowick - Alfest",
      stock: Math.floor(Math.random() * 10),
      description: "Remera Deportiva Pro Dry - Tecnología Hydrowick - Alfest",
      price: 990.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_908045-MLA31012839434_062019-F.jpg",
    },
    {
      name: "Short De Running Crossfit Unisex - Gol De Oro Style",
      stock: Math.floor(Math.random() * 10),
      description: "Short De Running Crossfit Unisex - Gol De Oro Style",
      price: 390.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_827919-MLA43556402753_092020-F.jpg",
    },
    {
      name: "Shorts Deportivos Gol De Oro Elite Pocket Con Bolsillos Run",
      stock: Math.floor(Math.random() * 10),
      description:
        "Shorts Deportivos Gol De Oro Elite Pocket Con Bolsillos Run",
      price: 490.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_877561-MLA32645972160_102019-F.jpg",
    },
    {
      name: "Kit Short Deportivos+medias Stripes Gol De Oro Pro Elite",
      stock: Math.floor(Math.random() * 10),
      description: "Kit Short Deportivos+medias Stripes Gol De Oro Pro Elite",
      price: 530.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_930581-MLA40039681595_122019-F.jpg",
    },
    {
      name: "1 Kg Whey Protein Pack Premium Imperdible ! Proteina Pura !",
      stock: Math.floor(Math.random() * 10),
      description:
        "1 Kg Whey Protein Pack Premium Imperdible ! Proteina Pura !",
      price: 520.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_610130-MLA31062877793_062019-F.jpg",
    },
    {
      name: "True Made Whey Protein Ena 1kg Concentrada Isolada Truemade",
      stock: Math.floor(Math.random() * 10),
      description:
        "True Made Whey Protein Ena 1kg Concentrada Isolada Truemade",
      price: 720.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_871368-MLA31115313342_062019-F.jpg",
    },
    {
      name: "Mancuerna Pes Recargable X 2 Hasta 2 Kg Plastico Fitness",
      stock: Math.floor(Math.random() * 10),
      description: "Mancuerna Pes Recargable X 2 Hasta 2 Kg Plastico Fitness",
      price: 2000.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_853813-MLA42543135842_072020-F.jpg",
    },
    {
      name: "Mancuerna Recargable Hasta 2 Kg. Gym, Fitness, Pesas.",
      stock: 0,
      description: "Mancuerna Recargable Hasta 2 Kg. Gym, Fitness, Pesas.",
      price: 720.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_882930-MLA43238429277_082020-F.jpg",
    }, //Si queres crear otro producto hacelo aca y crea un objecto y asociale una categoria
  ]);
};

const loadCategories = () => {
  Category.bulkCreate([
    {
      name: "Shorts Deportivos",
      description: "Todo lo que necesitas para el fitness xD",
    },
    {
      name: "Remeras",
      description: "Todo en remeras deportivas",
    },
    {
      name: "Pesas y Mancuernas",
      description: "Pesas y mancuernas",
    },
    {
      name: "fitness",
      description: "fitness",
    },
    {
      name: "Suplementos",
      description: "fitness",
    },
  ]);
};

const loadProductCategories = () => {
  product_category.bulkCreate([
    {
      product_id: 1,
      category_id: 2,
    },
    {
      product_id: 2,
      category_id: 2,
    },
    {
      product_id: 3,
      category_id: 2,
    },
    {
      product_id: 4,
      category_id: 2,
    },
    {
      product_id: 5,
      category_id: 2,
    },
    {
      product_id: 6,
      category_id: 1,
    },
    {
      product_id: 7,
      category_id: 1,
    },
    {
      product_id: 8,
      category_id: 1,
    },
    {
      product_id: 9,
      category_id: 5,
    },
    {
      product_id: 10,
      category_id: 5,
    },
    {
      product_id: 11,
      category_id: 3,
    },
    {
      product_id: 12,
      category_id: 3,
    },
  ]);
};

const loadUsers = () => {
  User.bulkCreate([
    {
      name: "admin",
      email: "admin@gmail.com",
      address: "admin 1234",
      role: "admin",
      password: bcrypt.hashSync("Vsl@17477", 10),
      image: "1234",
      location_id: 21,
    },
    // {
    //   name: "client1",
    //   email: "client1@gmail.com",
    //   address: "client1 1234",
    //   role: "client",
    //   password: "client",
    //   location_id: 21,
    // },
    // {
    //   name: "client2",
    //   email: "client2@gmail.com",
    //   address: "client2 1234",
    //   role: "client",
    //   password: "client",
    //   location_id: 21,
    // },
    // {
    //   name: "client3",
    //   email: "client3@gmail.com",
    //   address: "client3 1234",
    //   role: "client",
    //   password: "client",
    //   location_id: 21,
    // },
  ]);
};

// const loadReviews = () => {
//   //load fake reviews
//   Reviews.bulkCreate([
//     {
//       points: 5,
//       description:
//         "Es linda, me quedó como esperaba! imaginé que la tela era como la de las remeras deportivas de las grandes marcas pero al tocarla me di cuenta de que no. Igual está bien por el precio de la remera! muy buen precio!",
//       productId: 1,
//       userId: 1,
//     },
//     {
//       points: 4,
//       description:
//         "Hay que pedir un talle más de lo habitual. Excelente calidad de la tela, confección y modelo. Compré 3 para mi hijo y le encantan estas remeras!",
//       productId: 1,
//       userId: 2,
//     },
//     {
//       points: 3,
//       description:
//         "El material se parece a lycra, y es medio fino. Si bien no repetiría, es una calidad pasable por el precio",
//       productId: 1,
//       userId: 3,
//     },
//     {
//       points: 5,
//       description:
//         "Me encantó,muy buen producto,resultó mejor de lo que esperaba.",
//       productId: 1,
//       userId: 4,
//     },
//     {
//       points: 5,
//       description:
//         "Todo genial ya había comprado una y la calidad es buenisima.",
//       productId: 1,
//       userId: 5,
//     },
//     {
//       points: 4,
//       description: "Buena tela, buena costura. Recomendable",
//       productId: 1,
//       userId: 6,
//     },
//   ]);
// };

module.exports = {
  loadProducts,
  loadCategories,
  loadProductCategories,
  loadUsers,
  // loadReviews,
};
