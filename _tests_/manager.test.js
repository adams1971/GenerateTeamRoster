const Manager = require('../lib/manager');

describe('Manager', () => {
    it ('should return the correct name with the get method getName is run', () => {
        
        const name = 'John Doe';
        const manager = new Manager('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(manager.getName()).toEqual(name);
    });

    it ('should return the correct ID when i use the getID method', () => {
        
        const id = 1;
        const manager= new Manager('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(manager.getId()).toEqual(id);
    });

    it ('should return the correct email when I use the getEmail method', () => {
        
    const email = 'johndow@nowheremail.com';
    const manager = new Manager('John Doe', 1, 'johndow@nowheremail.com');
    // const results = employee.getName();

    expect(manager.getEmail()).toEqual(email);
    });

    it ('should return the correct role when I use the getRole method', () => {
            
        const role = 'Manager';
        const manager = new Manager('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(manager.getRole()).toEqual(role);
    });

    it ('should return the correct office phone # when I use the getOfficeNumber method', () => {
            
        const officeNumber= '444-8675309';
        const manager = new Manager('John Doe', 1, 'johndow@nowheremail.com', '444-8675309');
        // const results = employee.getName();

        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
});