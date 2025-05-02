//* Utils
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactsData = await readContacts();

  if (contactsData.length === 0) {
    console.log(`Contact list is already empty!`);
    return;
  }

  contactsData.pop();

  const writeContactsData = await writeContacts(contactsData);
  console.log(`Last contact from list was deleted!`);
};

removeLastContact();
