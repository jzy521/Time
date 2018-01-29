// factory only return object you create. service return new serviceName
app.service('restService', function ($http) {
    this.postData = function (path, data, option) {
        return $http.post(path, data, option);
    }

    

    this.getData = function (path, option) {
        return $http.get(path, option);
    }
});