const Role = require('../lib/role');

describe('Role', () =>  {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a 'title' property set to the 'title' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const title = 'CEO';
            // Act
            const obj = new Role(title);
            // Assert
            expect(obj.title).toEqual(title);
        })

        // Exception test
        it("should throw an error if not provided a 'title' value", () => {
            // Arrange
            const callback = () => new Role();
            const err = new Error(
            "Expected parameter 'title' to be a non empty string"
            );
    
            // Assert
            expect(callback).toThrowError(err);
        })
    })
})