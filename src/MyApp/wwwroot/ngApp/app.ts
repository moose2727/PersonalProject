namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker', 'ngSanitize']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider: any
    ) => {
        //filepicker api key
        filepickerProvider.setKey('Ay0qe4wR6efe0Ua2XZC5wz');
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: '/ngApp/views/profile.html',
                controller: MyApp.Controllers.ProfileController,
                controllerAs: 'controller'
            })
            .state('studio', {
                url: '/studio',
                templateUrl: '/ngApp/views/studio.html',
                controller: MyApp.Controllers.StudioController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/ngApp/views/signup.html',
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('profileDetails', {
                url: '/profiledetails',
                templateUrl: '/ngApp/views/profiledetails.html',
                controller: MyApp.Controllers.ProfileDetailsController,
                controllerAs: 'controller'
            })
            .state('bandProfile', {
                url: '/bandProfile',
                templateUrl: '/ngApp/views/BandProfile.html',
                controller: MyApp.Controllers.BandProfileController,
                controllerAs: 'controller'
            })
            .state('createBand', {
                url: '/createBand',
                templateUrl: '/ngApp/views/createBand.html',
                controller: MyApp.Controllers.CreateBandController,
                controllerAs: 'controller'
            })
            .state('uploadSong', {
                url: '/uploadSong',
                templateUrl: 'ngApp/views/uploadSong.html',
                controller: MyApp.Controllers.UploadSongController,
                controllerAs: 'controller'
            })
            .state('songDetails', {
                url: '/songDetail/:id',
                templateUrl: 'ngApp/views/songDetail.html',
                controller: MyApp.Controllers.SongDetailsController,
                controllerAs: 'controller'
            })
            .state('editSong', {
                url: '/editSong/:id',
                templateUrl: 'ngApp/views/EditSong.html',
                controller: MyApp.Controllers.EditSongController,
                controllerAs: 'controller'
            })
            .state('deleteSong', {
                url: '/deleteSong/:id',
                templateUrl: 'ngApp/views/DeleteSong.html',
                controller: MyApp.Controllers.DeleteSongController,
                controllerAs: 'controller'
            })
            .state('logout', {
                url: '/logout',
                templateUrl: 'ngApp/views/logout.html',
                controller: MyApp.Controllers.AccountController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });
        

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });


    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}