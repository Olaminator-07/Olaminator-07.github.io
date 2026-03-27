async function hentPersoner() {
    const response = await fetch('/api/driver_info');
    const data = await response.json();
    const dropdown = document.getElementById('personDropdown');
    
    for (const person of data) {
        const option = document.createElement('option');
        option.value = person.driver_ID;
        option.textContent = person.fornavn + " " + person.etternavn;
        console.log(option)
        dropdown.appendChild(option);
    } 
}

document.addEventListener('DOMContentLoaded', hentPersoner);

// Når en person er valgt, henter og viser alle resultatene basert på driver_ID
document.getElementById('personDropdown').addEventListener('change', async function() {
    const driver_ID = this.value;
    console.log(`Valgt person: ${driver_ID}`);
    if (driver_ID) {
        const response = await fetch(`/api/results_info/${encodeURIComponent(driver_ID)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const resultater = await response.json();
        
        console.log(resultater); 

        const resultatDiv = document.getElementById('resultatContainer');
    
        // Så viser vi en liste med resultatene
        const ul = document.createElement('ul');
        for (const resultat of resultater) {
            const visning = document.createElement('div');
            visning.className = "resultatene"
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