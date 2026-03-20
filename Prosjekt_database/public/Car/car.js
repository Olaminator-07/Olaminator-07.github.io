async function fetchData() {
    const response = await fetch('/api/car_info');
    const data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let carDiv = document.createElement("div");
        carDiv.className = "bilene";
        let merke = document.createElement("h2");
        let modell = document.createElement("p");
        let bilde = document.createElement("img");
        bilde.className = "bildær";
        let bildetekst = document.createElement("p");
        
        merke.innerText = data[i].merke;
        modell.innerText = "Modell:" +  data[i].modell;
        bildetekst.innerText = "Info: " + data[i].bildetekst;
        bilde.src = "/car/bilde/" + data[i].bildet;

        carDiv.appendChild(merke);
        carDiv.appendChild(modell);
        carDiv.appendChild(bilde);
        carDiv.appendChild(bildetekst);

        document.querySelector("body").appendChild(carDiv);
    }

 
}

fetchData();