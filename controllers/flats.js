const express = require('express'); // express változó deklarárálása 
const flats = express();  // express változó inicializálása flatsként
const models = require('../models'); // model változo deklarálása

// Index

flats.get('/', (req, res) => {  // defalut rootra küldött GET request esetén
  models.Flat.findAll().then(flats => { // a Flat modell alapján megkeresi az összes "lakást"
    res.locals.flats = flats; // betölti a localsba
    res.json(flats); // json objektumként visszaküldi
  });
});

// Show

flats.get('/:id', (req, res) => { // paraméterezett GET requestet (id) esetén
  models.Flat.findById(req.params.id).then(flat => { // a Flat modell alapján megkeresi az adott id-jű lakást
    res.locals.flats = flats; // betölti a localsba
    res.json(flat); // json objektumként visszaküldi azt az egy lakást
  });
});

// Create

flats.post('/', (req, res) => { // defalut rootra küldött POST request esetén
  models.Flat.create({ // a Flat modell alapján készít egy új lakást, ahol
    title: req.body.title, // request paraméterként a title
    price: req.body.price, // price
    floorArea: req.body.floorarea, // floorarea
    country: req.body.country, //country
    zip: req.body.zip, // zip
    city: req.body.city, // city
    street: req.body.street //street megadásra kerül
  }).then(flat => { 
    res.locals.flats = flats; // amelyet betölt a localstba
    res.json(flat); // json objektumként visszadja
  });
});

// Update    NEM MŰKÖDIK

flats.put('/:id', (req, res) => {
  models.Flat.findOne( {where: {id: req.params.id}).then(flat => {
    models.Flat.update({
      title: req.body.title,
      price: req.body.price,
      floorArea: req.body.floorarea,
      country: req.body.country,
      zip: req.body.zip,
      city: req.body.city,
      street: req.body.street
    }).then(flat => {
      res.locals.flats = flats;
      res.json(flat);
    });
  });
});

// Delete

flats.delete('/:id', (req, res) => { // paraméterezett DELETE requestet (id) esetén
  models.Flat.destroy({ where: {id: req.params.id} }).then(result => { // // a Flat modell alapján megkeresi az adott id-jű lakást és törli
    res.json(result); // eredmény jsonnel tér vissza
  });
});
module.exports = flats;
