# Tugas 1 RESTful API Express

## Identitas

Nama: Nurul Naima Sabandia

NIM: 2428240070

Kelas: SI5B

Topik 15: Toko Olahraga - Sepatu

Endpoint: /shoes

## Deskripsi

RESTful API untuk mengelola data sepatu pada toko olahraga.

API ini menyediakan fitur:

- Menampilkan seluruh data sepatu
- Menampilkan data sepatu berdasarkan ID
- Menambahkan data sepatu
- Mengubah data sepatu
- Menghapus data sepatu
- Filter data berdasarkan merek

## Endpoint

### GET /shoes

Menampilkan seluruh data sepatu.

### GET /shoes/:id

Menampilkan data sepatu berdasarkan ID.

Contoh:

/shoes/1

### GET /shoes?merek=Ortuseight

Menampilkan data sepatu berdasarkan merek.

Contoh:

/shoes?merek=Ortuseight

### POST /shoes

Menambahkan data sepatu.

Contoh request:

{
  "namaProduk": "Sepatu Lari Hyperblast",
  "merek": "Ortuseight",
  "ukuran": 42,
  "harga": 529000,
  "stok": 10
}

### PUT /shoes/:id

Mengubah data sepatu berdasarkan ID.

### DELETE /shoes/:id

Menghapus data sepatu berdasarkan ID.

## Field Data

| Field | Tipe | Keterangan |
|---|---|---|
| namaProduk | string | Nama produk sepatu |
| merek | string | Merek sepatu |
| ukuran | number | Ukuran sepatu |
| harga | number | Harga sepatu |
| stok | number | Jumlah stok sepatu |

## Menjalankan Project

Install dependency:

npm install

Menjalankan server:

npm run dev

Server berjalan pada:

http://localhost:3000

## Repository

Repository GitHub:

https://github.com/nurulnaimasabandia-70/tugas1-restful-2428240070

## Deployment

Aplikasi dideploy menggunakan Vercel.

Link Vercel:

https://tugas1-restful-2428240070.vercel.app/