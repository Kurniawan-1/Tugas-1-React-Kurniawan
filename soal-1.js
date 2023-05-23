const mahasiswa = {
    nama: 'Kurniawan',
    nim: '02032111030',
    email: 'kurniawanaja784@gmail.com'
};

const { nama, nim, email } = mahasiswa;

console.log(nama);
console.log(nim);
console.log(email);

const teman1 = ['Anggi', 'Agus'];
const teman2 = ['Riyanda', 'Toyyib'];
const teman3 = ['Bagas', 'Fadli'];

const teman = [...teman1, ...teman2, ...teman3];
console.log(teman);