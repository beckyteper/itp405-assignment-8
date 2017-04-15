var bookshelf = require('./../bookshelf');
var Book = require('./book');

var Author = bookshelf.Model.extend({
  tableName: 'authors',
  books: function() {
    return this.hasMany(Book);
  }
});

module.exports = Author;
