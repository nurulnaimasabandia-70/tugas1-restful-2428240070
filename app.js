const express = require("express");

const app = express();

// Membuat tampilan JSON lebih rapi dan turun ke bawah
app.set("json spaces", 2);

// Middleware untuk membaca JSON
app.use(express.json());

// Data Awal
// Topik 15 - Toko Olahraga: Sepatu
// Nama: Nurul Naima Sabandia

let shoes = [
  {
    id: 1,
    namaProduk: "Sepatu Lari Hyperblast",
    merek: "Ortuseight",
    ukuran: 42,
    harga: 529000,
    stok: 10
  },
  {
    id: 2,
    namaProduk: "Sepatu Futsal Catalyst",
    merek: "Specs",
    ukuran: 41,
    harga: 449000,
    stok: 8
  },
  {
    id: 3,
    namaProduk: "Sepatu Training Power",
    merek: "League",
    ukuran: 40,
    harga: 399000,
    stok: 12
  }
];

let nextId = 4;


// GET /

app.get("/", (req, res) => {
  res.json({
    nama: "Nurul Naima Sabandia",
    nim: "2428240070",
    kelas: "SI5B",
    topik: 15,
    resource: "shoes",
    deskripsi: "RESTful API Toko Olahraga - Sepatu",
    endpoints: [
      "GET /shoes",
      "GET /shoes/:id",
      "POST /shoes",
      "PUT /shoes/:id",
      "DELETE /shoes/:id",
      "GET /shoes?merek=Ortuseight"
    ]
  });
});


// Get /shoes

app.get("/shoes", (req, res) => {
  const { merek } = req.query;


  if (merek) {
    const hasil = shoes.filter(
      (shoe) =>
        shoe.merek.toLowerCase() === merek.toLowerCase()
    );

    return res.status(200).json(hasil);
  }

  res.status(200).json(shoes);
});


// GET /shoes/:id

app.get("/shoes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const shoe = shoes.find((item) => item.id === id);

  if (!shoe) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  res.status(200).json(shoe);
});


// POST /shoes

// {
//   "namaProduk": "Sepatu Basket Pro",
//   "merek": "Nike",
//   "ukuran": 42,
//   "harga": 899000,
//   "stok": 5
// }

app.post("/shoes", (req, res) => {
  const {
    namaProduk,
    merek,
    ukuran,
    harga,
    stok
  } = req.body;

  if (
    namaProduk === undefined ||
    namaProduk === "" ||
    merek === undefined ||
    merek === "" ||
    ukuran === undefined ||
    ukuran === "" ||
    harga === undefined ||
    harga === ""
  ) {
    return res.status(400).json({
      status: "error",
      message:
        "Field namaProduk, merek, ukuran, dan harga wajib diisi",
      data: null
    });
  }

  // membuat data baru
  const baru = {
    id: nextId++,
    namaProduk,
    merek,
    ukuran,
    harga,
    stok
  };

  // masukkan ke array
  shoes.push(baru);

  // response berhasil
  res.status(201).json({
    status: "success",
    message: "Data sepatu berhasil ditambahkan",
    data: baru
  });
});


// PUT /shoes/:id

app.put("/shoes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = shoes.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  const {
    namaProduk,
    merek,
    ukuran,
    harga,
    stok
  } = req.body;

  if (
    namaProduk === undefined ||
    namaProduk === "" ||
    merek === undefined ||
    merek === "" ||
    ukuran === undefined ||
    ukuran === "" ||
    harga === undefined ||
    harga === ""
  ) {
    return res.status(400).json({
      status: "error",
      message:
        "Field namaProduk, merek, ukuran, dan harga wajib diisi",
      data: null
    });
  }

  // data baru
  const diperbarui = {
    id: id,
    namaProduk,
    merek,
    ukuran,
    harga,
    stok
  };

  // mengganti data lama
  shoes[index] = diperbarui;

  // response berhasil
  res.status(200).json({
    status: "success",
    message:
      `Data sepatu dengan id ${id} berhasil diperbarui`,
    data: diperbarui
  });
});


// DELETE /shoes/:id

app.delete("/shoes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Cari index data
  const index = shoes.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  shoes.splice(index, 1);

  // response berhasil
  res.status(200).json({
    status: "success",
    message:
      `Data sepatu dengan id ${id} berhasil dihapus`,
    data: null
  });
});


// CATCH-ALL 404

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint tidak ditemukan",
    data: null
  });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(
      `Server berjalan di http://localhost:${PORT}`
    );
  });
}

module.exports = app;