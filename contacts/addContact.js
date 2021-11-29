const {v4} = require("uuid");

const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const addContact = async({name, email, phone}) => {

    if (!name && !email && !phone) {
        console.error("Enter valid data");
        return;
    };

    const contact = {
        name, 
        email, 
        phone
    };

    const contacts = await getAllContacts();
    const newContact = {...contact, id: v4()};
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

module.exports = addContact;