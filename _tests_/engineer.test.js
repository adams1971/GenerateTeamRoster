const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it ('should return the corret name wiht the get method getName is run', () => {
        
        const name = 'John Doe';
        const engineer = new Engineer('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(engineer.getName()).toEqual(name);
    });

    it ('should return the corret ID when i use the getID method', () => {
        
        const id = 1;
        const engineer = new Engineer('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(engineer.getId()).toEqual(id);
    });

    it ('should return the corret email when I use the getEmail method', () => {
        
    const email = 'johndow@nowheremail.com';
    const engineer = new Engineer('John Doe', 1, 'johndow@nowheremail.com');
    // const results = employee.getName();

    expect(engineer.getEmail()).toEqual(email);
    });

    it ('should return the corret role when I use the getRole method', () => {
            
        const role = 'Engineer';
        const engineer = new Engineer('John Doe', 1, 'johndow@nowheremail.com');
        // const results = employee.getName();

        expect(engineer.getRole()).toEqual(role);
    });

    it ('should return the corret github username when I use the gitHub method', () => {
            
        const gitHub= 'johndoedoe';
        const engineer = new Engineer('John Doe', 1, 'johndow@nowheremail.com', 'johndoedoe');
        // const results = employee.getName();

        expect(engineer.getGithub()).toEqual(gitHub);
    });
});