let data;

async function hentData() { 
    let res = await fetch('https://www.anapioficeandfire.com/api/books/'); //Fetcher apien
    data = await res.json();                                           //Lagrer info fra api som JSON fil
    
    document.querySelector("#names").innerHTML = "";               //Tømmer div boksene names, utgivelse og sidetall i HTML
    document.querySelector("#utgivelse").innerHTML = "Utgivelsesdato: ";
    document.querySelector("#sidetall").innerHTML = "Antall sidetall: ";

    for (let i = 0; i < data.length; i++) {
        let navn = document.createElement("button");                //for hvert element i arrayen data, så skrives navnet, utgivelse og sidetall henholdsvis i hver sin div boks
        navn.innerText = data[i].name;
        document.querySelector("#names").appendChild(navn);
        navn.id = i;
    }
    lyttefunksjon();

}
hentData();

function lyttefunksjon(){
    for (let i = 0; i < data.length; i++) {
        document.getElementById(i).addEventListener("click", function(){
            visData(i);
        });   
    } 
}
       
function visData(tall){
    document.querySelector("#utgivelse").innerHTML = "Utgivelsesdato:  ";
    document.querySelector("#sidetall").innerHTML = "Antall sidetall:  ";    

    let released = document.createElement("p");
    released.innerText = data[tall].released;
    document.querySelector("#utgivelse").appendChild(released);

    let numberOfPages = document.createElement("p");
    numberOfPages.innerText = data[tall].numberOfPages;
    document.querySelector("#sidetall").appendChild(numberOfPages); 
};










 
        
        