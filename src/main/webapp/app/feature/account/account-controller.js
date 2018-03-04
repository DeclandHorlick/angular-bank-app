"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
        
        $log.log("Account controller created now");
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        vm.deleteThisAccount = function (accID) {

            $log.log("Trying to delete account ");
            $log.log(accID);
            var curAccObj = {id:accID.id}
            accountService.deleteAccount(curAccObj).then(function (result) {
                init();
                $log.log("inside delete account ");

            }, function (error) {
                vm.error = true;
                vm.errorMessage = accountHasNotBeenDeleted;
            });
            
        }

        vm.updateThisAccount = function (accountId,firstName, secondName, accountNumber ) {

            $log.log("Trying to update account ");
            $log.log(firstName, secondName, accountNumber, accountId);
            var curAccObj = {  id: accountId, firstName: firstName, secondName: secondName, accountNumber: accountNumber };
            $state.go('updateAccount', curAccObj);
            
            
        }
       
       init();
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log', '$state', AccountController]);
}());