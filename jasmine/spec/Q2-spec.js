(function() {
"use strict";

/* global afterEach, describe, expect, isImportantFruit, it, setFruitImportance */

describe('Q2: Important Fruit', function() {

  describe('sets isImportantFruit as true when fruit is', function() {

    afterEach(function() {
      expect(isImportantFruit).toBe(true);
    });

    it('apple', function() {
      setFruitImportance('apple');
    });

    it('fig', function() {
      setFruitImportance('fig');
    });

    it('kiwi', function() {
      setFruitImportance('kiwi');
    });

    it('lemon', function() {
      setFruitImportance('lemon');
    });

    it('mango', function() {
      setFruitImportance('mango');
    });

    it('orange', function() {
      setFruitImportance('orange');
    });

    it('papaya', function() {
      setFruitImportance('papaya');
    });

    it('plum', function() {
      setFruitImportance('plum');
    });
  })

  describe('sets isImportantFruit as false when fruit is', function() {

    afterEach(function() {
      expect(isImportantFruit).toBe(false);
    });

    it('anchovy', function() {
      setFruitImportance('anchovy');
    });

    it('a random number', function() {
      setFruitImportance(Math.random());
    });

    it('an empty object', function() {
      setFruitImportance({});
    });

    it('an empty array', function() {
      setFruitImportance([]);
    });

    it('an empty function', function() {
      setFruitImportance(function (){})
    });
  })
});
})(); // IIFE









