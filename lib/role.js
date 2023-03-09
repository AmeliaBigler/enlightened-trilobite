class Role {
    constructor (title, salary, department_id) {
        if (typeof title !== 'string' || !title.trim().length) {
            throw new Error("Expected parameter 'title' to be a non empty string");
        } 

        // TODO: set ID auto-incrememnt
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
};

module.exports = Role;