require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var Review = require('./models/review');
var Book = require('./models/book');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/v1/reviews', function(request, response) {
  Review.fetchAll().then(function(reviews) {
    response.json(reviews);
  });
});

app.get('/api/v1/books/:id', function(request, response) {
  Book.where('id', request.params.id)
  .fetch({ require: true, withRelated: ['author', 'publisher'] })
  .then(function(book) {
    response.json(book);
  }, function() {
    response.json({
      error : {
        message: 'Book not found'
      }
    });
  });
});

app.post('/api/v1/reviews', function(request, response) {
  var review = new Review({
    book_id: request.body.book_id,
    headline: request.body.headline,
    body: request.body.body,
    rating: request.body.rating
  });

  review.save().then(function() {
    response.json(review);
  });
});

app.listen(8000);
