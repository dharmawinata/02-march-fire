// Array -> kumpulan variable yag memiliki index

// let a = 10;
// let b = 12;
// let c = 15;

// let numbers = [10,12,15];
// let items = ["pc","hp","laptop"];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// console.log(items[0][0]);
// console.log(items[1][0]);
// console.log(items[2][0]);

// for(let i = 0; i < number.length; i++){
//     console.log(numbers[i]);
// }


// ARRAY 2 DIMENSI
// let desserts = [
//     ["Brownies",150000,"cake"],
//     ["Chocolate cookie",100000,"cookie"],
//     ["Aice",50000,"ice cream"]
// ];
// // ambil array 'cake'
// console.log(desserts[0][2]);

// let desserts = [
//     ["Brownies",150000,"cake"],
//     ["Chocolate cookie",100000,"cookie"],
//     ["Aice",50000,"ice cream"]
// ];

// let dessertsCategorize = [];
// let tempName = [];
// let tempPrice = [];
// let tempType = [];

// for(let i = 0; i < desserts.length; i++){
//     tempName.push(desserts[i][0]);
//     tempPrice.push(desserts[i][1]);
//     tempType.push(desserts[i][2]);
// }

// dessertsCategorize.push(tempName);
// dessertsCategorize.push(tempPrice);
// dessertsCategorize.push(tempType);


// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let result = [];
// let ganjil = [];
// let genap = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         genap.push(numbers[i]);
//     }else if(numbers[i] % 2 === 1){
//         ganjil.push(numbers[i]);
//     }
// }
// result = [ganjil,genap];
// console.log(result);





// # TUGAS ARRAY

// ## Soal 1

// Tampilkan sesuai hasil berikut :

// let watches = ['Swiss Army','Dublot','Alba'];
// console.log("Saya punya " + watches[0] + ', ' +  watches[1] + ', dan ' + watches[2]);

// Result -> Saya punya Swiss Army, Dublot, dan Alba.


// ## Soal 2

// Uraikan kata dari kalimat lalu masukkan ke dalam array


// let pantun = "makan nasi bayar pake paku";
// let temp = '';
// let result = [];

// for(let i = 0; i < pantun.length; i++) {
//     if(pantun[i] != ' '){
//         temp += pantun[i];
//     }if(pantun[i] === ' '){
//        result.push(temp);
//         temp = '';
//     }if(i === pantun.length - 1){
//         result.push(temp);
//         temp = '';
//     }
// }
// console.log(result);

// Result -> ["makan","nasi","bayar","pake","paku"]


// ## Soal 3

// Kelompokkan buah sesuai abjad dari A - Z

//Input : ['blueberry','apple','orange','anggur','banana']

//    let fruits = ['blueberry','apple','orange','anggur','banana'];

//    let abjadA = [];
//    let abjadB = [];
//    let abjadO = [];
//    let result = [];

//    for(let i = 0; i < fruits.length; i++){
//        if(fruits[i][0] === 'a'){
//            abjadA.push(fruits[i]);
//        }else if(fruits[i][0] === 'b'){
//            abjadB.push(fruits[i]);
//        }else if(fruits[i][0] === 'o'){
//            abjadO.push(fruits[i]);
//        }
//    }
//    result = [abjadA, abjadB, abjadO];
//    console.log(result);

   /*Output : [
       ['anggur','apple'],
       ['banana','blueberry'],
       ['orange']
   ] */


// ## Soal 4

// Cari determinan matrix

// Rumus Determinan Matrix = a.d - b.c dengan matrix sebagai berikut
/*
    A = | a b |
        | c d |
 * 
*/

// let matrix = [
//     [1,2],
//     [3,4]
// ]

// let rumus = (matrix[0][0] * matrix[1][1]) - matrix[0][1] * matrix[1][0] ;

// console.log(rumus)



// ## Soal 5

// Gabungkan karakter menjadi sebuah kata

let kode = [
    [" "," ","M"," "," "],
    [" "," "," ","a"," "],
    [" "," "," "," "," "],
    [" ","k"," "," "," "],
    [" "," "," "," "," "],
    [" "," "," "," ","a"],
    [" "," "," ","n"," "],
]

let character = [];

// Result -> Makan

// Algoritma
/**
 * Telusuri setiap index 
 *  - jika menemukan sebuah huruf , ambil huruf tersebut
 *  - jika menemukan sepasi maka lewati
 * Tampilkan
 */

for(let i = 0; i < kode.length; i++) {
    if(kode[i] === " "){
        
    }
}

