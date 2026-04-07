// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

const PORT = 3000;

// Databasen
const Database = require('better-sqlite3');
const db = new Database('racetracker.db');

// CORS-middleware for å tillate forespørsler fra andre domener
const cors = require('cors');
app.use(cors());

// En rute som henter alle baner med info
app.get('/api/track_info', (req, res) => {
    const rows = db.prepare('SELECT område, underlag, størrelse, navn FROM Track').all();
    res.json(rows);
});

// En rute som henter alle biler med info
app.get('/api/car_info', (req, res) => {
    const rows = db.prepare('SELECT car.car_ID, car.merke, car.modell, Bilde_Car.bildet, Bilde_Car.bildetekst FROM Car JOIN Bilde_Car ON car.car_ID = Bilde_Car.car_ID;').all();
    res.json(rows);
});

//En rute som henter all info om førerene
app.get('/api/driver_info', (req, res) => {
    const rows = db.prepare('SELECT Driver.driver_ID, Driver.fornavn, Driver.etternavn, Driver.klubb, Bilde_Driver.bildet, Bilde_Driver.bildetekst FROM Driver LEFT JOIN Bilde_Driver ON Driver.driverbilde_ID = Bilde_Driver.driverbilde_ID; ').all();
    res.json(rows);
});

//En rute som henter info om løpene
app.get('/api/race_info', (req, res) => {
    const rows = db.prepare('SELECT Race.race_ID, Race.løpnavn, Race.dato, Track.område, Track.navn, Track.underlag FROM Race JOIN Track ON Race.track_ID = Track.track_ID;').all();
    res.json(rows);
});


//Rute som henter info om resultater til en bestemt fører basert på Driver_ID
app.get('/api/results_info/:driver_ID', (req, res) => {
    const driver_ID = req.params.driver_ID;
    if (!driver_ID) return res.status(400).json({ error: 'Mangler driver_ID' });

    const rows = db.prepare(`
        SELECT Race.løpnavn, Race.dato, Driver.fornavn, Driver.etternavn, Driver.klubb, Car.merke, Car.modell, Track.navn, Track.område, Track.underlag, Results.plassering, Results.poeng
        FROM Results
        JOIN Race ON Results.race_ID = Race.race_ID
        JOIN Driver ON Results.driver_ID = Driver.driver_ID
        JOIN Car ON Results.car_ID = Car.car_ID
        JOIN Track ON Race.track_ID = Track.track_ID
        WHERE Driver.driver_ID = ?
    `).all(driver_ID);

    res.json(rows);
});

// Rute som lar oss registrere nytt resultat på person
app.post('/api/registrer_resultat', express.json(), (req, res) => {
    // Henter ut data fra request body (det som klienten har sendt inn)
    const {navn, løp, bil, plassering, poeng} = req.body;

    // Registrer den nye fjellturen
    db.prepare('INSERT INTO Results (car_ID, driver_ID, race_ID, plassering, poeng) VALUES (?, ?, ?, ?, ?)').run(navn, løp, bil, plassering, poeng);

    res.status(201).json({ message: 'Resultatet er registrert!' });
});


// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});