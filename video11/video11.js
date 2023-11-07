console.log(`hello`);
let sum = (a,b,callback) => {
let tong = a + b;
setInterval(() => {
    callback(tong)
}, 1000);
}
let printSum = (message) => {
    console.log(message);
}
sum(1,2,printSum);