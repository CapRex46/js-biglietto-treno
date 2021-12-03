const outputHtml = document.getElementById('output');
const lenght = prompt('Quanti km è lungo il viaggio?');
const age = prompt('Quanti anni hai?');
let price = 0.21 * lenght;

if (age < 18) {
    outputHtml.innerHTML = price * 0.2;
} else if (age > 65) {
    outputHtml.innerHTML = price * 0.4;
}  else {
    outputHtml.innerHTML = price;
}