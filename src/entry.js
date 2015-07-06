import UBT from 'src/kernel';

import 'src/tasks/timing';
import 'src/events/click';
import 'src/events/change';
import 'src/events/visit';
import 'src/events/error';

void function() {
  switch(true) {
    case typeof angular === 'object' && typeof angular.module === 'function':
      return angular.module('UBT', []).factory('UBT', function() { return UBT; });
    default:
      [eval][0]('var UBT');
      window.UBT = UBT;
  }
}();
