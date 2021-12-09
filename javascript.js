const outputHtml = document.getElementById('output');
const lenght = prompt('Quanti km è lungo il viaggio?');
const age = prompt('Quanti anni hai?');
const pricePerKm = 0.21;
const salesjunior = 0.2;
const salessenior = 0.4;



let price = pricePerKm * lenght;
console.log(price);

if (age < 18) {
    const discount = price * salesjunior;
    price = price - discount;
} 

if (age >= 65) {
    const discount = price * salessenior;
    price = price - discount;
}
 


console.log(price)

price = price.toFixed(2);

console.log(price);

outputHtml.innerHTML = `il prezzo è ${price}€`