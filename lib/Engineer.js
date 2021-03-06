const Employee = require('./Employee.js');

const questions = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the Engineer's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the Engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the Engineer's Github username?",
        name: 'github',
    },
];




class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = {Engineer,questions};