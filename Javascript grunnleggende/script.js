// Variabler

let antall = 100;

const NAVN = "Ola";
let navn = "Ola";
let alder = "18";

const PI= Math.PI;

let arrayBilder = ["bilde.jpg", "bilde2.jpg"];

//skrive ut

console.log("qwertyuiop " + navn + "!");
console.log(`Mitt navn er ${navn}! Jeg er ${alder} år gammel`);

console.table(arrayBilder);

console.warn(PI);

// alert("advarsel");

document.getElementById("utskrift").innerText = "Mitt navn er " + navn + "!";


let dinalder = prompt("Hva er din alder?");
document.getElementById("utskrift2").innerText = "Du er " + dinalder + " år gammel!";

let årstall = new Date().getFullYear();
console.log(årstall);
document.getElementById("årfødt").innerText = "Du er født i " + (årstall - dinalder);