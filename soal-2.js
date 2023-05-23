const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];
const makananFavorit = ["Ikan", "Wortel", "Jagung"];

const gabungArray = (arr1, arr2) => [...arr1, ...arr2];

const makananKesukaan = () => {

    const [ikan, wortel, jagung] = makananFavorit
    const [kucing, kelinci, ayam] = hewanJinak
    return ikan + " adalah makanan favorit " + kucing + "\n" + wortel + " adalah makanan favorit " + kelinci + "\n" + jagung + " adalah makanan favorit " + ayam
};

console.log(gabungArray(hewanBuas, hewanJinak));

setTimeout(() => {
    console.log(makananKesukaan(hewanJinak));
}, 5000)