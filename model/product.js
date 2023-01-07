const db = require('../utils/database');
const products = [];

module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        db.execute('INSERT INTO student ( student_name , student_class ) VALUES (? , ? )', [this.title, "12"])
            .then(() => { console.log("data inserted Successful"); })
    }

    static fetchAll(res) {
        db.execute('SELECT * FROM student')
        .then((result) =>{
            res.render('admin-page',
            {
                title: 'Admin Page',
                fetchData: result[0] ?? [],
                isAdmin: true,
                isUser: false,
            });    
        })
        .catch(err => console.log("database error => " + err));
    }
}