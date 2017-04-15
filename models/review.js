var bookshelf = require('./../bookshelf');

var Review = bookshelf.Model.extend({
  tableName: 'reviews'
});

module.exports = Review;
