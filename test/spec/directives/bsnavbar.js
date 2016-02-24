'use strict';

describe('Directive: bsNavbar', function () {

  // load the directive's module
  beforeEach(module('serprestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs-navbar></bs-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bsNavbar directive');
  }));
});
