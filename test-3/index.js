const buah = ["Apel", "Mangga", "Mangga", "apel", "mangga"];

const kemunculanBuah = {};
buah.forEach((namaBuah) => {
    const buahKecil = namaBuah.toLowerCase();
    if (kemunculanBuah[buahKecil]) {
        kemunculanBuah[buahKecil]++
    } else {
        kemunculanBuah[buahKecil]
    }
})

const urutanBuah = Object.entries(kemunculanBuah).sort(([, jumlahA], [, jumlahB]) => jumlahB - jumlahA)
    .reduce((obj, [kunci, nilai]) => {
        obj[kunci] = nilai;
        return obj;
    }, {});

console.log(urutanBuah);