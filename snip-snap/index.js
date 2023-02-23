// Tulislah sebuah program yang menuliskan ke layar (print) angka dari 1 sampai 100, tetapi untuk setiap kelipatan 3 diganti dengan menuliskan kata “snip”, setiap kelipatan 5 diganti menuliskan “snap”, dan setiap kelipatan 3 dan 5 menuliskan “snip-snap”. Contoh output:

// 1,2,snip,4,snap,snip,7,8,snip,snap,11,snip,13,14,snip-snap, ...dst sampai 100


for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log('snip-snap');
    } else if (index % 3 === 0) {
        console.log('snip');
    } else if (index % 5 === 0) {
        console.log('snap');
    } else {
        console.log(index);
    }
}