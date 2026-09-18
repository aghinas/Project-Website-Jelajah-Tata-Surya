(function () {
  "use strict";

  /* ---------- 1. Tombol menu untuk layar kecil ---------- */
  var tombolMenu = document.querySelector(".site-nav__tombol");
  var menu = document.getElementById("menu-utama");

  if (tombolMenu && menu) {
    tombolMenu.addEventListener("click", function () {
      var terbuka = menu.classList.toggle("is-buka");
      tombolMenu.setAttribute("aria-expanded", String(terbuka));
    });
  }

  /* ---------- 2. Pergantian fakta ---------- */
  var daftar = document.getElementById("fakta-daftar");
  var teks = document.getElementById("fakta-teks");
  var nomor = document.getElementById("fakta-nomor");
  var tombolFakta = document.getElementById("fakta-tombol");

  if (!daftar || !teks || !nomor || !tombolFakta) return;

  var fakta = Array.prototype.map.call(
    daftar.querySelectorAll("li"),
    function (li) {
      return li.textContent.trim();
    },
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
