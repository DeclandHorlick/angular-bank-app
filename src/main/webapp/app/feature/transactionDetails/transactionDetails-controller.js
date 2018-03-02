(function() {

    var TransactionDetailsController =  function($stateParams, $state) {
        
    	var vm = this;
    	
    	vm.transactionDetList = [
        		{'transactionId': '1', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1240'},
        		{'transactionId': '2', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1239'},
        		{'transactionId': '3', 'transactionType': 'D', 'transactionAmount': '300', 'accountNumber': '1237'}
        		
        	];
        	
        	 vm.transactionId = $state.params.obj
        	 console.log("TransId " + vm.transactionId);
        	        	
    };

    angular.module('accountApp').controller('transactionDetailsController', ['$stateParams', '$state', TransactionDetailsController]);
}());