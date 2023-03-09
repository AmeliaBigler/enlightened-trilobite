const Department = require('../lib/department');

describe('Department', () =>  {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a 'department_name' property set to the 'department_name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const department_name = 'PR';
            // Act
            const obj = new Department(department_name);
            // Assert
            expect(obj.department_name).toEqual(department_name);
        })

        // Exception test
        it("should throw an error if not provided a 'department_name' value", () => {
            // Arrange
            const callback = () => new Department();
            const err = new Error(
            "Expected parameter 'department_name' to be a non empty string"
            );
    
            // Assert
            expect(callback).toThrowError(err);
        })
    })
})