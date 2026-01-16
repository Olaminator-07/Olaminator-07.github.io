// https://api.dictionaryapi.dev/api/v2/entries/en/<word>

const form = document.querySelector("#form");
const svar = document.querySelector("#definition")


form.addEventListener("submit", getdefinition);


async function getdefinition(evt){
    evt.preventDefault(); //Forhindrer siden i å oppdatere seg
    svar.innerText="";

    const ord = document.querySelector("#input").value;
    console.log(ord);
    const definisjonen = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + ord);
    const data = await definisjonen.json();
    console.log(data[0].meanings[0].synonyms[0]);

    let result = document.createElement("p");
    result.innerText = "Definisjonen på ordet: " + data[0].meanings[0].definitions[0].definition;
    console.log(result.innerText);
    svar.appendChild(result);

    let synonym = document.createElement("p");
    synonym.innerText = "Dette er noen synonym: " + data[0].meanings[0].synonyms[0] + ", " + data[0].meanings[0].synonyms[1] + ", " + data[0].meanings[0].synonyms[2];
    svar.appendChild(synonym)

}


