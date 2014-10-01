// 2. Make code more flexible for changes considering that the list of
// important fruits will grow. Add 5 more fruits as examples.

function setFruitImportance (fruit) {

  var fruitArray = ['apple', 'fig', 'kiwi', 'lemon', 'mango', 'orange', 'papaya', 'plum'];

  return isImportantFruit = (fruitArray.indexOf(fruit) !== -1) ? true : false;
}
