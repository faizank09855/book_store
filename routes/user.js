const express = require('express'); 
const routes = express.Router();

routes.get('/user' , (req , res)=>{

res.send(`<html>
  <head>
    <title>
        admin
    </title>
    </head>
    <body>
    <h1>
        user Page
        </h1>    
        <form action="/user">

</form>
    </body>
      
</html>`); 

});

exports.Router = routes ; 