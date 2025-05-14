// Efek dinamis: header berubah warna setiap 3 detik
const header = document.querySelector("header");
const colors = ['#00796b', '#388e3c', '#0288d1', '#f57c00'];
let index = 0;

setInterval(() => {
  index = (index + 1) % colors.length;
  header.style.backgroundColor = colors[index];
}, 3000);
