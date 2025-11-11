// Kilde https://www.geeksforgeeks.org/javascript/create-a-quiz-app-with-timer-using-html-css-and-javascript/


const quizdata =[
    {
        spørsmål: "Hvilket språk er best egnet for nettside utvikling",
        alternativer: ["Scratch", "HTML", "Python", "Teams"],
        svar: "HTML" //det riktige alternativet
    },
    {
        spørsmål: "Skriv spørsmål 2 her",
        alternativer: ["alternativ", "alternativ2", "alternativ3", "alternativ4"],
        svar: "alternativ" 
    }
];

let spørsmålnummer = -1;
let score = 0;
const spørsmålEL = document.querySelector(".spørsmål");
const alternativerEL = document.querySelector(".alternativer");
const scoreEl = document.getElementById("score");


document.querySelector("#knappvidere").addEventListener("click", videre);
// document.querySelector("#knapptilbake").addEventListener("click", tilbake);
document.querySelector("#restart").addEventListener("click", restart);

function videre(){
    if (spørsmålnummer>= (quizdata.length - 1)) {
        stoppquiz()
    } else{
    spørsmålnummer++;
    lastinnspørsmål();
    }
}

// function tilbake(){
//     spørsmålnummer--;
//     lastinnspørsmål();
// }


function stoppquiz(){
    document.getElementById("slutt-tekst").innerText = "Quizen er ferdig! Trykk på 'Start på nytt' for å ta quizen igjen!"
}


function lastinnspørsmål(){
    let gjeldendequiz = quizdata[spørsmålnummer];
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

function checkAnswer(valgtalternativ) {
            if (valgtalternativ === quizdata[spørsmålnummer].svar) {
                score++;
                scoreEl.innerText = score;
            }
            spørsmålnummer++;
        
            if (spørsmålnummer < quizdata.length) {
                lastinnspørsmål(); 
             } else {
            console.log("Quiz ferdig! Din score er: " + score);
            stoppquiz()
            }
}


function restart() {
    document.getElementById("slutt-tekst").innerText = '';
    alternativerEL.innerHTML = '';
    spørsmålEL.innerHTML = '';
    spørsmålnummer = 0;
    score = 0;
    scoreEl.innerText = score;
    lastinnspørsmål();
}

