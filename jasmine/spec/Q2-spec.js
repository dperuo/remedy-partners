(function() {
"use strict";

/* global afterEach, describe, expect, isImportantFruit, it, setFruitImportance */

describe('Q2: Important Fruit', function() {

  afterEach(function() {
    expect(isImportantFruit).toBe(true);
  });

  it('sets isImportantFruit as true when fruit is apple', function() {
    setFruitImportance('apple');
  });

  it('sets isImportantFruit as true when fruit is fig', function() {
    setFruitImportance('fig');
  });

  it('sets isImportantFruit as true when fruit is kiwi', function() {
    setFruitImportance('kiwi');
  });

  it('sets isImportantFruit as true when fruit is lemon', function() {
    setFruitImportance('lemon');
  });

  it('sets isImportantFruit as true when fruit is mango', function() {
    setFruitImportance('mango');
  });

  it('sets isImportantFruit as true when fruit is orange', function() {
    setFruitImportance('orange');
  });

  it('sets isImportantFruit as true when fruit is papaya', function() {
    setFruitImportance('papaya');
  });

  it('sets isImportantFruit as true when fruit is plum', function() {
    setFruitImportance('plum');
  });

});
})(); // IIFE









