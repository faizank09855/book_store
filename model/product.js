const Sequelize = require('sequelize');
const db = require('../utils/database');
const sequelize = require('../utils/database');
const Products = sequelize.define('product' , {
id : {
    type: Sequelize.INTEGER , 
    autoIncrement : true ,
    allowNull : true , 
    primaryKey : true 

} ,
title : Sequelize.STRING , 
price : {
    type : Sequelize.DOUBLE ,
    allowNull : false
} ,
imageUrl : {
    type : Sequelize.STRING ,
    allowNull : true 
} ,
desciption : {
    type : Sequelize.STRING , 
    allowNull : false 
}

});

module.exports = Products ; 

// module.exports = class Product {

//     constructor(title) {
//         this.title = title;
//     }

//     save() {
//         db.execute('INSERT INTO student ( student_name , student_class ) VALUES (? , ? )', [this.title, "12"])
//             .then(() => { console.log("data inserted Successful"); })
//     }

//     static fetchAll(res) {
//         db.execute('SELECT * FROM student')
//         .then((result) =>{
//             res.render('admin-page',
//             {
//                 title: 'Admin Page',
//                 fetchData: result[0] ?? [],
//                 isAdmin: true,
//                 isUser: false,
//             });    
//         })
//         .catch(err => console.log("database error => " + err));
//     }
// }