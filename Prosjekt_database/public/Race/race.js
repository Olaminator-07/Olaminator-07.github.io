async function fetchData() {
    const response = await fetch('/api/race_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let raceDiv = document.createElement("div");
        raceDiv.className = "løpene";
        let løpnavn = document.createElement("h2");
        let dato = document.createElement("p");
        let plassering = document.createElement("p");
        let banenavn = document.createElement("p");
        let underlag = document.createElement("p");

        
        løpnavn.innerText = data[i].løpnavn;
        dato.innerText = "Dato: " +  data[i].dato;
        plassering.innerText = "Sted: " + data[i].plassering;
        banenavn.innerText = "Banen: " + data[i].navn;
        underlag.innerText = "Underlaget: " + data[i].underlag;

        raceDiv.appendChild(løpnavn);
        raceDiv.appendChild(dato);
        raceDiv.appendChild(plassering);
        raceDiv.appendChild(banenavn);
        raceDiv.appendChild(underlag);

        document.querySelector("#løp").appendChild(raceDiv);
    }

 
}

fetchData();