var bookshelf = require('./../bookshelf');
var Book = require('./book');

var Publisher = bookshelf.Model.extend({
  tableName: 'publishers',
  books: function() {
    return this.hasMany(Book);
  }
});

module.exports = Publisher;
