async function fetchData() {
    const response = await fetch('http://localhost:3000/api/fjell_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let fjellDiv = document.createElement("div");
        fjellDiv.className = "hellyeah";
        let navn = document.createElement("h3");
        let hoyde = document.createElement("p");
        let beskrivelse = document.createElement("p");
        let bilde = document.createElement("img");
        bilde.className = "bildær";

        navn.innerText = data[i].fjellnavn;
        hoyde.innerText = "Høyde: " + data[i].hoyde + " m";
        beskrivelse.innerText = "Beskrivelse: " + data[i].beskrivelse;
        bilde.src = "/bilder/" + data[i].foto;

        fjellDiv.appendChild(navn);
        fjellDiv.appendChild(hoyde);
        fjellDiv.appendChild(beskrivelse);
        fjellDiv.appendChild(bilde);

        document.querySelector("body").appendChild(fjellDiv);
    }

 
}

fetchData();