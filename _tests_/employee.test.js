const Employee = require('../lib/employee');

describe('Employee', () => {
    it ('should return the corret name wiht the get method getName is run', () => {
        
            const name = 'John Doe';
            const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
            // const results = employee.getName();

            expect(employee.getName()).toEqual(name);
    });

    it ('should return the corret ID when i use the getID method', () => {
        
        const id = 1;
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getId()).toEqual(id);
    });

    it ('should return the corret email when I use the getEmail method', () => {
            
        const email = 'johndow@nowheremail.com';
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getEmail()).toEqual(email);
    });

    it ('should return the corret role when I use the getRole method', () => {
            
        const role = 'Employee';
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getRole()).toEqual(role);
    });
});
