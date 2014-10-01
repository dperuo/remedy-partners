angular
.module('app', ['stash'])
.controller('ctrl', ctrl);

ctrl.$inject = ['sessionStash']

function ctrl(sessionStash) {
  var vm = this;

}



