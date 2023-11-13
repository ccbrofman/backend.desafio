const express = require("express");

const port = 3000;
const app = express();

const products = [
  {
    id: 1,
    nombre: "Tabla Rígida",
    precio: 18000,
    category: "Extricacion",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Set collar cervical plano",
    precio: 8000,
    category: "Extricacion",
    stock: 20,
  },
  {
    id: 3,
    nombre: "Collar cervical con orificio traqueal",
    precio: 10000,
    category: "Extricacion",
    stock: 10,
  },
  {
    id: 4,
    nombre: "Inmovilizador lateral",
    precio: 12000,
    category: "Extricacion",
    stock: 15,
  },
  {
    id: 5,
    nombre: "Colchon de vacio",
    precio: 45000,
    category: "Extricacion",
    stock: 5,
  },
  {
    id: 6,
    nombre: "Camilla canasta rígida",
    precio: 65000,
    category: "Extricacion",
    stock: 4,
  },
  {
    id: 7,
    nombre: "Camilla plegable",
    precio: 22000,
    category: "Extricacion",
    stock: 15,
  },
  {
    id: 8,
    nombre: "Cincha pelvica sin control vascular",
    precio: 65000,
    category: "Extricacion",
    stock: 5,
  },
  {
    id: 9,
    nombre: "Set de ferulas inflables con inflador",
    precio: 30000,
    category: "Extricacion",
    stock: 20,
  },
  {
    id: 10,
    nombre: "Set de vendas y parches",
    precio: 45000,
    category: "ControlDelSangrado",
    stock: 50,
  },
  {
    id: 11,
    nombre: "Torniquete Táctico",
    precio: 10000,
    category: "ControlDelSangrado",
    stock: 150,
  },
  {
    id: 12,
    nombre: "Gasa para control del sangrado",
    precio: 15000,
    category: "ControlDelSangrado",
    stock: 40,
  },
  {
    id: 13,
    nombre: "Aspirador Manual Adulto/Pediátrico",
    precio: 7000,
    category: "ViaAerea",
    stock: 30,
  },
  {
    id: 14,
    nombre: "Ambu para adultos",
    precio: 8000,
    category: "ViaAerea",
    stock: 40,
  },
  {
    id: 15,
    nombre: "Set de Canulas de Guedel",
    precio: 12000,
    category: "ViaAerea",
    stock: 200,
  },
  {
    id: 16,
    nombre: "Set máscaras laringeas",
    precio: 15000,
    category: "ViaAerea",
    stock: 60,
  },
  {
    id: 17,
    nombre: "Pinza de Magill",
    precio: 5000,
    category: "ViaAerea",
    stock: 50,
  },
  {
    id: 18,
    nombre: "Set de Tubos endotraquales. Medidas varias",
    precio: 11000,
    category: "ViaAerea",
    stock: 30,
  },

  {
    id: 19,
    nombre: "Catéter REBOA",
    precio: 50000,
    category: "ControlDelSangrado",
    stock: 5,
  },
];

app.get("/products", (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const filteredProducts = products.slice(0, limit || 5);
    return res.json({ products: filteredProducts });
  }

  res.json({ products });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === Number(id));

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
