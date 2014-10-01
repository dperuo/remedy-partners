/*
 * ngStash.js
 *
 * v0.2.0
 *
 * An Angular factory for working with localStorage and sessionStorage.
 *
 * Released under the MIT License.
 *
 * Derek Peruo
 * http://github.com/dperuo
 *
 */



'use strict';

angular
  .module('ngStash', [])
  .factory('sessionStash', sessionStash)
  .factory('localStash', localStash);

sessionStash.$inject = ['$window'];
localStash.$inject = ['$window'];

function sessionStash ($window) {
  return {
    set: function (key, value) {
      var newKey = stringify(key),
          newVal = stringify(value);

      $window.sessionStorage.setItem(newKey, newVal);
    },
    get: function (key) {
      var val = JSON.parse($window.sessionStorage.getItem(key));
      return val;
    },
    remove: function(key) {
      $window.sessionStorage.removeItem(key);
    },
    clear: function () {
      $window.sessionStorage.clear();
    }
  };
}

function localStash ($window) {
  return {
    set: function (key, value) {
      var newKey = stringify(key),
          newVal = stringify(value);

      $window.localStorage.setItem(newKey, newVal);
    },
    get: function (key) {
      var val = JSON.parse($window.localStorage.getItem(key));
      return val;
    },
    remove: function(key) {
      $window.localStorage.removeItem(key);
    },
    clear: function () {
      $window.localStorage.clear();
    }
  };
}



// --------------- HELPER FUNCTIONS --------------- //
function stringify (value) {
  var stringified = (typeof(value) === 'string' ) ? value : JSON.stringify(value);
  return stringified;
}
