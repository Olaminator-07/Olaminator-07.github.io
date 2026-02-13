async function hentData() { 
    const res = await fetch('https://www.anapioficeandfire.com/api/books/'); //Fetcher apien
    const data = await res.json();                                           //Lagrer info fra api som JSON fil
    
    document.querySelector("#names").innerHTML = "Navn på bøkene: ";               //Tømmer div boksene names, utgivelse og sidetall i HTML
    document.querySelector("#utgivelse").innerHTML = "Utgivelsesdatoer: ";
    document.querySelector("#sidetall").innerHTML = "Antall sidetall: ";

    for (let i = 0; i < data.length; i++) {
        let navn = document.createElement("p");                //for hvert element i arrayen data, så skrives navnet, utgivelse og sidetall henholdsvis i hver sin div boks
        navn.innerText = data[i].name;
        document.querySelector("#names").appendChild(navn);

         let released = document.createElement("p");
        released.innerText = data[i].released;
        document.querySelector("#utgivelse").appendChild(released);

        let numberOfPages = document.createElement("p");
        numberOfPages.innerText = data[i].numberOfPages;
        document.querySelector("#sidetall").appendChild(numberOfPages); 
    }
}
hentData();


//Jeg tenkte jeg kunne lage en knapp for hver av bøkene, med navn som tekst. Så kunne jeg legge en eventlistner på hver knapp
//slik at når f.eks. knapp til elemnt 1 blir trykket, vises utgivelses år og sidetall til dette elementet i data. Problemet er at jeg ikke fikk laget en bestemt
//id for hver enkelt knapp jeg kunne bruke. Se koden under sånn ca hva jeg tenkte


// "knappen til en bestemt tittel".addEventListener("click", function(){
//     visData();
//  });


// function visData(){
//     for (let i = 0; i < data.length; i++) {
//         let released = document.createElement("p");
//         released.innerText = data[i].released;
//         document.querySelector("#utgivelse").appendChild(released);

//         let numberOfPages = document.createElement("p");
//         numberOfPages.innerText = data[i].numberOfPages;
//         document.querySelector("#sidetall").appendChild(numberOfPages); 
//     }
// };



 
        
        