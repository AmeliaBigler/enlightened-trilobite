const db = require("../config/connection");

class Role {
    constructor (title, salary, department_id) {
        if (typeof title !== 'string' || !title.trim().length) {
            throw new Error("Expected parameter 'title' to be a non empty string");
        } 

        this.title = title;
        this.salary = salary;
        this.department_id = department_id;

        this.save = () => {
            const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?,?,?)`;
            const params = [this.title, this.salary, this.department_id];
            db.query(sql, params, (err, res) => {
                if (err) {
                    throw err;
                }           
            })
        };
    }
};

module.exports = Role;