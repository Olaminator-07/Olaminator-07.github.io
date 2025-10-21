
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

let verdi = 1;
const knapp = document.getElementById("knapp");
knapp.addEventListener("click", verdiendring);

function verdiendring() {
    verdi += 1;
    console.log(verdi);
    document.getElementById("score").innerText = ("Din score er " + verdi);

}


