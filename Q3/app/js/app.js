angular
.module('bookApp', ['ngStash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['localStash'];

function ctrl(localStash) {
  var vm = this,
      bookList = 'bookList';

  vm.bookList      = [];
  vm.confirmDelete = false;
  vm.deleteBook    = deleteBookFn;
  vm.newBook       = {};
  vm.saveNewBook   = saveNewBookFn;
  vm.totalPrice    = 0;

  vm.bookList = (localStash.get(bookList)) ? localStash.get(bookList) : populateBookList();


  function saveNewBookFn(newBook) {
      var list = localStash.get(bookList);
      list.push(newBook);
      localStash.set(bookList, list);
      vm.bookList = localStash.get(bookList);
  }

  function deleteBookFn(index) {
    var list = localStash.get(bookList);
    list.splice(index, 1);
    localStash.set(bookList, list);
    vm.bookList = localStash.get(bookList);
  }

  function populateBookList () {
    var list = [];

    list.push(Book({title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
    list.push(Book({title: "Walden",        author: "Henry David Thoreau", price: 2.99, qty: 2}));
    list.push(Book({title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));

    localStash.set('bookList', list);

    return list;
  }









  vm.cleared = false;
  vm.clearStorage = function() {
    localStash.clear();
    vm.cleared = true;
  }

}





function Book (obj) {
  var book = {};

  book.title  = obj.title  || '';
  book.author = obj.author || '';
  book.price  = obj.price  ||  0;
  book.qty    = obj.qty    ||  1;

  return book;
}
