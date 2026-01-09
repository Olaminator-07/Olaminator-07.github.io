
let navneliste = ["Roar", "Petter", "Marcus", "Nicolas", "Lars", "Leander", "Odd", "Johan", "Jo", "Ola"];

//Metode 1
let tilfeldigliste = navneliste.slice().sort(function(){
    return Math.random()-0.5;
});

console.log(tilfeldigliste[1], tilfeldigliste[2]);


//Metode 2
let i = Math.floor(Math.random()*10);
console.log(i);

let n = Math.floor(Math.random()*10);
console.log(n);

let navn1 = navneliste[i];
let navn2 = navneliste[n];

console.log(navn1, navn2);

//Metode 3
let utvalgtepersoner = [];
let antallpersoner = 2;

for (let i = 0; i < antallpersoner; i++) {
    let tilfeldigtall = Math.floor(Math.random()*navneliste.length);
    console.log(navneliste[tilfeldigtall]);
}

async function hentData(){
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    console.log("Alle data:");
    console.log(data);
    console.log("\nBare vitsen:");
    console.log(data.value)
}

hentData();




