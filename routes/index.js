const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies", { movies });
  } catch (err) {
    console.log(err);
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movie-details', { movie });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
