(function() {
"use strict";

/* global afterEach, describe, expect, isImportantFruit, it, testFruitImportance */

describe('Q2: Important Fruit', function() {

  afterEach(function() {
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is apple', function() {
    testFruitImportance('apple');
  });

  it('sets isImportantFruit as true when fruit is fig', function() {
    testFruitImportance('fig');
  });

  it('sets isImportantFruit as true when fruit is kiwi', function() {
    testFruitImportance('kiwi');
  });

  it('sets isImportantFruit as true when fruit is lemon', function() {
    testFruitImportance('lemon');
  });

  it('sets isImportantFruit as true when fruit is mango', function() {
    testFruitImportance('mango');
  });

  it('sets isImportantFruit as true when fruit is orange', function() {
    testFruitImportance('orange');
  });

  it('sets isImportantFruit as true when fruit is papaya', function() {
    testFruitImportance('papaya');
  });

  it('sets isImportantFruit as true when fruit is plum', function() {
    testFruitImportance('plum');
  });

});
})(); // IIFE









