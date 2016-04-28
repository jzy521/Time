/******* start DB Modeule ********/
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/local';

var DBConnection;


/**
 * will reuse connection if already created
 */
var DBController = {};
DBController.getConnection = function (callback) {
    if (DBConnection === undefined) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                //request to mongo success
                DBConnection = db;
                console.log('DBConnection...');
                callback(DBConnection);
            }

        });
    } else {
        callback(DBConnection);
    }

}



/**** the global Service object.A service may contain multiple DB request ****/
module.exports = DBController;