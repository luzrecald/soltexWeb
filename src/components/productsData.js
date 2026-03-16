export const PRODUCTS = [
  {
    id: "cuellos-polo",
    title: "Cuellos para remeras tipo Polo",
    image: "/product1.png",
    cardPosition: "center center",
    gallery: [
      "/CuellosparaPolo2.png",
      "/CuellosparaPolo4.png",
      "/CuellosparaPolo5.png",
      "/CuellosparaPolo7.jpeg",
      "/CuellosparaPolo8.png",
      "/CuellosparaPolo9.png",
      "/CuellosparaPolo10.png"
    ],
    applications: [],
    design: ["Liso", "Rayas", "Patrones", "Letras"],
    materials: ["Algodón", "Poliéster"],
    sizeSectionTitle: "Seleccioná medida",
    sizeGuideLabel: "Guía de medidas",
    sizeGuideText:
      "Las medidas pueden ajustarse según el diseño de la prenda y el requerimiento del cliente.",
    sizesType: "grid",
    sizesGrid: [
      { label: "0 - 24 meses", value: "26 x 7 cm" },
      { label: "2 - 4 años", value: "32 x 7 cm" },
      { label: "6 - 10 años", value: "34 x 8 cm" },
      { label: "12 - 18 años", value: "38 x 8 cm" },
      { label: "P - M", value: "42 x 8 cm" },
      { label: "G - 2XG", value: "44 x 9 cm" },
      { label: "3XG - 4XG", value: "46 x 9 cm" },
      { label: "5XG+", value: "48 x 9 cm" }
    ]
  },

  {
    id: "pretinas-polo",
    title: "Pretinas para remeras tipo  Polo",
    image: "/product2.png",
    cardPosition: "75% center",
   gallery: [
  "/pretinaSimple1.png",
  "/pretinaSimple2.png",
  "/pretinaSimple3.png",
  "/pretinaSimple4.png",
    "/pretinasparapolo1.png"
],
    design: ["Liso", "Rayas", "Patrones", "Letras"],
    extraDesignText:
      "Puede ir a juego con los cuellos o desarrollarse de manera individual.",
    materials: ["Algodón", "Poliéster"],
    sizeSectionTitle: "Seleccioná medida",
    sizeGuideLabel: "Guía de medidas",
    sizeGuideText:
      "Las pretinas pueden desarrollarse en conjunto con el cuello o de manera independiente.",
    sizesType: "grid",
    sizesGrid: [
      { label: "0 - 24 meses", value: "20 x 3 cm" },
      { label: "2 - 4 años", value: "30 x 3 cm" },
      { label: "6 - 10 años", value: "36 x 3 cm" },
      { label: "12 - 18 años", value: "36 x 3 cm" },
      { label: "P - M", value: "40 x 3,5 cm" },
      { label: "G - 2XG", value: "40 x 3,5 cm" },
      { label: "3XG - 4XG", value: "42 x 3,5 cm" },
      { label: "5XG+", value: "42 x 3,5 cm" }
    ]
  },

  {
    id: "pretinas-dobles-deportivas",
    title: "Pretinas Dobles",
    image: "/product3.png",
    cardPosition: "75% center",
   gallery: [
  "/product3.png",
  "/pretinaDoble5.JPG",
  "/pretinaDoble1.JPG",
  "/pretinaDoble2.JPG",
  "/pretinaDoble3.JPG",
  "/pretinaDoble4.JPG"
],
    applications: [
      "Camisetas deportivas",
      "Musculosas",
      "Remeras escolares de educación física"
    ],
    design: ["Liso", "Rayas", "Patrones", "Letras"],
    materials: ["Algodón", "Poliéster"],
    sizeSectionTitle: "Producción",
    sizeGuideLabel: "Información",
    sizeGuideText:
      "La cantidad final se define según cuello, mangas o combinación de componentes.",
    sizesType: "text",
    sizesText: [
      "Se fabrican en tiras de 120 cm para optimizar el aprovechamiento del material en producción.",
      "Una tira puede cubrir cuello y puños cuando comparten diseño.",
      "En desarrollos con diseños distintos, o cuando el cliente requiere únicamente cuellos o puños, se ajustan las cantidades de tiras para cubrir exactamente lo necesario."
    ]
  },

  {
    id: "pretinas-buzo",
    title: "Pretinas de Buzo",
    image: "/product4.png",
    cardPosition: "center center",
    gallery: [
      "/pretinasdebuzo1.png",
      "/pretinaBuzo3.png",
      "/pretinaBuzo1.png",
      "/pretinaBuzo2.png",
      "/pretinaBuzo4.png"
    ],
    applications: [
      "Camperas deportivas",
      "Camperas tipo bomber",
      "Buzos"
    ],
    design: ["Liso", "Rayas", "Patrones", "Letras"],
    materials: ["Algodón", "Poliéster"],
    sizeSectionTitle: "Producción",
    sizeGuideLabel: "Información",
    sizeGuideText:
      "Las cantidades se calculan en función del desarrollo de cuello, cintura y mangas.",
    sizesType: "text",
    sizesText: [
      "Se fabrican en tiras de 120 cm.",
      "Las cantidades se calculan en función de cuello, cintura y mangas.",
      "Esto permite cubrir cada componente de manera precisa según el requerimiento del cliente."
    ]
  }
];