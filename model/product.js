const Sequelize = require('sequelize');
const db = require('../utils/database');
const { ObjectId } = require('mongodb');
const database = require('../utils/database').getDabase;


exports.Products = class Product {
    constructor(title, price, imageUrl, description) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    getProducts() {
        const query = database();
        let data;
        return query.collection('products').find({}).toArray().then(result => {
            console.log('result3');
            console.log(result);
            return result;
        }).catch(err => {
            return data;
        });
    }

    addProduct() {
        const query = database();
        return query.collection('products').insertOne(this)
            .then(result => {
                console.log(result);

            });
    }
}


exports.UserModel = class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    createUser() {
        const query = database();
        return query.collection('users').insertOne(this).then(result => {
            console.log('created => ' + result);
        }).catch(err => {
            console.log(err);
        });
    }


    loginUser(email, password) {
        const query = database();
        return query.collection('users').findOne({ "email": email }).then(result => {
            return result;
        }
        ).catch(err => {
            console.log(err);
            return err;
        });
    }

    getProductDetails(id) {
        const query = database();
        const objectId = new ObjectId(id);
        return query.collection('products').findOne({ _id: objectId }).then(
            result => {
                console.log(id);
                return result;
            }
        ).catch(err => {
            console.log(err);
        });
    }


    editProductDetails(id, newValue) {
        const query = database();
        const objectId = new ObjectId(id);
        return query.collection('products').updateOne({ _id : objectId },{ $set: {
            title : newValue.title , 
            price : newValue.price , 
            imageUrl : newValue.imageUrl , 
            description : newValue.description
        }}).
            then(result => {
                return result;
            })
            .catch(err => {
                console.log(err);
                return err;
            });

    }
}