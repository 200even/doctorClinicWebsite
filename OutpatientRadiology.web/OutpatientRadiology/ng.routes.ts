/// <reference path="scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="ng.module.ts" />

module app.config {
    'use strict';

    export class routes {
        static $inject = [
            '$stateProvider',
            '$urlRouteProvider',
            '$locationProvider',
            '$injector'
        ];

        static configureRoutes($stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider,
            $injector: ng.auto.IInjectorService) {

            if (window.history && window.history.pushState) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'components/home/home.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'components/about/about.html'
                })
                .state('services', {
                    url: '/services',
                    templateUrl: 'components/services/services/html'
                })
                .state('appointments', {
                    url: '/appointments',
                    templateUrl: 'components/appointments/appointments.html' 
                })
                .state('forms', {
                    url: '/forms',
                    templateUrl: 'components/forms/forms.html'
                })
                .state('payBill', {
                    url: '/paybill',
                    templateUrl: 'components/payBill/payBill.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'components/contact/contact.html'
                });

            $urlRouterProvider.otherwise(($injector: ng.auto.IInjectorService) => {
                var $state: any;
                $state = $injector.get("$state");
                $state.go("home");
            });
        }
    }
}