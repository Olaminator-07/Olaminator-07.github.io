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
    const rows = db.prepare('SELECT land, underlag, størrelse, navn FROM Track').all();
    res.json(rows);
});

// En rute som henter alle biler med info
app.get('/api/car_info', (req, res) => {
    const rows = db.prepare('SELECT car.merke, car.modell, Bilde_Car.bildet, Bilde_Car.bildetekst FROM Car JOIN Bilde_Car ON car.car_ID = Bilde_Car.car_ID;').all();
    res.json(rows);
});


// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});