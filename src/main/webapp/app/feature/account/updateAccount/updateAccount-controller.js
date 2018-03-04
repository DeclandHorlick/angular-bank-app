"use strict";

(function () {

    var UpdateAccountController = function (accountService, $log, $stateParams, $state) {
        var vm = this;
        vm.firstName = $stateParams.firstName;
        vm.secondName = $stateParams.secondName;
        vm.accountNumber = $stateParams.accountNumber;
        vm.accountId = $stateParams.id;


        $log.log("Account controller created now");
        

        vm.UpdateThisAccount = function () {
            var curAccObj = { id: vm.accountId, firstName: vm.firstName, secondName: vm.secondName, accountNumber: vm.accountNumber };
            accountService.updateAccount(curAccObj).then(function (results) {
              
            }, function (error) {
                vm.error = true;
                vm.errorMessage = accountnotcreated;
            });
            
            $state.go("account");
        }
    };

    angular.module('accountApp').controller('updateAccountController', ['accountService', '$log', '$stateParams','$state', UpdateAccountController]);
}());