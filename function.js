function cetak(string){
    console.log(string);
}
// cetak('Hello world');

function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a * b;
}
function bagi(a,b){
    return a / b;
}
function kurang(a,b){
    return a - b;
}
function modulus(a,b){
    return a % b;
}



// TASK
/**
 *  OUTPUT
 * 
 *  1 adalah ganjil
 *  2 adalah genap
 *  3 adalah ganjil
 *  4 adalah genap
 *  5 adalah ganjil
 */

function cekGenap(num){
    return num % 2 === 0 ? true : false;
}
function cekGanjil(num){
    return num % 2 === 1 ? true : false;
}

function printNumber(num){
    for(let i = 1; i <= num; i++){
        if(cekGenap(i) === true){
            console.log(`${i} adalah Genap`);
        }
        if(cekGanjil(i) === true){
            console.log(`${i} adalah Ganjil`);
        }
    }
}
// printNumber(5);