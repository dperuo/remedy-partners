angular
.module('bookApp', ['ngStash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['localStash'];

function ctrl(localStash) {
  var vm = this;

  vm.newBook       = {};
  vm.bookList      = [];
  vm.confirmDelete = false;
  vm.saveNewBook   = saveNewBookFn;
  vm.deleteBook    = deleteBookFn;





  function saveNewBookFn(newBook) {
    newBook.id = vm.bookList.length + 1;
    localStash.set(newBook.id, newBook);
    vm.bookList.push(localStash.get(newBook.id));
  };

  function deleteBookFn(index) {
    vm.bookList.splice(index, 1);
  }

  // vm.deleteBook = function() {alert("I'm deleted!");};

  // (function populateBookList () {

  //   if (localStash.length > 0) {
  //     for (var i = 0, l = vm.bookList.length; i < l; i++) {
  //       vm.bookList.push(localStash.get(localStash.key(i)))
  //     }
  //   } else {
  //     vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
  //     vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Walden",        author: "Henry David Thoreau", price: 2.99}));
  //     vm.bookList.push(Book({id: vm.bookList.length + 1, title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));
  //   }
  // })()

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
