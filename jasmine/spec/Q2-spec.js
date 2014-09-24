(function() {
"use strict";

/* global describe, it, expect, isImportantFruit, testFruitImportance */

describe('Q2: Important Fruit', function() {

  it('sets isImportantFruit as true when fruit is apple', function() {
    testFruitImportance('apple');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is fig', function() {
    testFruitImportance('fig');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is kiwi', function() {
    testFruitImportance('kiwi');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is lemon', function() {
    testFruitImportance('lemon');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is mango', function() {
    testFruitImportance('mango');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is orange', function() {
    testFruitImportance('orange');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is papaya', function() {
    testFruitImportance('papaya');
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is plum', function() {
    testFruitImportance('plum');
    expect(isImportantFruit).toBe(true);
  });

});
})(); // IIFE









