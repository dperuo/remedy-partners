angular
.module('bookApp', ['ngStash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['sessionStash'];

function ctrl(sessionStash) {
  var vm = this;

  vm.bookList      = [];
  vm.confirmDelete = false;

  vm.bookList.push(Book({title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
  vm.bookList.push(Book({title: "Walden",        author: "Henry David Thoreau", price: 2.99}));
  vm.bookList.push(Book({title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));

  vm.deleteBook = function() {alert("I'm deleted!")}

}



function Book (obj) {
  var book = {};

  book.title  = obj.title  || '';
  book.author = obj.author || '';
  book.price  = obj.price  ||  0;
  book.qty    = obj.qty    ||  1;

  return book;
}
