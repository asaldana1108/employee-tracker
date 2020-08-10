const mysql = require('mysql2');

//Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Atlan!1108',
    database: 'employee_db'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
  });
  
  afterConnection = () => {
    // Simple query that will SELECT everything from the 'employee' table
    // Log the results in the console
    //
    connection.query('SELECT * FROM employee', function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
    // YOUR CODE HERE
    //
  };