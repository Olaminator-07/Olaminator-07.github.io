
const skjema = document.getElementById("skjema");
const rabattkoder = ["rabattkode1", "rabattkode2", "rabattkode3", "rabattkode4"];

skjema.addEventListener("submit", function(event){
    event.preventDefault();

    const fnavn = document.getElementById("fname").value;
    const rkode = document.getElementById("rabattkode").value;

    document.querySelector("#tekst").innerHTML = "";

    let innsending = document.createElement("p");
    innsending.innerText = "Takk for registrering, " + fnavn + "!";
    document.querySelector("#tekst").appendChild(innsending);

    for (let i = 0; i < rabattkoder.length; i++) {  
        if (rkode == rabattkoder[i]) {
            let rabatt = document.createElement("p");
            rabatt.innerText = "Du har oppgitt en rabattkode og får redusert pris";
            document.querySelector("#tekst").appendChild(rabatt);
        }
    }

});

