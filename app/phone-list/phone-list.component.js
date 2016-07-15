'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', 'strHelpers',
      function PhoneListController(Phone, strHelpers) {
        this.phones = Phone.query();
        this.orderProp = 'age';

        console.info("Demonstrating console.log and helper function: " +
          strHelpers.snippingStr("111111111122222222223333333333"));
      }
    ]
  });
