// Jika nilai dibawah 100, maka tidak maksimal
// Jika nilai diatas 100, maka maksimal

// var nilai = 75;
// if(nilai < 100){
//     console.log("Tidak Maksimal");
// } else if(nilai > 100){
//     console.log("Maksimal");
// }

// Buat aplikasi sederhana tentang ticket
/**
 * Jika status : Anak, harga ticket Rp. 10000
 * Jika status : Remaja, harga ticket Rp. 15000
 * 
 * Jika status : Dewasa, harga ticket Rp. 30000
 */
// Result : Status : Anak, Rp. 10000

// Algoritma
/**
 * 1. Buat variable status
 * 2. Buat variable ticket
 * 3. Cek status
 *  3.1. Jika Anak, maka masukkan 10000 ke dalam ticket
 * 3.2. Jika Remaja, maka masukkan 15000 ke dalam ticket
 * 3.1. Jika Dewasa, maka masukkan 30000 ke dalam ticket
 * 4. Tampilkan result
 */

 // Pseudocode
 /**
  * STORE status WITH ANY STRING
  * STORE ticket WITH ANY NUMBER
  * 
  * IF status EQUAL 'Anak'
  *     SET ticket WITH 10000
  * ELSE IF status EQUAL 'Remaja'
  *     SET ticket WITH 15000
  * ELSE IF status EQUAL 'Dewasa'
  *     SET ticket WITH 30000
  * END IF
  * 
  * DISPLAY 'Status : ' + status + ', Rp. ' + ticket
  */

  // Coding
//   var status = 'Anak';
//   var ticket;

//   if(status === 'Anak'){
//       ticket = 10000;
//   } else if(status === 'Remaja'){
//       ticket = 15000;
//   }else if(status === 'Dewasa'){
//       ticket = 30000;
//   }

//   console.log('Status : ' + status + ', Rp. ' + ticket);
 

// Seorang HRD ingin hire karyawan
// Algoritma
/**
 * 1. Buat variable loker
 * 2. Buat variable gaji
 * 3. Buat variable pengalaman
 * 
 * 4. Jika junior :
 *  4.1 jika pengalaman kurang dari 2, maka gaji Rp. 4.000.000
 *  4.2 jika pengalaman antara 2 sampai 5, maka gaji Rp. 4.000.000
 *  4.3 jika pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 * 
 * 5. Jika middle :
 *  5.1jika pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 *  5.2 Jika middle, jika pengalaman kurang dari 2, maka gaji Rp. 6.500.000
 *  5.3 Jika middle, jika pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 * 
 *  3.7 Jika senior, jika pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 *  3.8 Jika senior, jika pengalaman kurang dari 2, maka gaji Rp. 9.000.000
 *  3.9 Jika senior, jika pengalaman kurang dari 2, maka gaji Rp. 10.000.000
 */

// PSEUDOCODE
/**
 * STORE loker WITH ANY STRING
 * STORE gaji WITH ANY NUMBER
 * STORE pengalaman WITH ANY NUMBER
 * 
 * IF loker EQUAL junior
 *      IF pengalaman LESS THAN 2
 *          SET gaji
 *      ELSE IF pengalaman BETWEEN 2 AND 5
 *          SET gaji
 *      ELSE 
 *          SET GAJI
 * 
 * IF loker EQUAL middle
 *      IF pengalaman LESS THAN 2
 *          SET gaji
 *      ELSE IF pengalaman BETWEEN 2 AND 5
 *          SET gaji
 *      ELSE 
 *          SET GAJI
 * 
 * IF loker EQUAL senior
 *      IF pengalaman LESS THAN 2
 *          SET gaji
 *      ELSE IF pengalaman BETWEEN 2 AND 5
 *          SET gaji
 *      ELSE 
 *          SET GAJI
 */

// Coding
var loker = 'middle';
var pengalaman = 4;
var gaji;

switch(loker){
    case 'junior' :
        if(pengalaman < 2){
            gaji = 3000000;
        }else if(pengalaman >= 2 && pengalaman <= 5){
            gaji = 4000000
        }else if(pengalaman > 5){
            gaji = 5000000
        }
    break;

    case 'middle' :
        if(pengalaman < 2){
            gaji = 5500000;
        }else if(pengalaman >= 2 && pengalaman <= 5){
            gaji = 6500000
        }else if(pengalaman > 5){
            gaji = 7500000
        }
    break;

    case 'senior' :
        if(pengalaman < 2){
            gaji = 7500000;
        }else if(pengalaman >= 2 && pengalaman <= 5){
            gaji = 9000000
        }else if(pengalaman > 5){
            gaji = 10000000
        }
    break;
}
console.log("Salary adalah : " + gaji);
