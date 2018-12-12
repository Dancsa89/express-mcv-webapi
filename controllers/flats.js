const express = require('express'); 
const flats = express(); 
const models = require('../models');

// Index

flats.get('/', (req, res) => {
  models.Flat.findAll().then(flats => {
    res.locals.flats = flats;
    res.json(flats);
  });
});

// Show

flats.get('/:id', (req, res) => {
  models.Flat.findById(req.params.id).then(flat => {
    res.locals.flats = flats;
    res.json(flat);
  });
});

// Create

flats.post('/', (req, res) => {
  models.Flat.create({
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

// Update

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

flats.delete('/:id', (req, res) => {
  models.Flat.destroy({ where: {id: req.params.id} }).then(result => {
    res.json(result);
  });
});
module.exports = flats;
