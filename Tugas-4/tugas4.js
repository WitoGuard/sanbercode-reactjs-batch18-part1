//Soal 1
console.log('LOOPING PERTAMA')
for (var i = 2; i <=20; i+=2) {
    console.log(i+ ' - I love Coding')
}
console.log('LOOPING KEDUA')
for (var i=20; i >0; i-=2) {
    console.log(i+ ' - I will become a frontend developer')
}

//soal 2
for (var angka = 1; angka <=20; angka++)
if (angka % 3 == 0 && angka % 2 == 1 )  {
    console.log(angka+ ' - i love coding')
}
else if (angka % 2 === 1 ) {
    console.log(angka+ ' - Santai')
}

else {console.log(angka+ ' - Berkualitas')}

//soal 3
var s = '';
for (var i = 0; i <7; i++) {
    for ( var j = 0; j <=i; j++) {
        s += '#';
    }
    s += '\n';
}
console.log(s)

//soal 4
var kalimat="saya sangat senang belajar javascript" 
var array = kalimat.split(" ")
console.log(array)

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
for (i=0; i<daftarBuah.length;i++)
console.log(daftarBuah[i]) 