angular
.module('bookApp', ['ngStash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['sessionStash'];

function ctrl(sessionStash) {
  var vm = this;

  vm.newBook       = {};
  vm.bookList      = [];
  vm.confirmDelete = false;

  vm.saveNewBook   = function(newBook) {
    newBook.id = vm.bookList.length + 1;
    sessionStash.set(newBook.id, newBook);
    vm.bookList.push(sessionStash.get(newBook.id))
  }



  vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
  vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Walden",        author: "Henry David Thoreau", price: 2.99}));
  vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));

  vm.deleteBook = function() {alert("I'm deleted!")}

}




function Book (obj) {
  var book = {};

  book.id     = obj.id     ||  0;
  book.title  = obj.title  || '';
  book.author = obj.author || '';
  book.price  = obj.price  ||  0;
  book.qty    = obj.qty    ||  1;

  return book;
}
