//soal 1
var string1 = "saya";
var string2 = "senang";
var str2 = string2.charAt(0).toUpperCase() + string2.slice(1);
var string3 = "belajar";
var string4 = "javascript";
var str4up = string4.toUpperCase();
console.log(string1.concat(" ",str2," ",string3," ",str4up));

//soal 2
var kataPertama = "1";
var number1 = Number(kataPertama);
var kataKedua = "2";
var number2 = Number(kataKedua);
var kataKetiga = "4";
var number3 = Number(kataKetiga);
var kataKeempat = "5";
var number4 = Number(kataKeempat);
console.log(number1+number2+number3+number4);

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); 
var kataKetiga = kalimat.substring(15,18);  
var kataKeempat = kalimat.substring(19,24); 
var kataKelima = kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//soal 4
var nilai=98
if(nilai >=80) {console.log("Index A")
} else if (nilai >=70 && nilai<80) {
    console.log("Index B")
} else if (nilai >=60 && nilai<70) {
    console.log("Index C")
} else if (nilai >=50 && nilai <50) {
    console.log("Index D")
} else if (nilai<50){
    console.log("Index E")
}

//soal 5
var tanggal = 28;
var bulan = 6;
var stringbulan = ""
var tahun = 1990;
switch( bulan )
{
    case 1: stringbulan = "Januari"; break;
    case 2: stringbulan = "Februari"; break;
    case 3: stringbulan = "Maret"; break;
    case 4: stringbulan = "April"; break;
    case 5: stringbulan = "Mei"; break;
    case 6: stringbulan = "Juni"; break;
    case 7: stringbulan = "Juli"; break;
    case 8: stringbulan = "Agustus"; break;
    case 9: stringbulan = "September"; break;
    case 10: stringbulan = "Oktober"; break;
    case 11: stringbulan = "November"; break;
    case 12: stringbulan = "Desember"; break;
}
console.log(tanggal+" "+stringbulan+" "+tahun)