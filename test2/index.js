// Diketahui sebuah array terdiri dari pasangan bilangan, kecuali satu yang tidak berpasangan. Buatlah program yang menentukan posisi bilangan tersebut dalam array.

// contoh array: [102,32,99,32,45,102,45,67,67,100,100]

// maka bilangan yang tidak berpasangan adalah 99 pada posisi ke-3.

function cariBilanganTidakBerpasangan(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        result ^= array[index];
    }
    for (let index = 0; index < array.length; index++) {
        if ((array[index] ^ result) === 0) {
            return index;
        }
    }
    return -1;
}

const array = [102, 32, 99, 32, 45, 102, 45, 67, 67, 100, 100];
const posisiBilanganTidakBerpasangan = cariBilanganTidakBerpasangan(array);
console.log(`Bilangan tidak berpasangan berada pada index ${posisiBilanganTidakBerpasangan}`);