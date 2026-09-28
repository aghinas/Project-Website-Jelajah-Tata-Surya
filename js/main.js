/* =========================================================
   main.js — dipakai semua halaman.
   Bagian 1 (menu) berjalan di halaman mana pun.
   Bagian 2 (fakta) otomatis dilewati kalau elemennya tidak ada,
   jadi aman dipanggil dari planet.html maupun misi.html.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Pergantian fakta ---------- */
  var daftar = document.getElementById("fakta-daftar");
  var teks = document.getElementById("fakta-teks");
  var nomor = document.getElementById("fakta-nomor");
  var tombolFakta = document.getElementById("fakta-tombol");

  if (!daftar || !teks || !nomor || !tombolFakta) return;

  var fakta = Array.prototype.map.call(
    daftar.querySelectorAll("li"),
    function (li) { return li.textContent.trim(); }
  );

  if (fakta.length === 0) return;

  var indeks = 0;

  function tampilkan(i) {
    indeks = (i + fakta.length) % fakta.length;
    teks.textContent = fakta[indeks];
    nomor.textContent = "Fakta " + (indeks + 1) + " dari " + fakta.length;
  }

  tombolFakta.addEventListener("click", function () {
    tampilkan(indeks + 1);
  });

  tampilkan(0);
})();
