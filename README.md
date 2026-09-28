# Jelajah Tata Surya

Website edukasi tentang tata surya. Repositori ini baru berisi **halaman beranda**.
Halaman Planet dan Misi Antariksa dikerjakan menyusul.

## Struktur berkas

```
jelajah-tata-surya/
├── index.html          <- beranda (sudah jadi)
├── planet.html         <- halaman 2, dikerjakan teman
├── misi.html           <- halaman 3, dikerjakan bersama
├── css/
│   ├── style.css       <- milik bersama, jangan diubah sendirian
│   ├── beranda.css     <- khusus index.html
│   ├── planet.css      <- khusus planet.html
│   └── misi.css        <- khusus misi.html
├── js/
│   └── main.js         <- menu mobile + fakta, aman dipanggil semua halaman
└── assets/
    ├── logo.svg
    ├── orbit.svg
    └── planet/*.svg
```

## Aturan supaya kode nyambung

1. **Satu file CSS bersama, satu file CSS per halaman.**
   Setiap halaman memuat `style.css` lebih dulu, baru CSS miliknya sendiri:

   ```html
   <link rel="stylesheet" href="css/style.css">
   <link rel="stylesheet" href="css/planet.css">
   ```

2. **Jangan menulis gaya khusus halaman di `style.css`.**
   File itu hanya untuk token warna, tipografi, tombol, navbar, dan footer.
   Kalau butuh mengubahnya, kabari dulu supaya tampilan halaman lain tidak ikut bergeser.

3. **Pakai prefiks kelas per halaman.**
   Beranda memakai `hero__`, `pembuka__`, `fakta__`, `planet__`, `lanjut__`.
   Halaman Planet sebaiknya memakai `pl-`, halaman Misi memakai `ms-`.
   Ini mencegah nama kelas bertabrakan saat file digabung.

4. **Salin navbar dan footer apa adanya** dari `index.html`.
   Cukup pindahkan kelas `is-aktif` ke tautan halaman yang sedang dibuka.

5. **Pakai token warna, jangan hardcode hex.**

   ```css
   .pl-kartu { background: var(--panel); color: var(--kapur); }
   ```

   Token yang tersedia: `--tinta`, `--tinta-tua`, `--panel`, `--garis`,
   `--kabut`, `--kapur`, `--kuningan`, `--biru-es`, `--serif`, `--sans`,
   `--lebar`, `--sela`, `--lengkung`.

6. **Komponen siap pakai:** `.wrap` (pembatas lebar konten),
   `.btn` + `.btn--utama` / `.btn--garis` / `.btn--kecil`.

7. **Gambar disimpan di `assets/`.** Semua ilustrasi dibuat sendiri dalam format
   SVG, jadi ukurannya kecil, tetap tajam saat di-zoom, dan bebas masalah lisensi.
   Tambahkan aset baru di `assets/` juga, jangan memakai tautan gambar dari luar.

8. **JavaScript** cukup satu file. `main.js` sudah mengecek keberadaan elemen
   sebelum menjalankan fitur, jadi aman dipanggil dari halaman mana pun.

## Cara menjalankan

Buka `index.html` langsung lewat browser. Untuk hasil paling mirip versi daring,
jalankan server lokal dari folder proyek:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Sumber data

Angka dan fakta pada halaman beranda mengacu pada:

- NASA Science, Solar System — https://science.nasa.gov/solar-system/
- NASA Planetary Fact Sheet (NSSDC) — https://nssdc.gsfc.nasa.gov/planetary/factsheet/
- IAU, definisi planet hasil sidang umum 2006 — https://www.iau.org/public/themes/pluto/
