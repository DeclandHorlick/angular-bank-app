"use strict";

(function () {

    var UpdateAccountController = function (accountService, $log, $stateParams) {
        var vm = this;
        vm.firstName = $stateParams.firstName;
        vm.secondName = $stateParams.secondName;
        vm.accountNumber = $stateParams.accountNumber;
        vm.accountId = $stateParams.id;


        $log.log("Account controller created now");
        

        vm.UpdateThisAccount = function () {
            var curAccObj = { id: vm.accountId, firstName: vm.firstName, secondName: vm.secondName, accountNumber: vm.accountNumber };
           accountService.updateAccount(curAccObj)
        }
    };

    angular.module('accountApp').controller('updateAccountController', ['accountService', '$log', '$stateParams', UpdateAccountController]);
}());