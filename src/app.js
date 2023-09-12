const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRouters = require('./routes/customer');

// setting
app.set('port', process.env.PORT || 3010);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')),
 
// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  passwor: '',
  port: 3306,
  database: 'crudnodejsmysql2',
},  'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRouters);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server



app.listen(app.get('port'), () => {
  console.log('server on port 3010')  
});