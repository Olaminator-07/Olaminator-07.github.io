// Kilde https://www.geeksforgeeks.org/javascript/create-a-quiz-app-with-timer-using-html-css-and-javascript/


const quizdata =[
    {
        spørsmål: "Skriv spørsmålet her",
        alternativer: ["alternativ", "alternativ2", "alternativ3", "alternativ4"],
        svar: "alternativ" //det riktige alternativet
    },
    {
        spørsmål: "Skriv spørsmål 2 her",
        alternativer: ["alternativ", "alternativ2", "alternativ3", "alternativ4"],
        svar: "alternativ" 
    }
];

let spørsmålnummer = 0;
let score = 0;
const spørsmålEL = document.querySelector(".spørsmål");
const alternativerEL = document.querySelector(".alternativer");
const gjeldendequiz = quizdata[spørsmålnummer];

function lastinnspørsmål(){
    spørsmålEL.textContent = gjeldendequiz.spørsmål;
    alternativerEL.innerHTML = ''; 
    gjeldendequiz.alternativer.forEach(alternativ => {
        const knapp = document.createElement('button');
        knapp.classList.add('alternativ');
        knapp.textContent = alternativ;
        knapp.onclick = () => checkAnswer(alternativ);
        alternativerEL.appendChild(knapp);
    });

}

function checkAnswer(alternativ) {
            if (alternativ === quizdata[gjeldendequiz].svar) {
                score++;
            }
            gjeldendequiz++;
            lastinnspørsmål();
        }



document.querySelector("#knappvidere").addEventListener("click", videre);
document.querySelector("#knapptilbake").addEventListener("click", tilbake);

function videre(){
    if (spørsmålnummer>= quizdata.length) {
        stoppquiz()
    } else{
    spørsmålnummer++;
    lastinnspørsmål();
    }


}

function tilbake(){
    spørsmålnummer--;
    lastinnspørsmål();
}


function stoppquiz(){
    spørsmålnummer = 0;
}
