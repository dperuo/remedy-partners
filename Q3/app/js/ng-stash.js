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
      var newKey = stringTest(key),
          newVal = stringTest(value);

      $window.sessionStorage.setItem(newKey, newVal);
    },
    get: function (key) {
      var val = $window.sessionStorage.getItem(key);
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
      var newKey = stringTest(key),
          newVal = stringTest(value);

      $window.localStorage.setItem(newKey, newVal);
    },
    get: function (key) {
      var val = $window.localStorage.getItem(key);
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
function stringTest (value) {
  var testedValue = (typeof(value) === 'string' ) ? value : JSON.stringify(value);
  return testedValue;
}
