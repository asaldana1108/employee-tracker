const inquirer = require('inquirer');
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
    // afterConnection();
    Prompt();
});

// afterConnection = () => {
//     // Simple query that will SELECT everything from the 'employee' table
//     // Log the results in the console
//     //
//     connection.query('SELECT * FROM employee', function (err, res) {
//         if (err) throw err;
//         console.log(res);
//         connection.end();
//     });
//     // YOUR CODE HERE
//     //
// };

function Prompt() {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'selection',
                message: 'What would you like to do?',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
            }
        )
        .then(answer => {
            let option = answer.selection
            if (option === 'View All Departments') {
                connection.query(
                    `SELECT * FROM department`,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                        Prompt();
                    }
                )
            } else if (option === 'View All Roles') {
                connection.query(
                    `SELECT roles.id, title, salary, department_name
                    FROM roles
                    LEFT JOIN department
                    ON roles.department_id = department.id`,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                        Prompt();
                    }
                )
            }
        })
};
