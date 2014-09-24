angular.module('lateRooms.domain.landingPage.directives', [])
    
    .directive('featuredLink', ['$location', function ($location) {
        return {
            replace: true,

            scope: {
                route: "@route",
                title: "@title",
                description: "@description",
                imagePath: "@imagePath"
            },

            templateUrl: '/domain/landingPage/directives/featuredLink.html',

            link: function (scope, element, attributes) {
                scope.goTo = function (route)
                {
                    $location.path( route );          
                }
            }
        };
    }]);