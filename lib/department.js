class Department {
    constructor (department_name) {
        if (typeof department_name !== 'string' || !department_name.trim().length) {
            throw new Error("Expected parameter 'department_name' to be a non empty string");
        }

        // TODO: set ID auto-increment
        this.department_name = department_name;
    }
};

module.exports = Department;