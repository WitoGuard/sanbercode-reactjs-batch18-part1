//soal 1
function halo() {
    return "Halo Sanber!";
}
console.log(halo());

//soal 2
function kalikan(a,b) { 
    return a * b;
} 
    var num1 = 12;
    var num2 = 4;
    var hasilKali = kalikan(num1, num2);
  
  console.log(hasilKali)

//soal 3
function introduce(a, b, c, d) {
    return 'Nama saya '+ a +' , umur saya '+ b + ' ,alamat saya di ' + c + ' ,dan saya punya hobby yaitu ' + d
  }
  
  var name = "John"
  var age = 30
  var address = "Jalan belum jadi"
  var hobby = "Gaming!"
   
  var perkenalan = introduce(name, age, address, hobby)
  console.log(perkenalan)

//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var daftarpeserta = {
    Nama: "Asep",
    "Jenis Kelamin": "Laki-laki",
    hobby: "baca buku",
    "tahun lahir": 1992
}
console.log(daftarpeserta)

//soal 5
var buah = [{nama: "strawberry", warna: "merah", 'ada bijinya': "tidak",harga: 9000}, {nama: "jeruk", warna: "oranye", 'ada bijinya': "ada",harga: 8000},{nama: "Semangka", warna: "Hijau & Merah", 'ada bijinya': "ada",harga: 10000},{nama: "Pisang", warna: "Kuning", 'ada bijinya': "tidak",harga: 5000}]
console.log(buah[0])

//soal 6
var dataFilm = [];
function namaFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
  return dataFilm;
}
console.log(namaFilm("Walking Dead",180,"Horror",2014))