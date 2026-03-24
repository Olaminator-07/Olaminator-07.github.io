async function fetchData() {
    const response = await fetch('/api/driver_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let driverDiv = document.createElement("div");
        driverDiv.className = "førerene";
        let navn = document.createElement("h2");
        let klubb = document.createElement("p");
        let bilde = document.createElement("img");
        bilde.className = "bildær";
        let bildetekst = document.createElement("p");
        
        navn.innerText = data[i].fornavn + " " + data[i].etternavn;
        klubb.innerText = "Klubb: " +  data[i].klubb;
        bildetekst.innerText = "Info: " + data[i].bildetekst;
        bilde.src = "/driver/bilder/" + data[i].bildet;

        driverDiv.appendChild(navn);
        driverDiv.appendChild(klubb);
        driverDiv.appendChild(bilde);
        driverDiv.appendChild(bildetekst);

        document.querySelector("#førere").appendChild(driverDiv);
    }

 
}

fetchData();