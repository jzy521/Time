app.directive('timeBuyTime', function () {

    return {
        templateUrl: 'html/buyTime.html',
        replace: true,
        scope: false,
        controller: function ($scope, restService, defaultValueFactory) {
            restService.postData(defaultValueFactory.ipPath + '/user/getAllUsers').success(function (data) {
                $scope.User = data;
            });

        }

    };
});