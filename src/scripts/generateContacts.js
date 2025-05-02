//* Utils
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const randomGeneratedContacts = [];
  for (let i = 0; i < number; i++) {
    randomGeneratedContacts.push(createFakeContact());
  }

  const contactsDataArr = await readContacts();

  const writeContactsData = await writeContacts(
    contactsDataArr.concat(randomGeneratedContacts),
  );

  console.log(`${number} contacts were successfully generated!`);
};

generateContacts(5);
