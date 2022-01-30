let arrOfCrypto = [];
let names = ["Bitcoin", "Ethereum", "Tether", "Binance Coin", "Cardano", "HEX", "Solana", "XRP"];

for(let i = 0; i < 8; i++){
    let info = [];
    let currentName = names[i];
    info.push(currentName);
    info.push(randomStartingPrice());
    info.push(0); // percent change
    arrOfCrypto.push(info);
}

function randomStartingPrice(){
    return Math.floor(Math.random() * 91) + 10;
}

console.log(arrOfCrypto);

// let rollBtn1 = document.querySelector(".rollBtn");
// rollBtn1.addEventListener("click", () =>{
//     // update the percentage
//     let newArr = [-0.25, 0.3, 0.05, 0.12, -0.02, -0.33, 1.12, 0];

//     for(let i = 0; i < 8; i++){
//         arrOfCrypto[i][1] = arrOfCrypto[i][1] * (1 + newArr[i]);
//         arrOfCrypto[i][2] = newArr[i];
//     }
//     console.log(arrOfCrypto);
// })


function test(){
let parse = document.createElement('script');

parse.onload = function(){
    let rollBtn1 = document.querySelector(".rollBtn");
    rollBtn1.addEventListener("click", () =>{
        Papa.parse("https://storage.googleapis.com/crypto_stuff/files/priceChanges.csv",{
            download: true,
            header: false,
            complete: function(result){
                console.log(result);
            }
        })
    })
};
parse.src = "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js";

document.head.appendChild(parse);
}










// let rollBtn1 = document.querySelector(".rollBtn");
// rollBtn1.addEventListener("click", () =>{
//     let parse = document.createElement('script');

//     parse.onload = function(){
//         Papa.parse("https://storage.googleapis.com/crypto_stuff/files/priceChanges.csv",{
//             download: true,
//             header: false,
//             complete: function(result){
//                 console.log(result);
//             }
//         })
//     };
//     parse.src = "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js";
//     document.head.appendChild(parse);
// });
