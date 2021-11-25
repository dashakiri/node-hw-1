const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const removeById = async(id) => {
    const contacts = await getAllContacts();
    const index = contacts.findIndex(contact => contact.id === id);
    if(index === -1) {
        return null;
    };

    const [removeContact] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return removeContact;
};

module.exports = removeById;