var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12253212",
  password: "7eQG1tfLvp",
  database: "sql12253212"
});

connection.connect(err =>{
  if(!!err){
    console.log("database connection error: ",err);
  } else {
    console.log("database connected...!");
  }
});