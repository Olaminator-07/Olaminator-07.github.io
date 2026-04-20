async function fetchBaner() {
    const response = await fetch('/api/track_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let trackDiv = document.createElement("div");
        trackDiv.innerHTML = '';
        trackDiv.className = "banene";
        let navn = document.createElement("h2");
        let område = document.createElement("p");
        let underlag = document.createElement("p");
        let størrelse = document.createElement("p");
        

        område.innerText = "Sted: " + data[i].område;
        underlag.innerText = "Underlag: " + data[i].underlag;
        størrelse.innerText = "Størrelse: " + data[i].størrelse;
        navn.innerText = data[i].navn;

        trackDiv.appendChild(navn);
        trackDiv.appendChild(område);
        trackDiv.appendChild(underlag);
        trackDiv.appendChild(størrelse);

        document.querySelector("#baner").appendChild(trackDiv);
    }

 
}
document.addEventListener('DOMContentLoaded', fetchBaner);

document.getElementById('ny_bane_form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Forhindrer at siden refresher når formen sendes inn
    
    // Henter ut data fra form-feltene
    const navn = document.getElementById('navn').value;
    const område = document.getElementById('område').value;
    const underlag = document.getElementById('underlag').value;
    const størrelse = document.querySelector('input[name="størrelse"]:checked')?.value; // Henter verdien til den valgte radio-knappen

    
    console.log({område, underlag, størrelse, navn}); // Sjekker at vi har riktig data

    const response = await fetch('/api/registrer_bane', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ område, underlag, størrelse, navn})
    });

    // Sjekker om responsen fra serveren var vellykket, og gir tilbakemelding til brukeren
    if (response.ok) {
        alert('Banen er registrert!');
        fetchBaner();
    } else {
        alert('Det skjedde en feil ved registrering av banen.');
    }
});