const Employee = require('../lib/employee');

describe('Employee', () =>  {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a 'first_name' property set to the 'first_name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const first_name = 'Angie';
            // Act
            const obj = new Employee(first_name);
            // Assert
            expect(obj.first_name).toEqual(first_name);
        })

        // Exception test
        it("should throw an error if not provided a 'first_name' value", () => {
            // Arrange
            const callback = () => new Employee();
            const err = new Error(
            "Expected parameter 'first_name' to be a non empty string"
            );
    
            // Assert
            expect(callback).toThrowError(err);
        })
    })
})