//* Utils
import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contactData = await readContacts();

  return `Total number of contacts is: ${contactData.length}`;
};

console.log(await countContacts());
