(function() {
"use strict";

ddescribe('Q3: Book List', function () {

  var $scope, ctrl;

  beforeEach(function() {
    module('app');

    inject(function(_$controller_, _$rootScope_) {
      $scope   = _$rootScope_.$new();
      ctrl = _$controller_('ctrl', {
        $scope: $scope
      })
    })
  })

  it("returns true", function(){
    expect(true).toBe(true)
  })
})
})() // IIFE
