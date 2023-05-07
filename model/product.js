const Sequelize = require('sequelize');
const db = require('../utils/database');
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

let data ; 

       return query.collection('products').find({}).toArray().then(result =>{
            console.log('result3');
            console.log(result) ; 
            return result ; 
        }).catch(err=>{

            return data ; 
        });




    }


    addProduct() {
        const query = database();
      return  query.collection('products').insertOne(this).then(result => {
            console.log(result);

        });
    }
}