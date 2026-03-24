async function fetchData() {
    const response = await fetch('/api/track_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let trackDiv = document.createElement("div");
        trackDiv.className = "banene";
        let navn = document.createElement("h2");
        let land = document.createElement("p");
        let underlag = document.createElement("p");
        let størrelse = document.createElement("p");
        

        land.innerText = "Sted: " + data[i].plassering;
        underlag.innerText = "Underlag: " + data[i].underlag;
        størrelse.innerText = "Størrelse: " + data[i].størrelse;
        navn.innerText = "Banen heter: " + data[i].navn;

        trackDiv.appendChild(navn);
        trackDiv.appendChild(land);
        trackDiv.appendChild(underlag);
        trackDiv.appendChild(størrelse);

        document.querySelector("#baner").appendChild(trackDiv);
    }

 
}

fetchData();