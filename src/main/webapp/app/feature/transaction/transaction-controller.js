(function() {

    var TransactionController =  function($state) {
        
    	var vm = this;
    	vm.filter = -1;
    	vm.name;
    	
    	
            vm.transactionList = [
        		{'transactionId': '1', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1240'},
        		{'transactionId': '2', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1239'},
        		{'transactionId': '3', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1237'}
        		
        	];
        	
        	vm.displayFilter = function(accNum)
        	{
        		
        		console.log(vm.name);
        		vm.filter = accNum;
        	};
        	vm.getName = function(myName)
        	{
        	vm.name = myName
        	};
        	
        	vm.passPar = function(transId)
        	{
        		vm.transId = transId;
        		console.log("TID " + vm.transId);
        		$state.go('transactionDetails', {obj:vm.transId});
        	};
        	

        	
        	
    };

    angular.module('accountApp').controller('transactionController', ['$state', TransactionController]);
}());