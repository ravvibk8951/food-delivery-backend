const mysql = require('mysql');
const  express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json);

var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'fooddeliverydb',
   multipleStatements: true
});

mysqlConnection.connect((err) =>{
  if(!err)
  {
    console.log('DB connection succeded.');}

    else
    {
    console.log('DB connection Failed \n Error: '+ JSON.stringify(err.undefined,2));
  }
});

app.listen(3000,() => console.log('express server is runniing at port no : 3000'));

app.get('/customers',(res,req)=>{
  mysqlConnection.query('SELET * FROM fooddeliverydb.customer',(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);
  })
});
