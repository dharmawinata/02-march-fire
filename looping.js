// var angka = 10;
// var n = 5;
// var temp = ''; //variable untuk nampung temporary/sementara

// for(var i = 0; i < n; i++){
//     console.log('x' + (i+1));
//     console.log(angka + (i+1));
// }


// for(var i = 0; i < n; i++){
//     temp = temp + (i+1);
// }
// console.log(temp);
// Hasilnya 12345 sebaris ke kanan


// Menghitung length sebuah kata
// var kode = "abbabbababbaaa";
// var flagA = 0;
// var flagB = 0;

// for (var i = 0; i < kode.length; i++){
//     if(kode[i] === 'a'){
//         flagA++;
//     }else if(kode[i] === 'b'){
//         flagB++;
//     }
// }
// console.log('Jumlah a : ' + flagA);
// console.log('Jumlah b : ' + flagB);


// TASK
/**
 * Input = 5
 * Result :
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 */

// Algoritma
/**
 * 1. Buat variable number
 * 2. Looping dari 1 hingga variable number
 * 3. Cek 1 per 1
 *  3.1 Jika habis dibagi 1 maka ganjil
 *  3.2 Jika habis dibagi 2 maka genap
 */

// PSEUDOCODE
/**
 * STORE number WITH ANY NUMBER
 * 
 * FOR i EQUAL 1 TO number
 *      IF i MOD 2 EQUAL 0
 *          DISPLAY i + 'adalah genap'
 *      IF i MOD 2 EQUAL 1
 *          DISPLAY i + 'adalah ganjil
 *      END IF
 * END FOR
 */

// CODING

// var number = 5
// for (var i = 1; i <= number; i++){
//     if(i % 2 === 1){
//         console.log(i + 'adalah ganjil');
//     }else if(i % 2 === 0){
//         console.log(i + 'adalah genap');
//     }
// }

// LOOPING WHILE --> dipakai untuk looping yang ga tau sampai kapan, tp kita mau berentinya dimana
// var number = 5;
// var i = 1;

// while(i <= number){
//     if(i % 2 === 1){
//         console.log(i + 'adalah ganjil');
//     }else if(i % 2 === 0){
//         console.log(i + 'adalah genap');
//     }
//     i++;
// }

// TASK
// Print num angka ganjil pertama --> 1 3 5 7 9
// var num = 5;
// var i = 1;
// var flag = 0;

// while(num > 0){
//     if(i % 2 === 1){
//         console.log(i);
//         flag++;
//     }
//     if(flag === num){
//         break;
//     }
//     i++;
// }


// NESTED FOR
// Result
/**
 xxx
 xxx
 xxx
 */

//  var temp = '';
//  for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 3; j++){
//         temp += "x";
//     //  console.log(i , j)
//     }
//     console.log(temp);
//     temp = ''
//  }


// ALgoritma
/**
 * Buat variable kalimat
 * Buat variable temp
 * Tambahkan variable temp dengan kalimat  
 * Jika ketemu dengan spasi maka reset temp
 */

var kalimat = "saya makan nasi ayam enak";
var temp = ''

for(var i = 0; i < kalimat.length; i++){
    if(kalimat[i] !== ' '){
        temp += kalimat[i];
    }
    if(kalimat[i] === ' '){
        console.log(temp);
        temp = ''
    }
    if(i === kalimat.length - 1){
        console.log(temp);
        temp = ''
    }
}