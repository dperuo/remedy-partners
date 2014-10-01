angular
.module('bookApp', ['ngStash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['localStash'];

function ctrl(localStash) {
  var vm = this,
      bookList   = 'bookList',
      totalPrice = 'totalPrice',
      totalQty   = 'totalQty';

  vm.bookList      = [];
  vm.confirmDelete = false;
  vm.deleteBook    = deleteBookFn;
  vm.newBook       = {};
  vm.saveNewBook   = saveNewBookFn;
  vm.totalPrice    = 0;
  vm.totalQty      = 0;
  vm.updateBook    = updateBookFn;
  vm.cleared       = false;

  vm.bookList   = (localStash.get(bookList))   ? localStash.get(bookList)   : populateBookList();
  vm.totalPrice = (localStash.get(totalPrice)) ? localStash.get(totalPrice) : setTotalPrice();
  vm.totalQty   = (localStash.get(totalQty))   ? localStash.get(totalQty)   : setTotalQty();

  function saveNewBookFn(newBook) {
      var list = localStash.get(bookList);
      list.push(newBook);
      localStash.set(bookList, list);
      vm.bookList = localStash.get(bookList);
      vm.newBook = {};
      setTotalPrice();
      setTotalQty();
  }

  function deleteBookFn(index) {
    var list = localStash.get(bookList);
    list.splice(index, 1);
    localStash.set(bookList, list);
    vm.bookList = localStash.get(bookList);
    setTotalPrice();
    setTotalQty();
  }

  function updateBookFn() {
    var list     = vm.bookList,
        newPrice = 0,
        newQty   = 0;

    list.forEach(function(value, index) {
      newPrice += (list[index].price) * (list[index].qty);
      newQty   += list[index].qty;
    })

    localStash.set(bookList, list);
    localStash.set(totalPrice, newPrice);
    localStash.set(totalQty, newQty);

    vm.bookList   = localStash.get(bookList);
    vm.totalPrice = newPrice;
    vm.totalQty   = newQty;
  }

  function populateBookList () {
    var list = [];

    list.push(Book({title: "Dracula",       author: "Bram Stoker",         price: 1.99}));
    list.push(Book({title: "Walden",        author: "Henry David Thoreau", price: 2.99, qty: 2}));
    list.push(Book({title: "Invisible Man", author: "Ralph Ellison",       price: 3.99}));

    localStash.set('bookList', list);

    setTotalPrice();
    setTotalQty();

    return list;
  }

  function setTotalPrice() {
    var sum  = 0,
        list = [];

    list = localStash.get('bookList')

    list.forEach(function(value, index) {
      var subtotal = (list[index].price) * (list[index].qty);
      sum += subtotal;
    })

    localStash.set(totalPrice, sum)

    vm.totalPrice = sum;
  }

  function setTotalQty() {
    var sum  = 0,
        list = [];

    list = localStash.get('bookList')

    list.forEach(function(value, index) {
      sum += list[index].qty
    })

    localStash.set(totalQty, sum)

    vm.totalQty = sum;
  }

  // vm.clearStorage = function() {
  //   localStash.clear();
  //   vm.cleared = true;
  // }

}

function Book (obj) {
  var obj  = (obj) ? obj : {},
      book = {};

  book.title  = obj.title  || 'Paradise Lost';
  book.author = obj.author || 'John Milton';
  book.price  = obj.price  ||  0;
  book.qty    = obj.qty    ||  1;

  return book;
}
