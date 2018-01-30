// factory only return object you create. service return new serviceName
app.factory('defaultValueFactory', function () {
    var value = {
        ipPath: 'http://127.0.0.1:3000'
    };
    return value;

    
});