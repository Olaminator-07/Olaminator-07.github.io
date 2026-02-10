const skjema = document.getElementById("form");

skjema.addEventListener("submit", function(event){
    event.preventDefault();

    const navn = document.getElementById("name").value;
    const passord = document.getElementById("passord").value; 

    console.log("Navnet: ", navn);
    console.log("Passord: ", passord);
});

async function hentvits() {
    const api = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await api.json ();

    document.querySelector("#vits").innerHTML = "";

    let vits = document.createElement("p");
    vits.innerText = data.value;
    document.querySelector("#vits").appendChild(vits);

    let update = document.createElement("p");
    update.innerText = data.updated_at;
    document.querySelector("#vits").appendChild(update);

    let bilde = document.createElement("img");
    bilde.src = data.icon_url;
    document.querySelector("#vits").appendChild(bilde);
}

hentvits();

document.body.addEventListener("keypress", hentvits);