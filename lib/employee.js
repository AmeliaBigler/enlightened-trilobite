class Employee {
    constructor (first_name, last_name, role_id, manager_id) {
        if (typeof first_name !== 'string' || !first_name.trim().length) {
            throw new Error("Expected parameter 'first_name' to be a non empty string");
        }
        
        // TODO: set ID auto increment
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;

        this.getName = () => {
            console.log(this.first_name + this.last_name);
        }
        this.getID = () => {
            console.log(this.id);
        }
        this.getManager = () => {
            console.log(this.manager_id);
        }
        this.getRole = () => {
            return 'Employee';
        }
    }
};

module.exports = Employee;