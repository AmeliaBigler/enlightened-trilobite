const db = require("../config/connection");

class Department {
    constructor (department_name) {
        if (typeof department_name !== 'string' || !department_name.trim().length) {
            throw new Error("Expected parameter 'department_name' to be a non empty string");
        }

        this.department_name = department_name;

        this.save = () => {
            const sql = `INSERT INTO department (department_name)
            VALUES (?)`;
            const params = [this.department_name];
            db.query(sql, params, (err, res) => {
                if (err) {
                    throw err;
                }           
            })
        };
    }  
};

module.exports = Department;