const Employee = require('../lib/employee');

describe('Employee', () => {
    it ('should return the correct name using the getName method', () => {
        
            const name = 'John Doe';
            const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
            // const results = employee.getName();

            expect(employee.getName()).toEqual(name);
    });

    it ('should return the correct ID using the getID method', () => {
        
        const id = 1;
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getId()).toEqual(id);
    });

    it ('should return the correct email using the getEmail method', () => {
            
        const email = 'johndow@nowheremail.com';
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getEmail()).toEqual(email);
    });

    it ('should return the correct role using the getRole method', () => {
            
        const role = 'Employee';
        const employee = new Employee('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(employee.getRole()).toEqual(role);
    });
});
