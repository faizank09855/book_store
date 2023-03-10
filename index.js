const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const errorRoutes = require('./routes/error-path');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(express.static(path.join(__dirname, "style")))
app.use(adminRoutes.Router)
app.use(userRoutes.Router);
app.use(errorRoutes.Router);
sequelize.sync()
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });
