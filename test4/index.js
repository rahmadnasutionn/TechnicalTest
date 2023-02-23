// Buatlah sebuah program untuk mengkonversi mata uang ke USD dari mata uang lain. Nilai kurs dapat berubah sewaktu-waktu, yang dituliskan adalah nilai USD pada saat itu. Untuk simulasi bisa digunakan file untuk menggambarkan aliran data yang terdiri dari:

// a.      KURS untuk mengganti nilai kurs mata uang

// b.      CONV untuk perintah konversi mata uang

const fs = require('fs');

const kurs = JSON.parse(fs.readFileSync('kurs.json', 'utf-8'))

function konversiMataUang(mataUang, jumlah) {
    if (kurs[mataUang]) {
        return (jumlah / kurs[mataUang]).toFixed(2);
    } else {
        return `Kurs untuk mata uang ${mataUang} tidak ditemukan`
    }
}

const perintahKonversi = JSON.parse(fs.readFileSync('konversi.json', 'utf-8'));

perintahKonversi.forEach((perintah) => {
    const hasilKonversi = konversiMataUang(perintah.mataUang, perintah.jumlah);
    console.log(`${perintah.jumlah} ${perintah.mataUang} = ${hasilKonversi} USD`);
})