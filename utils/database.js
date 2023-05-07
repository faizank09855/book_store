const mongodb = require('mongodb');

const client = mongodb.MongoClient;


let database;

const getConnection = callback => {
    client.connect('mongodb+srv://fk09855:icmYP6SAXoh98kT8@cluster0.jfkfi0c.mongodb.net/')
    .then(result => {
        console.log('connect');
        database = result.db(); 
        callback();
    }).catch(err => {
        console.log(err);
    });
}

const getdb = () => {
    if (database) {
        return database;
    }
    throw 'No DataBase';

}
exports.connectMongo = getConnection ; 
exports.getDabase = getdb; 