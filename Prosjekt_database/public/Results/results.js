//funkjson for å hente info om førerene
async function hentPersoner() {
    const response = await fetch('/api/driver_info');
    const data = await response.json();
    const dropdownresultat = document.getElementById('personDropdown');
    const dropdownnavn = document.getElementById('navn-dropdown');
    
    //Fyller ut dropdown for valg av person for å se resultat
    for (const person of data) { 
        const optionnavn = document.createElement('option');
        optionnavn.value = person.driver_ID;
        optionnavn.textContent = person.fornavn + " " + person.etternavn;
        dropdownresultat.appendChild(optionnavn); //Legger til navn til førere i valg av resultat
    } 
    //Fyller ut dropdown for person for å registrere resultat
    for (const person of data) { 
        const optionnavn = document.createElement('option');
        optionnavn.value = person.driver_ID;
        optionnavn.textContent = person.fornavn + " " + person.etternavn;
        dropdownnavn.appendChild(optionnavn);  //Skriver inn navn til registrere nye resultat også
    }

} 
document.addEventListener('DOMContentLoaded', hentPersoner);

//Funksjon for å hente løpsinformasjon
async function hentLøp() {
    const response = await fetch('/api/race_info');
    const data = await response.json();
    const dropdownløp = document.getElementById('løp-dropdown');
    
    //Fyller ut dropdown for løp i registrering av nytt løp
    for (const løp of data) { 
        const option = document.createElement('option');
        option.value = løp.race_ID;
        option.textContent = løp.løpnavn;
        dropdownløp.appendChild(option);  //Skriver inn navn til registrere nye resultat også
    } 
}
document.addEventListener('DOMContentLoaded', hentLøp);

//Funksjon for å hente bilinfo
async function hentBil() {
    const response = await fetch('/api/car_info');
    const data = await response.json();
    const dropdownbil = document.getElementById('bil');
    
    //Fyller ut dropdown for løp i registrering av nytt løp
    for (const bil of data) { 
        const option = document.createElement('option');
        option.value = bil.car_ID;
        option.textContent = bil.merke + " " + bil.modell;
        dropdownbil.appendChild(option);  //Skriver inn navn til registrere nye resultat også
    } 
}
document.addEventListener('DOMContentLoaded', hentBil);

// Når en person er valgt, henter og viser alle resultatene basert på driver_ID
document.getElementById('personDropdown').addEventListener('change', async function() {
    const driver_ID = this.value;
    console.log(`Valgt person: ${driver_ID}`);
    if (driver_ID) {
        const response = await fetch(`/api/results_info/${encodeURIComponent(driver_ID)}`);  //Fetcher info gjennom api ved bestemt driver_id
        if (!response.ok) throw new Error(`HTTP ${response.status}`);                       //Sjekker respons
        const resultater = await response.json();
        
        console.log(resultater); 

        const resultatDiv = document.getElementById('resultatContainer');
        resultatDiv.innerText = '';
    
        // Så viser vi en liste med resultatene
        const ul = document.createElement('ul');
        ul.className = 'resultat-liste';
        for (const resultat of resultater) {
            const visning = document.createElement('div');
            visning.className = "resultatene";
            visning.innerText = ''; //Tømmer tidligere resultater
            visning.innerText = 
                resultat.løpnavn + 
                " Dato: " + resultat.dato + 
                " Klubb: " + resultat.klubb + 
                " Bil: " + resultat.merke + " " + resultat.modell + 
                " Plassering: " + resultat.plassering + 
                ". NC poeng gitt: " + resultat.poeng;
            ul.appendChild(visning);
        }
        resultatDiv.appendChild(ul);
    }
});

// Kode for å registrere nytt resultat til serveren
document.getElementById('nytt_resultat_form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Forhindrer at siden refresher når formen sendes inn
    
    // Henter ut data fra form-feltene
    const navn = document.getElementById('navn-dropdown').value;
    const løp = document.getElementById('løp-dropdown').value;
    // const dato = document.getElementById('dato').value;  Dato ligger under løpet i db, så trengs ikke
    // const klubb = document.getElementById('klubb').value;    Klubb ligger under Driver i db
    const bil = document.getElementById('bil').value;
    const plassering = document.getElementById('plassering').value;
    const poeng = document.getElementById('poeng').value;

    // Kontroller at vi har fått data fra form-feltene
    console.log({ navn, løp, bil, plassering, poeng}); // Sjekker at vi har riktig data før vi sender det til serveren

    const response = await fetch('/api/registrer_resultat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ navn, løp, bil, plassering, poeng })
    });

    // Sjekker om responsen fra serveren var vellykket, og gir tilbakemelding til brukeren
    if (response.ok) {
        alert('Resultatet er registrert!');
    } else {
        alert('Det skjedde en feil ved registrering av resultatet.');
    }
});












// for (let i = 0; i < data.length; i++) {
//         let resultsDiv = document.createElement("div");
//         resultsDiv.className = "resultater";
//         let løp = document.createElement("h2");
//         let dato = document.createElement("p");
//         let navn = document.createElement("p");
//         let klubb = document.createElement("p");
//         let bil = document.createElement("p");
//         let bane = document.createElement("p");
//         let resultat = document.createElement("h3");        

//         løp.innerText = data[i].løpnavn;
//         dato.innerText = data[i].dato;
//         navn.innerText = data[i].fornavn + " " + data[i].etternavn;
//         klubb.innerText = "Klubb: " + data[i].klubb;
//         bil.innerText = "Bil: " + data[i].merke + " " + data[i].modell;
//         bane.innerText = data[i].navn + ", " + data[i].område + ". Underlag: " + data[i].underlag;
//         resultat.innerText = "Plassering i løpet: " + data[i].plassering + ". Poeng gitt i NC-serien: " + data[i].poeng;


//         resultsDiv.appendChild(løp);
//         resultsDiv.appendChild(dato);
//         resultsDiv.appendChild(navn);
//         resultsDiv.appendChild(klubb);
//         resultsDiv.appendChild(bil);
//         resultsDiv.appendChild(bane);
//         resultsDiv.appendChild(resultat);

//         document.querySelector("#resultat").appendChild(resultsDiv);
//     }