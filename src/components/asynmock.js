const misProductos = [
  {
    id: "1",
    nombre: "MATE CAMIONERO DE ALGARROBO",
    precio: 6411,
    img: "../img/mates/mate-camionero-algarrobo.jpg",
    stock: 43,
    categoria: "Mates",
    idCat: "mates",
    descripcion:
      "Un producto con madera de algarrobo, madera que suaviza la yerba y permite cebarte unos mate únicos!",
  },
  {
    id: "2",
    nombre: "MATE IMPERIAL DELUXE BLANCO",
    precio: 9322,
    img: "../img/mates/imperial-deluxe-blanco.jpg",
    stock: 23,
    categoria: "Mates",
    idCat: "mates",

    descripcion: "Interior térmico de acero inoxidable, virola de acero, guarda de alpaca, no precisa curado ya que es de acero, forrado en cuero vacuno.",
  },
  {
    id: "3",
    nombre: "MATE DE CERÁMICA ESMALTADA",
    precio: 7354,
    img: "../img/mates/mate-ceramica-esmaltado.jpg",
    stock: 12,
    categoria: "Mates",
    idCat: "mates",

    descripcion: "La yerba sobre la cerámica mantiene todas sus propiedades sin absorciones lo que hace que su sabor sea invariable.",
  },
  {
    id: "4",
    nombre: "MATE TORPEDO",
    precio: 8267,
    img: "../img/mates/mate-torpedo.jpg",
    stock: 33,
    categoria: "Mates",
    idCat: "mates",
    descripcion: "Mate torpedo con virola lisa de acero, el mismo es forrado en cuero y su interior es de calabaza brasilera (más pesada y resistente)",
  },
  {
    id: "5",
    nombre: "BOMBILLA PICO DE ALPACA CINCELADO",
    precio: 9135,
    img: "../img/bombillas/bombilla-pico-de-alpaca-cincelado.png",
    stock: 21,
    categoria: "Bombilla",
    idCat: "bombillas",
    descripcion: "Sin descripción",
  },
  {
    id: "6",
    nombre: "BOMBILLA PICO DE LORO",
    precio: 2596,
    img: "../img/bombillas/bombilla-pico-de-loro.png",
    stock: 14,
    categoria: "Bombilla",
    idCat: "bombillas",
    descripcion: "La alpaca brasilera tiene más bronce en su aleación, por lo que es más liviana y resistente que la alpaca argentina.",
  },
  {
    id: "7",
    nombre: "BOMBILLA PICO DE REY",
    precio: 2874,
    img: "../img/bombillas/bombilla-pico-de-rey.png",
    stock: 32,
    categoria: "Bombilla",
    idCat: "bombillas",
    descripcion: "Sin descripción",
  },
  {
    id: "8",
    nombre: "YERBA CANARIAS Uruguaya",
    precio: 1836,
    img: "../img/yerbas/yerba-canarias.png",
    stock: 12,
    categoria: "Yerbas",
    idCat: "yerbas",
    descripcion: "Yerba uruguaya por excelencia, que dura mucho más que otras sin lavarse.",
  },
  {
    id: "9",
    nombre: "TERMO MEDIA MANIJA 1L",
    precio: 4600,
    img: "../img/termos/termo-media-manija.png",
    stock: 23,
    categoria: "Termos",
    idCat: "termos",
    descripcion: "Acero inoxidable, manija de agarre, pico cebador, conservación 12-14 hs, versátil y cómodo para el día a día.",
  },
  {
    id: "10",
    nombre: "TERMO LUMINOX",
    precio: 6600,
    img: "../img/termos/termo-luminox.png",
    stock: 45,
    categoria: "Termos",
    idCat: "termos",
    descripcion: "Acero apto para alimentos y bebidas, doble capa de acero para mantener la temperatura por 12 Hrs, apto para colocar hielo en su interior, tapón con pico cebador para mate o café, los productos Lumilagro tienen garantía de conservación. La garantía no cubre roturas por golpes o mal uso.",
  },
  {
    id: "11",
    nombre: "MATERA",
    precio: 7250,
    img: "../img/termos/matera.png",
    stock: 11,
    categoria: "Materas",
    idCat: "materas",
    descripcion: "Canasta práctica matera confeccionada en cuero puro, realizada a mano (trabajo artesano), reforzadas, calidad premium, capacidad para almacenar mate (cualquier tamaño), termo (cualquier tamaño), yerba/yerbera.",
  },
  {
    id: "12",
    nombre: "YERBERA",
    precio: 2340,
    img: "../img/termos/yerbera.png",
    stock: 13,
    categoria: "Yerberas",
    idCat: "yerberas",
    descripcion: "El Tambo Yerbero está fabricado en hojalata de primera calidad, apto para el contacto con alimentos, tiene un pico vertedor de plástico. Capacidad de 350 gramos. Dimensiones: 12 cm de alto y 9 cm de ancho.",
  },
];


export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos);
    }, 500);
  });
};

export const getProductosById = (productosId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === productosId);
      resolve(producto);
    }, 500);
  });
};

// funcion para retornar una categoria entera

export const getProductsByCat = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 500);
  });
};
