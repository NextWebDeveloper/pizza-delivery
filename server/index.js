const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));
const port = process.env.PORT || "8000";

const pizzas = require('./src/fake-db-data');
const drinks = require('./src/fake-db-data');

app.get("/pizzas", (req, res) => {
  res.status(200).json({ pizzas: pizzas.pizzas });
});
app.get("/drinks", (req, res) => {
  res.status(200).json({ drinks: drinks.drinks });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});