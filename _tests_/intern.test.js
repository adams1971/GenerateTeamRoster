const Intern = require('../lib/intern');

describe('Intern', () => {
    it ('should return the correct name when the get method getName is run', () => {
        
        const name = 'John Doe';
        const intern = new Intern('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(intern.getName()).toEqual(name);
    });

    it ('should return the correct ID when i use the getID method', () => {
        
        const id = 1;
        const intern = new Intern('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(intern.getId()).toEqual(id);
    });

    it ('should return the correct email when I use the getEmail method', () => {
        
    const email = 'johndow@nowheremail.com';
    const intern = new Intern('John Doe', 1, 'johndow@nowheremail.com');
    // const results = employee.getName();

    expect(intern.getEmail()).toEqual(email);
    });

    it ('should return the correct role when I use the getRole method', () => {
            
        const role = 'Intern';
        const intern = new Intern('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(intern.getRole()).toEqual(role);
    });

    it ('should return the correct school attended when I use the getSchool method', () => {
            
        const school= 'UW';
        const intern = new Intern ('John Doe', 1, 'johndow@nowheremail.com', 'UW');
        // const results = employee.getName();

        expect(intern.getSchool()).toEqual(school);
    });
});