"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                params: {
			    obj: null
			    },
                templateUrl: "app/feature/account/account.html"
        }).state("transaction", {
                url: "/transaction",
                params: {
     			obj: null
   				},
                templateUrl: "app/feature/transaction/transaction.html"
        }).state("transactionDetails", {
                url: "/transactionDetails", 
                params: {
     			obj: null
  				},
                templateUrl: "app/feature/transactionDetails/transactionDetails.html"
        })
    });
    
}());