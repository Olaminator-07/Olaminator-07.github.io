// Kilde https://www.geeksforgeeks.org/javascript/create-a-quiz-app-with-timer-using-html-css-and-javascript/

const quizdata = [
    {
        spørsmål: "Hvilket språk er best egnet for nettside utvikling",
        alternativer: ["Scratch", "HTML", "Python", "Teams"],
        svar: "HTML" //det riktige alternativet
    },
    {
        spørsmål: "Hva brukes <Header> elementet i HTML til?",
        alternativer: ["Lage toppmeny", "Legge til en tabell", "Lage en lenke", "Importere CSS"],
        svar: "Lage toppmeny"
    },
    {
        spørsmål: "Hvilken HTML-tag brukes til å lage et nummerert listeelement?",
        alternativer: ["<ul>", "<ol>", "<li>", "<list>"],
        svar: "<ol>"
    },
    {
        spørsmål: 'Hva gjør "display: flex;" i CSS?',
        alternativer: ["Skjuler elementet", "Plasserer elementet i en fleksibel layout", "Endrer tekststørrelse", "Legger til en boks-skygge"],
        svar: "Plasserer elementet i en fleksibel layout"
    },
    {
        spørsmål: "Hvilken HTML-tag brukes for å legge inn et bilde?",
        alternativer: ["<image>", "<pic>", "<img>", "<src>"],
        svar: "<img>"
    },
    {
        spørsmål: "Hva gjør margin i CSS?",
        alternativer: ["Lager avstand inni elementet", "Lager avstand utenfor elementet", "Endrer høyden i elementet", "Definerer kantlinjer"],
        svar: "Lager avstand utenfor elementet"
    },
    {
        spørsmål: "Hvilken av følgende er en gyldig JavaScript-variabeldeklarasjon?",
        alternativer: ["var 1number = 10;", "let number = 10;", "int number = 10;", "value number = 10;"],
        svar: "let number = 10;"
    },
    {
        spørsmål: "Hvilket av følgende beskriver best hva HTML brukes til i nettsideutvikling?",
        alternativer: ["Å styre utseendet og layouten på nettsiden", "Å strukturere innholdet på nettsiden", "Å håndtere serverlogikk og databaser", "Å optimalisere nettsidens ytelse og lastetid"],
        svar: "Å strukturere innholdet på nettsiden"
    },
    {
        spørsmål: "Hva står forkortelsen 'JS' for?",
        type: "input",
        svar: "JavaScript"
    }
];

// Her lages et nytt array quiz, med samme elementer som quizdata bare sortert i en (ikke helt perfekt) tilfeldig rekkefølge
let quiz = quizdata.slice().sort(function () { 
    return Math.random() - 0.5; 
});


let spørsmålnummer = 0;
let score = 0;
const spørsmålEL = document.querySelector(".spørsmål");
const alternativerEL = document.querySelector(".alternativer");
const scoreEl = document.getElementById("score");

document.querySelector("#restart").addEventListener("click", restart);


function lastinnspørsmål() {
    let gjeldendequiz = quiz[spørsmålnummer];
    spørsmålEL.innerText = gjeldendequiz.spørsmål;

    document.getElementById("steg" + (spørsmålnummer + 1)).style.backgroundColor = "rgba(4, 168, 15, 1)";  //Oppdaterer fargen i progressionbar
    
    // alternativerEL.innerText = '';

    if (gjeldendequiz.type === "input") {
        // Lager input felt
        const input = document.createElement("input");
        // Lager en "send" knapp
        const knapp = document.createElement("button");
        knapp.innerText = "Send svar";
        knapp.onclick = function() {
            checkAnswer(input.value);
        }

        alternativerEL.appendChild(input);
        alternativerEL.appendChild(knapp);

    } else {
        gjeldendequiz.alternativer.forEach(function (alternativ) {
            const knapp = document.createElement('button');
            knapp.classList.add('alternativ');
            knapp.innerText = alternativ;
            knapp.onclick = function () {
                checkAnswer(alternativ);
            };
            alternativerEL.appendChild(knapp);
        });
    } 
}

function checkAnswer(valgtalternativ) {
    if (valgtalternativ.toLowerCase() === quiz[spørsmålnummer].svar.toLowerCase()) {
        score++;
        scoreEl.innerText = score;
    }
    spørsmålnummer++;

    if (spørsmålnummer < quizdata.length) {
        lastinnspørsmål();
    } else {
        console.log("Quiz ferdig! Din score er: " + score);
        document.getElementById("slutt-tekst").innerText = "Quizen er ferdig! Trykk på 'Start på nytt' for å ta quizen igjen!"
    }
}

function restart() {
    document.getElementById("slutt-tekst").innerText = '';
    alternativerEL.innerText = '';
    spørsmålEL.innerText = '';
    spørsmålnummer = 0;
    score = 0;
    scoreEl.innerText = score;
    const steg_div = document.querySelectorAll("#progression-bar > div"); //Oppdaterer fargen i progressbar tilbake til grå
    steg_div.forEach(function (steg) {
        steg.style.backgroundColor = "grey";
    });
    quiz = quizdata.slice().sort(function () {
         return Math.random() - 0.5; 
    });
    lastinnspørsmål();
}




