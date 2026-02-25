// Mengambil elemen dengan ID ucapan
const elemenUcapan = document.getElementById('ucapan');

// Mendapatkan jam saat ini
const jam = new Date().getHours();
let ucapan = 'Selamat Datang!';

// Menentukan ucapan berdasarkan waktu
if (jam >= 5 && jam < 12) {
    ucapan = 'Selamat Pagi, Kelas!';
} else if (jam >= 12 && jam < 15) {
    ucapan = 'Selamat Siang, Kelas!';
} else if (jam >= 15 && jam < 18) {
    ucapan = 'Selamat Sore, Kelas!';
} else {
    ucapan = 'Selamat Malam, Kelas!';
}

// Menampilkan ucapan di HTML
elemenUcapan.innerText = ucapan;
