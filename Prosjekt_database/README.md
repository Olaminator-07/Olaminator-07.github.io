# Dokumentasjon


Racetracker er en nettside som er tenkt som en oversikt over radiostyrtbil kjøring på nasjonalt nivå i Norge. Her finner man oversikt over førere, resultater, biler, baner og løp som har vært kjørt. Nettsiden er bygget opp rundt databasen racetracker.db, der en henter og skriver informasjon til databasen gjennom ruter som er opprettet i [app.js](app.js). I [app.js](app.js) står det forklart hva som hentes av hver rute. Serveren er satt opp i express formatet og, databasen er av typen SQLite3. Vanilla JavaScript er brukt til å generere html, og css er brukt til stilsetting. 

Et eksempel på en rute i [app.js](app.js) som henter informasjon om banene:
````js
app.get('/api/track_info', (req, res) => {
    const rows = db.prepare('SELECT område, underlag, størrelse, navn FROM Track').all();
    res.json(rows);
});
````
Her hentes område, underlag, størrelse og navn fra Track tabellen. Dette skrives til /api/track_info, som blir brukt til å hente informasjon om banene gjennom Javascript [track.js](public/Track/track.js), for å så vise det i html filen [track.html](public/Track/track.html).

#

Datamodell av databasen finner du her : [Racetracker.drawio](Racetracker.drawio). Her er det en egen tabell for fører, bane, race, bil som alle er knyttet opp mot tabellen "Results" som er resultatet på et bestemt løp. Bilder av fører og bil ligger i egne tabeller knyttet opp mot bil og fører. Når man henter ut et bestemt resultat får man da tilgang på bil med tilhørende info, løp med bane og tilhørende info, fører med info og plassering og poeng.

#

All nettsidens frontend ligger under [public](public/) mappen. Her er [index.html](public/index.html) fremsiden av nettsiden og ligger i roten av public mappen. Det er laget en mappe for hver underside som er [bil](public/Car/), [fører](public/Driver/), [løp](public/Race/), [resultater](public/Results/) og [baner](public/Track/). Alle sidene kommuniserer med backend gjennom en api som er satt opp i [app.js](app.js). Det er brukt fetch til å hente data, og brukt post til å legge til data (kun brukt på resultat siden for å registrere nye resultater). Du finner kommentarer i koden til hver side for nærmere forklaring.
