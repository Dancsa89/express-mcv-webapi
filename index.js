const express = require('express'); // deklarálok egy express változót, amely az express module-t használja
const app = express(); // deklarálok egy app változót, amely az express module, express metódusát használja
const bodyParser = require('body-parser'); // deklarálok egy bodyparser változót, amely a body-parser module-t használja
const flats = require('./controllers/flats'); // deklarálok egy flats változót, amely a contollers mappában lévő flats.js fájl exportált elemeit tartalmazza

app.use(bodyParser.json()); // middlevarek inicializálása 
app.use(bodyParser.urlencoded({ extended: false })); // szintén
app.use('/flats', flats); // szintém

app.listen(process.env.PORT, () => {  // futtatáskor a terminálban a 4200 porton figyel az alkalmazás 
  console.log('Listen on 4200');
});
