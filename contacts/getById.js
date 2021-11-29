const getAllContacts = require("./getAllContacts");

const getById = async(id) => {
    const contacts = await getAllContacts();
    const filteredContact = contacts.find(contact => parseInt(contact.id) === parseInt(id));
    if(!filteredContact) {
        return null;
    };

    return filteredContact;
};

module.exports = getById;