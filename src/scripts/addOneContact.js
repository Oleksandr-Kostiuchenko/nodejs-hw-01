//* Utils
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const randomGeneratedContact = createFakeContact();

  const contactsData = await readContacts();
  contactsData.push(randomGeneratedContact);

  const writeContactsData = await writeContacts(contactsData);

  console.log('One contact was successfully generated!');
};

addOneContact();
