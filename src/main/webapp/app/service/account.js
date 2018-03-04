"use strict";

(function () {

    
        function AccountService ($log,accountDal) {
         $log.log("Account get functions is being called");
        this.getAccounts = function()
        {
        	return accountDal.getAccounts();
        };
        
        $log.log("Account get functions is being called");
        this.saveAccount = function(accountToSave)
        {
        $log.log("Account has been passed to be created");
        	return accountDal.saveAccount(accountToSave);
        };

        this.deleteAccount = function (accountToDelete) {
            $log.log("Account has been passed to be deleted");
            return accountDal.deleteAccount(accountToDelete);
        };
        this.updateAccount = function (accountToUpdate) {
            $log.log("Account has been passed to be Updated");
            $log.log(accountToUpdate);
            return accountDal.updateAccount(accountToUpdate);
        };
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());