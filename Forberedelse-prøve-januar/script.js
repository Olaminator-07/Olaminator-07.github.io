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
    console.log(update);

    let bilde = document.createElement("img");
    bilde.src = data.icon_url;
    document.querySelector("#vits").appendChild(bilde);
}

hentvits();

document.body.addEventListener("keypress", hentvits);

async function hentvitser() {
    const res = await fetch("https://official-joke-api.appspot.com/random_ten");
    const vitsane = await res.json ();

    document.querySelector("#jokes").innerHTML = "";

    let joke = document.createElement("p");
    joke.innerText = vitsane[0].setup;
    document.querySelector("#jokes").appendChild(joke);

   for (let i = 0; i < vitsane.length; i++) {
    console.log(vitsane[i].setup);
    console.log(vitsane[i].punchline);
    
   }

    svarknapp = document.getElementById("svarknapp");

    svarknapp.addEventListener("click", () => {
    let svar = document.createElement("p");
    svar.innerText = vitsane[0].punchline;
    document.querySelector("#jokes").appendChild(svar);
});

}

hentvitser();

