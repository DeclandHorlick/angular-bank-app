"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("addAccount", {
                url: "/account/add",
                templateUrl: "app/feature/account/addAccount/addAcc.html"
        }).state("updateAccount", {
            url: "/account/update",
            templateUrl: "app/feature/account/updateAccount/updateAccount.html",
            params: { firstName: null,
                secondName: null,
                accountNumber: null,
                id: null}
        })
    });
}());