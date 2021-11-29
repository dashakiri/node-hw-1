const contactsOperations = require('./contacts');

const { Command } = require("commander");
const program = new Command();

program 
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "getAllContacts":
            const contacts = await contactsOperations.getAllContacts();
            console.log(contacts);
            break;
        case "getById": 
            const contact = await contactsOperations.getById(id);
            if(!contact) {
                console.error('Contact not found');
            };
            console.log(contact);
            break;
        case "addContact":
            const newContact = await contactsOperations.addContact({name, email, phone});
            console.log(newContact);
            break;
        case "removeById":
            const removeContact = await contactsOperations.removeById(id);
            console.log(removeContact);
            break;
        default: 
            console.log("Unknown action");
    }
};

invokeAction(argv);