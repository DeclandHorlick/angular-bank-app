"use strict";

(function() {
	
    var AddAccountController = function (accountService, $log, $state) {
 	var vm = this;
   vm.currentFirstN;
   vm.currentSecondN;  
   vm.currentAccountN;      
    
        $log.log("Account controller created now");
         
         vm.getInputs = function()
         {
         	$log.log("inputs being added");
         	vm.currentFirstN = document.getElementById('accountFname').value;
  	 		vm.currentSecondN = document.getElementById('accountSname').value;
   			vm.currentAccountN = document.getElementById('accountNum').value;
   			$log.log(vm.currentAccountN);
   			
   			vm.newAccount = {firstName: vm.currentFirstN,
        				secondName: vm.currentSecondN,
        				accountNumber: vm.currentAccountN};
   			
         
         }
         vm.init = function() {vm.getInputs();
             accountService.saveAccount(vm.newAccount).then(function (results) {
        	
        	
        	console.log(vm.currentFirstN);
        	
        	
        	console.log(vm.newAccount);
           	vm.accounts = results;
           	
           	
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
        	
        	
            }, function (error) {
                vm.error = true;
                vm.errorMessage = accountnotcreated;
            });
             $log.log(vm.newAccount);
             $state.go("account");
         }

         
       
      
     };

    angular.module('accountApp').controller('addAccountController', ['accountService','$log','$state', AddAccountController]);
}());