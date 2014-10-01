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

  vm.bookList = (localStash.get(bookList)) ? localStash.get(bookList) : populateBookList();


  function saveNewBookFn(newBook) {
      var list = localStash.get(bookList);
      list.push(newBook);
      localStash.set(bookList, list);
      vm.bookList = localStash.get(bookList);
  }

  function deleteBookFn(index) {
    // var list = localStash.get(bookList)
    // list.splice(index, 1)
    // localStash.set(bookList, list)
    // vm.bookList = localStash.get(bookList);
  }

  function populateBookList () {
      var list = [];

      list.push(Book({id: list.length + 1, title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
      list.push(Book({id: list.length + 1, title: "Walden",        author: "Henry David Thoreau", price: 2.99}));
      list.push(Book({id: list.length + 1, title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));

      localStash.set('bookList', list);

      return list;
    }


  //   if (localStash.length > 0) {
  //     for (var i = 0, l = vm.bookList.length; i < l; i++) {
  //       vm.bookList.push(localStash.get(localStash.key(i)))
  //     }
  //   } else {
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
