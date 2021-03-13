// TASK - ALGORITMA & PSEUDOCODE

// 1. Buat algoritma : How to make Indomie
// ALGORITMA
/**
 * Ambil panci
 * Isi dengan air
 * Nyalakan kompor
 * Letakkan panci yang telah diisi air diatas kompor
 * Ambil indomie yang mau dimasak
 * Buka bungkus indomie, lalu buka bumbunya dan tuangkan ke atas piring
 * Masukkan indomie kedalam panci jika air sudah mendidih
 * Tunggu indomie hingga matang lalu tiriskan airnya
 * Campurkan indomie ke dalam piring yang berisi bumbu, aduk hingga merata
 * Sajikan
 */

// 2. Buat algoritma : How to cook Sirloin Steak
// ALGORITMA
/**
 * Ambil sirloin
 * Cuci dengan air dingin di kedua sisinya, kemudian tepuk-tepuk hingga kering dengan tisu tebal
 * Taburkan garam dan merica di kedua sisi
 * Tambahkan bubuk bawang putih,cabai cayenne, bbubk cabai, atau bumbu-bumbu italia untuk variasi
 * Diamkan daging didalam suhu ruangan selama satu jam sebelum dimasak
 * Letakkan wajan diatas kompor dengan api sedang
 * Masukkan satu atau dua sendok teh minyak goreng dan biarkan hingga panas berasap
 * Masukkan daging yang sudah dibumbui tadi
 * Bolak-balik daging di masing-masing sisinya setiap 30 detik hingga matang
 *  -Untuk steak mentah (rare), masak dengan total waktu 1,5 menit tiap sisinya
 *  -Untuk steak setengah mentah (medium rare), masak dengan total waktu 2 menit tiap sisinya
 *  -Untuk steak setengah matang (medium well), masak dengan total waktu 2,5 menit tiap sisinya
 *  -Untuk steak matang (well done), masak dengan total waktu 3 menit tiap sisinya
 * Angkat steak dari wajan dan biarkan selama 3 menit
 * Lalu sajikan
 */

// 3. Buat algoritma dan pseudocode : Luas persegi panjang
// ALGORITMA
/**
 * Tentukan panjang
 * Tentukan lebar
 * Tentukan rumus
 * Rumus : panjang * lebar
 * Tampilkan luas
 */

// PSEUDOCODE
/**
 * STORE panjang WITH ANY NUMBER
 * STORE lebar WITH ANY NUMBER
 * SET luasPersegiPanjang WITH panjang TIMES lebar
 * DISPLAY luasPersegiPanjang
 */

// 4. Buat algoritma dan pseudocode : Volume bola
// ALGORITMA
/**
 * Tentukan jari-jari
 * Tentukan phi
 * Tentukan rumus
 * Rumus : 4/3 * phi * jari-jari * jari-jari * jari-jari
 * Tampilkan volumeBola
 */

// PSEUDOCODE
/**
 * STORE jari-jari WITH ANY NUMBER
 * SET phi = 3.14
 * SET volumeBola WITH 4/3 TIMES phi TIMES jari-jari TIMES jari-jari TIMES jari-jari
 * DISPLAY volumeBola
 */

// 5. Buat algoritma : How to add, commit, push to Github
// ALGORITMA
/**
 * 1. How to add to Github
 *  1.1 buka terminal 
 *  1.2 masukkan syntax berikut : git add .
 *  1.3 lalu tekan ENTER
 * 
 * 2. How to commit to Github
 *  2.1 buka terminal
 *  2.2 masukkan syntax berikut : git commit -m "tulis keterangannya"
 *  2.3 lalu tekan ENTER
 * 
 * 3. How to push to Github
 *  3.1 buka terminal
 *  3.2 masukkan syntax berikut : git push origin main
 *  3.3 lalu tekan ENTER
 */ 


//  TASK - VARIABLES, OPERATIONS, JAVASCRIPT

//  1. Buat algoritma, pseudocode, dan codingan : Keliling persegi

// ALGORITMA
/**
 * Tentukan sisi
 * Tentukan rumus
 * Rumus : 4 * sisi
 * Tampilkan kelilingPersegi
 */

// PSEUDOCODE
/**
 * STORE sisi WITH ANY NUMBER
 * SET rumus WITH 4 TIMES sisi
 * DISPLAY kelilingPersegi
 */

// CODING
// var sisi = 6;
// var kelilingPersegi = 4 * sisi;
// console.log(kelilingPersegi);

 
//  2. Buat algoritma, pseudocode, dan codingan : Luas permukaan balok

// ALGORITMA
/**
 * Tentukan panjang
 * Tentukan lebar
 * Tentukan tinggi
 * Tentukan rumus
 * Rumus : 2 ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
 * Tampilkan luasPermukaanBalok
 */

// PSEUDOCODE
/**
 * STORE panjang WITH ANY NUMBER
 * STORE lebar WITH ANY NUMBER
 * STORE tinggi WITH ANTY NUMBER
 * SET rumus WITH 2 * ((panjang TIMES lebar) ADD (panjang TIMES tinggi) ADD (lebar TIMES tinggi))
 * Display luasPermukaanBalok
 */

// CODING
// var panjang = 10;
// var lebar = 4;
// var tinggi = 2;

// var luasPermukaanBalok = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
// console.log(luasPermukaanBalok);

 
//  3.  Buat kodingan, untuk menjawab pertanyaan " Who are you ?" menggunakan variable.
 
//Code here
// var nama = "Vincent";
// var age = 28;
 
// //Output
// //My name is Vincent, and i'm 28 years old.
// console.log("My name is" + " " + nama + ", and i'm" + " " + age + " " + "years old");


//  4. Buat kodingan, untuk membuat random number. Range number 1 - 10.
 
//Code here
// var number = Math.floor((Math.random() * 10) + 1);
// console.log(number);
 
//Output 
///Your number is 1
//Your number is 5

//  5. Buat kodingan, untuk membuat Nomor Induk mahasiswa. 
// Rumus : <Nama_Mahasiswa><Nomor_Absen><Lulus/Tidak> 
// Contoh : James15true dengan syarat nomor absen random, Range 1 - 50

var nim;
var nama;
var nomor;
var keterangan;
var rumus;

if(nim = "James"){
    Math.floor(Math.random() * 50) + 1;
    console.log("True");
}
