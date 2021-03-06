const getAllContacts = require("./getAllContacts");

const getById = async(id) => {
    const contacts = await getAllContacts();
    const filteredContact = contacts.find(contact => String(contact.id) === String(id));
    if(!filteredContact) {
        return null;
    };

    return filteredContact;
};

module.exports = getById;