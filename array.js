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
// // Result -> Saya punya Swiss Army, Dublot, dan Alba.

// function printArloji(){
//     let temp = "Saya punya"
//     for(let i = 0; i < watches.length; i++){
//         if(i !== watches.length - 1){
//             temp += ` ${watches[i]},`
//         }else {
//             temp += ` dan ${watches[i]}.`
//         }
//     }
//     return temp;
// }
// console.log(printArloji(watches));



// ## Soal 2

// Uraikan kata dari kalimat lalu masukkan ke dalam array

// let pantun = "makan nasi bayar pake paku";
// let temp = '';
// let result = [];

// function poetryFormatter(){
//     for(let i = 0; i < pantun.length; i++) {
//         if(pantun[i] != ' '){
//             temp += pantun[i];
//         }if(pantun[i] === ' '){
//         result.push(temp);
//             temp = '';
//         }if(i === pantun.length - 1){
//             result.push(temp);
//             temp = '';
//         }
//     }
// }
// console.log(poetryFormatter(pantun));

// Result -> ["makan","nasi","bayar","pake","paku"]


// ## Soal 3

// Kelompokkan buah sesuai abjad dari A - Z

//Input : ['blueberry','apple','orange','anggur','banana']

//    let input = ['blueberry','apple','orange','anggur','banana'];

//    function groupFruits(input){
//        let kamus = 'abcdefghijklmnopqrstuvwxyz';
//        let temp = [];
//        let result = [];

//        for(let i = 0; i < kamus.length; i++){
//            for(let j = 0; j < input.length; j++){
//                if(kamus[i] === input[j][0]){
//                    temp.push(input[j]);
//                 }
//             }
//             if(temp.length !== 0){
//                     result.push(temp)
//                     temp = []
//                 }
//        }
//        return result;
//    }
//    console.log(groupFruits(input));


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

// function determinan(matrix) {
//     let result = matrix [0][0] * matrix [1][1] - matrix[0][1] * matrix [1][0];
//     return result;
// }
// console.log(determinan([
//     [1,2],
//     [3,4]
// ]));


// ## Soal 5

// Gabungkan karakter menjadi sebuah kata

// let kode = [
//     [" "," ","M"," "," "],
//     [" "," "," ","a"," "],
//     [" "," "," "," "," "],
//     [" ","k"," "," "," "],
//     [" "," "," "," "," "],
//     [" "," "," "," ","a"],
//     [" "," "," ","n"," "],
// ]

// Algoritma
/**
 * Telusuri setiap index 
 *  - jika menemukan sebuah huruf , ambil huruf tersebut
 *  - jika menemukan sepasi maka lewati
 * Tampilkan
 */

function susunKata(arr){
    let temp = '';
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr[i].length; j++){
            if(arr[i][j] !== ' '){
                temp += arr[i][j];
            }  
        }
    }
    return temp;
}

console.log(susunKata([
    [" "," ","M"," "," "],
    [" "," "," ","a"," "],
    [" "," "," "," "," "],
    [" ","k"," "," "," "],
    [" "," "," "," "," "],
    [" "," "," "," ","a"],
    [" "," "," ","n"," "],
]));

// Result -> Makan





