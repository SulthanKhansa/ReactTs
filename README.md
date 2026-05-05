# Project Invofest Monorepo - React & Express

Repo ini telah diatur ulang menjadi struktur **Monorepo** untuk memisahkan logika Frontend dan Backend namun tetap dapat dijalankan secara bersamaan dari satu tempat.

## Struktur Folder
- **`/frontend`**: Aplikasi React + TypeScript + Tailwind CSS (Invofest UI).
- **`/backend`**: Server API menggunakan Express + TypeScript + ts-node-dev.

## Fitur Utama Navigasi
Aplikasi ini menggunakan sistem **Dynamic SPA Routing** dengan bar navigasi floating yang memungkinkan perpindahan antar pertemuan secara instan.

## Preview Tugas (Frontend)

### Pertemuan 5: Dashboard Admin (CMS Latihan)
![Dashboard Admin](./frontend/src/pertemuan-5/pertemuan-5.png)

## Cara Inisialisasi
1. Pastikan sudah install Node.js.
2. Jalankan `npm install` di root folder.
3. Jalankan `npm run dev` untuk menjalankan **Frontend** dan **Backend** secara bersamaan.

## Script Perintah (Root)
- `npm run dev`: Menjalankan server frontend (Vite) dan backend (Express) secara paralel.
- `npm run frontend`: Hanya menjalankan frontend.
- `npm run backend`: Hanya menjalankan backend.
