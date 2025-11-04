
// let faktor1 = 5;
// let faktor2 = 10;
// let produkt = faktor1 * faktor2;

// console.log(faktor1 + " ganger " + faktor2 + " er lik " + produkt);



// alert("Nå skal du få hjelp til å lage en mailadresse");
// let fornavn = prompt("Hva er fornavnet ditt?");
// let etternavn = prompt("Hva er etternavnet ditt?");
// let domene = prompt("Hva er domenet ditt?");
// let mailadresse = fornavn + "." + etternavn + "@" + domene;

// console.log(mailadresse);


// let a = 3.4;
// let b = 20.5;
// let total = a * b;

// console.log(Number.isInteger(total));  //Sjekker om tallet er heltall, true = heltall
// console.log(total);
// console.log(parseInt(total));     //Gjør desimaltall til heltall


// let gate = 'Kongens Gate ';
// let husnr = 432;
// let oppgang = "b";
// let adresse = gate + husnr + oppgang;
// console.log(adresse);

// let binary = "1010";
// let heltall = parseInt(binary, 2);
// console.log(heltall);


// Kjeksklikker
// let verdi = 1;
// const knapp = document.getElementById("knapp");
// knapp.addEventListener("click", verdiendring);

// function verdiendring() {
//     verdi += 1;
//     console.log(verdi);
//     document.getElementById("score").innerText = ("Din score er " + verdi);

// }


//Stedsnavn oppgave
// let stedsnavn1 = prompt("Hva er det første stedsnavnet?");
// let stedsnavn2 = prompt("Hva er det andre stedsnavnet?");
// let lengde1 = stedsnavn1.length;
// let lengde2 = stedsnavn2.length;
// let differanse = Math.abs(lengde1 - lengde2);

// console.log(lengde1);
// console.log(lengde2);

// document.getElementById("navn").innerText = ("Det første stedsnavnet er " + stedsnavn1 + ". Det andre stedsnavnet er " + stedsnavn2);
// document.getElementById("lengde").innerText = ("Lengden på det første navnet er " + lengde1 + ". Lengden på det andre navnet er "+ lengde2);
// document.getElementById("diff").innerText = ("Differansen i lengden av stedsnavnene er " + differanse);

//Kontrollstrukturer 

// let i = 1;
// while (i <= 50){
//     console.log(i);
//     i++
// }

// for(let k=1; k<=50; k++){
//     console.log(k)
// }

//for....of itererer over verdien til arrayen (enten tall eller string)
// let frukter = ["eple", "banan", "appelsin"];
// for (let frukt of frukter) {
//     console.log("Frukt: " + frukt);
//     // Skriver ut, eple, banan, appelsin på hver sin linje
// }

// //for....in itererer over index (tall nummeret til et element)
// let frukter2 = ["eple", "banan", "appelsin"];
// for (let indeks in frukter2) {
//     console.log("Frukt: " + frukter2[indeks]);
// }

//Switch Setning
// let frukt = "eple";

// switch (frukt) {
//     case "banan":
//         console.log("Dette er en banan.");
//         break;
//     case "eple":
//         console.log("Dette er et eple.");
//         break;
//     default:
//         console.log("Ukjent frukt.");
// }


//Oppgave 10 oppgavesamling
// const utdata = document.getElementById("utdata");
// let inndata = prompt("Hvilket bilmerke liker du best?");

// if(inndata.toLowerCase().includes("mazda")){
//     utdata.innerText = "Å, eg likar også Mazda";
// } else {
//     utdata.innerText = "Vi passer ikke sammen";
// }

//Oppgave 12
// let alder = prompt("Hvor gammel er du?");
// const bilde = document.getElementById("bilde");
// const img = document.createElement("img");
// img.src = "data:image/jpeg;base64,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";


// if(alder > 18){
//     document.getElementById("tekst").innerText = "Du er gammel nok til å se disse melonene (:";
//     bilde.appendChild(img);
// } else{
//     document.getElementById("tekst").innerText = "Haha nice try kid";
// }


//Oppgave 13
// const skjema = document.querySelector("#skjema");
// skjema.addEventListener("submit", sjekkFørerkort);

// const alderInput = document.getElementById("alder");
// const utskrift = document.getElementById("utskrift");

// function sjekkFørerkort (evt){
//     evt.preventDefault();

//     const alder = Number(alderInput.value);

//     if (alder < 16) {
//         utskrift.innerText = "Pell deg vekk lille drittunge";
//     } 
//     else if (alder < 18) {
//         utskrift.innerText = "Du kan ta moped lappen!";
//     }   
//     else if (alder < 21){
//         utskrift.innerText = "Du kan ta bil og moped lappen!";
//     }
//     else if (alder < 24){
//         utskrift.innerText = "Du kan ta lastebil, bil og moped lappen";
//     }
//     else if (alder >= 24 && alder < 100){
//         utskrift.innerText = "Du kan ta Buss, lastebil, bil og moped lappen!";
//     }
//     else{
//         utskrift.innerText = "Ugyldig alder";
//     }

//     console.log(alder);
//     console.log(utskrift);
// }

//Oppgave 16
// let tallarray = [];
// let tilfeldig = 0;
// let femellerhoyere = 0;
// let fire = 0;
// let sum = 0;
// let gjennomsnitt = 0;
// let hoyestetall = 0;
// let lavestetall = 101;

// //Skriver 200 tilfeldige tall mellom 0-100 i arrayen 
// for(let i=1; i<=200; i++){
//     tilfeldig = Math.floor(Math.random() * 101);
//     tallarray.push(tilfeldig);
// }

// //Antall tall som er lik fem eller høyere
// for(let k=1; k < tallarray.length; k++){
//     if(tallarray[k] >= 5){
//         femellerhoyere += 1;
//     }
// }

// //Antall tall som er lik 4
// for(let j=1; j < tallarray.length; j++){
//     if(tallarray[j] == 4){
//         fire += 1;
//     }
// }

// //Summen av alle elementene i arrayen
// for(let l=1; l < tallarray.length; l++){
//     sum += tallarray[l];
// }
// //Regner gjennomsnittet
// gjennomsnitt = sum / tallarray.length;

// //Finner det høyeste tallet i arrayen
// for(let e=1; e < tallarray.length; e++){
//     if(hoyestetall < tallarray[e]){
//         hoyestetall = tallarray[e];
//     }
// }

// //Finner det laveste tallet
// for(let r=1; r < tallarray.length; r++){
//     if(lavestetall > tallarray[r]){
//         lavestetall = tallarray[r];
//     }
// }

// console.log(tallarray);
// console.log("Antall tall som er fem eller høyere: " + femellerhoyere);
// console.log("Antall 4: " + fire);
// console.log("Summen av alle elementene i arrayen er: " + sum);
// console.log("Gjennomsnitt " + gjennomsnitt);
// console.log("Høyestetall er: " + hoyestetall);
// console.log("Laveste tallet er: " + lavestetall);

//Oppgave 18
// let terning1 = 0;
// let terning2 = 0;

// const utskrift = document.getElementById("utskrift");
// const knapp = document.querySelector("#knapp");
// knapp.addEventListener("click", trille);


// function trille(){
//     terning1 = Math.floor(Math.random * 6);
//     terning2 = Math.floor(Math.random * 6);
//     document.getElementById("utskrift").innerText = ("Terning 1: " + terning1 + " Terning 2: " + terning2);

// }


//Oppgave 17

let bilde1 = "Båtbilder/Båtmotor1.jpg"
let bilde2 = "Båtbilder/Båtmotor2.jpg"
let bilde3 = "Båtbilder/Båtmotor3.jpg"
let bilde4 = "Båtbilder/Båtmotor4.jpg"
let bilde5 = "Båtbilder/Båtmotor5.jpg"
let bilde6 = "Båtbilder/Båtmotor6.jpg"
let bilde7 = "Båtbilder/Båtmotor7.jpg"


let bildegalleri = [bilde1, bilde2, bilde3, bilde4, bilde5, bilde6, bilde7];
let i = 0;
document.getElementById("bilde").src = bildegalleri[i];

document.querySelector("#knapp1").addEventListener("click", byttbildevenstre);
document.querySelector("#knapp2").addEventListener("click", byttbildehoyre);
document.addEventListener("keydown", tastatur);

function tastatur(evt){
    console.log(evt.key);
    if (evt.key == "ArrowRight") {
        console.log("pilhøyre");
        byttbildehoyre();
    }

    if (evt.key == "ArrowLeft") {
        console.log("pilvenstre");
        byttbildevenstre();
    }
}

function byttbildehoyre(){
    if(i==(bildegalleri.length-1)){
        i=0;
    }
    else{
        i++;
    }

    document.getElementById("bilde").src = bildegalleri[i];    
    console.log(i);
}

function byttbildevenstre(){
    if(i==0){
        i=(bildegalleri.length-1);
    }
    else{
        i--;
    }

    document.getElementById("bilde").src = bildegalleri[i];    
    console.log(i);
}










