// ## Cek ganjil dan genap

// Input : 5

// Output : 5 adalah ganjil

// Algoritma
/**
 1. Tentukan variable number
 2. Jika 
    2.1 number dibagi 2 adalah 0 maka bilangan genap
    2.2 number dibagi 2 adalah 1 maka bilangan ganjil
 3. Tampilkan number adalah bilangan ganjil
 */

//  Pseudocode
/**
 * STORE number WITH ANY NUMBER
 * IF 
 *  - number MODULUS 2 EQUAL TO 0 bilangan genap
 *  - number MODULUS 2 EQUAL TO 1 bilangan ganjil
 * DISPLAY number 
 */

// Coding
// var number = 6;
// if(number % 2 === 0){
//     console.log(number + " adalah bilangan genap");
// }else if(number % 2 === 1){
//     console.log(number + "adalah bilangan ganjil");
// }

// ## Score student
// Dalam sebuah sekolah, seorang guru diminta membuat score dan grade. Dengan syarat :
// Nilai 100 - 85 di beri grade A
// Nilai 84 - 70 diberi grade B
// Nilai 69 - 50  diberi grade C
// nilai 49 - 30 diberi grade D
// nilai 29 - 0 diberi grade E

// Algoritma
/**
 * Tentukan variable nilai
 * Tentukan variable grade
 * Jika :
 *  - nilai 100 - 85 di beri grade A
 *  - nilai 84 - 70 di beri grade B
 *  - nilai 69 - 50 di beri grade C
 *  - nilai 49 - 30 di beri grade D
 *  - nilai 29 - 0 di beri grade E
 * Tampilkan nilai
 */

// Pseudocode
/**
 * STORE nilai WITH ANY NUMBER
 * STORE grade WITH ANY STRING
 * IF :
 *  - nilai BETWEEN 100 - 85 THEN grade A
 *  - nilai BETWEEN 84 - 70 THEN grade B
 *  - nilai BETWEEN 69 -50 THEN grade C
 *  - nilai BETWEEN 49 - 30 THEN grade D
 *  - nilai BETWEEN 29 - 0 THEN grade E
 * DISPLAY nilai
 */

// Coding
// var nilai = 60;
// var grade;

// if(nilai <= 100 && nilai >= 85){
//    grade = 'A';
// }else if(nilai <= 84 && nilai >= 70){
//    grade = 'B';
// }else if(nilai <= 69 && nilai >= 50){
//    grade = 'C';
// }else if(nilai <= 49 && nilai >= 30){
//    grade = 'D';
// }else if(nilai <= 29 && nilai >= 0){
//    grade = 'C';
// }
// console.log("Student mendapatkan grade : " + grade);


// ## Tiket masuk 

// Dalam sebuah wahana, terdapat syarat masuk untuk pengunjung. Dengan syarat :

// - Umur harus di atas 15, jika kurang maka tidak boleh masuk
// - Jika uang kurang dari 50000, maka print "Uang tidak cukup"
// - Jika lebih maka boleh masuk

// Algoritma
/**
 * Buat variable usia
 * Buat variable uang
 * Kondisi :
 *  - usia harus di atas 15, jika kurang maka tidak boleh masuk
 *  - Jika uang kurang dari 50000, maka print "Uang tidak cukup"
 *  - Jika lebih maka boleh masuk
 */

// Pseudocode
/**
 * STORE usia WITH ANY NUMBER
 * STORE uang WITH ANY NUMBER
 * 
 * Usia :
 *  IF usia EQUAL OR MORE THAN 15 boleh masuk
 *  IF usia LESS THAN 15 tidak boleh masuk
 * 
 * Uang :
 * IF uang LESS THAN 5000
 *      DISPLAY uang tidak cukup
 * IF uang EQUAL OR MORE THAN 5000
 *      DISPLAY boleh masuk
 * 
 */

// Coding
// var usia = 10;
// var uang = 2000;

// if(usia >= 15 && uang >= 5000){
//     console.log("Silahkan masuk");
// }else if(usia >= 15 && uang < 5000){
//     console.log("Uang tidak cukup");
// }else if(usia < 15 && uang >= 5000){
//     console.log("Usia dibawah 15 tidak boleh masuk");
// }else if(usia < 15 && uang < 5000){
//     console.log("Usia dibawah 15 dan uang tidak cukup");
// }else{
//     console.log("Periksa kembali inputan anda");
// }


// ## Looping kelipatan 3 dan 5

// Input : 15

// Output :
// 1
// 2
// 3 adalah kelipatan 3
// 4
// 5 adalah kelipatan 5
// 6 adalah kelipatan 3
// 7
// 8
// 9 adalah kelipatan 3
// 10 adalah kelipatan 5
// 11
// 12 adalah kelipatan 3
// 13
// 14
// 15 adalah kelipatan 3 dan 5

// Algoritma
/**
 * Buat variable angka
 * Looping dari 1 hingga variable angka
 * Cek 1 per 1
 *  - Tampilkan angka
 *  - Jika habis dibagi 3, maka bilangan kelipatan 3
 *  - Jika habis dibagi 5, maka bilangan kelipatan 5
 *  - Jika habis dibagi 3 dan 5, maka bilangan kelipatan 3 dan 5
 */

// Pseudocode
/**
 * STORE angka WITH ANY NUMBER
 * FOR i EQUAL TO 1
 *      DISPLAY i
 *      IF i MOD 3 EQUAL TO 0
 *          DISPLAY i + 'adalah bilangan kelipatan 3'
 *      IF i MOD 5 EQUAL TO 0
 *          DISPLAY i + 'adalah bilangan kelipatan 5'
 *      IF i MOD 3 AND MOD 5 EQUALTO 0
 *          DISPLAY i + 'adalah bilangan kelipatan 3 dan 5
 *      END IF
 * END FOR
 */

// Coding

for(var i = 1; i <= 15; i++){
    console.log(i);
    if(i % 3 === 0){
        console.log(i + ' adalah kelipatan 3');
    }
    else if(i % 5 === 0){
        console.log(i + ' adalah kelipatan 5');
    }
    else if(i % 3 && i % 5 === 0){
        console.log(i + ' adalah kelipatan 3 dan 5');
    }
}


// ## Looping segitiga

// Input : 5

// Output :

// *
// **
// ***
// var hasil = '';

// for(var i = 1; i < 3; i++){
//     for(var j = 1; j <= i; j++){
//         console.log(hasil +='*');
//     }
// }