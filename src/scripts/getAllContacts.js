//* Node
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const contactsData = await fs.readFile(PATH_DB);

  return JSON.parse(contactsData);
};

console.log(await getAllContacts());
