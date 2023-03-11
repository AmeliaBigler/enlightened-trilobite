// Packages/modules needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const db = require("./config/connection");
const { printTable } = require('console-table-printer');

const Employee = require('./lib/employee');
const Department = require('./lib/department');
const Role = require('./lib/role');

const menuQ = {
    type: 'list',
    message: 'What would you like to do?',
    name: 'menuQ',
    choices: [
        'View all employees',
        'Add employee',
        'Update employee role',
        'View all departments',
        'Add department',
        'View all roles',
        'Add role',
        'Exit',
    ],
};

const employeeQs = [
    {
        type: 'input',
        message: 'Employee first name:',
        name: 'first_name',
    },
    {
        type: 'input',
        message: 'Employee last name:',
        name: 'last_name',
    },
    {
        type: 'input', //TODO: make choice list
        message: 'Employee role:',
        name: 'role',
    },
    {
        type: 'input', //TODO: make choice list
        message: 'Employee manager:',
        name: 'manager',
    },
];

const departmentQs = [
    {
        type: 'input',
        message: 'Department name:',
        name: 'department_name',
    },
];

const roleQs = [
    {
        type: 'input',
        message: 'Title name:',
        name: 'title',
    },
    {
        type: 'input', //TODO: make integer
        message: 'Salary:',
        name: 'salary',
    },
    {
        type: 'input', //TODO: make choice list
        message: 'Department:',
        name: 'department_id',
    },
];

const employeeList = [
    // TODO: dynamically list employees
]

const managerList = [
    // TODO: dynamically list managers
]

const departmentList = [
    // TODO: dynamically list departments
]

const roleList = [
    // TODO: dynamically list departments
]

function promptQsFunction() {
    inquirer.prompt(menuQ)
    .then((data) => {
        if(data.menuQ === 'Add employee') {
            inquirer.prompt(employeeQs)
            .then((data) => {
                const newEmployee = new Employee(data.first_name, data.last_name, data.role, data.manager);
                newEmployee.save();
                promptQsFunction();
            });
        } else if (data.menuQ === 'View all employees') {
            const sql = `SELECT * FROM employee`;
            db.query(sql, (err, res) => {
                if (err) {
                    throw err;
                }
                printTable(res);       
                promptQsFunction();
            });  
        } else if (data.menuQ === 'Update employee role') {
            // TODO: update employee role code
        } else if (data.menuQ === 'Add department') {
            inquirer.prompt(departmentQs)
            .then((data) => {
                const newDepartment = new Department(data.department_name);
                newDepartment.save();
                promptQsFunction();
            });
        } else if (data.menuQ === 'View all departments') {
            const sql = `SELECT * FROM department`;
            db.query(sql, (err, res) => {
                if (err) {
                    throw err;
                }
                printTable(res);
                promptQsFunction();       
            });  
        } else if (data.menuQ === 'Add role') {
            inquirer.prompt(roleQs)
            .then((data) => {
                const newRole = new Role(data.title, data.salary, data.department_id);
                newRole.save();
                promptQsFunction();
            });
        } else if (data.menuQ === 'View all roles') {
            const sql = `SELECT * FROM role`;
            db.query(sql, (err, res) => {
                if (err) {
                    throw err;
                }
                printTable(res);
                promptQsFunction();       
            });
        } else {
            console.log('Goodbye!');
        }
    });
}

// Define function to initialize app
function init() {
    promptQsFunction();
};

// Function call to initialize app
init();