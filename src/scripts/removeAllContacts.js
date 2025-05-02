//* Utils
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const writeContactsData = await writeContacts([]);

  console.log(`All contacts were deleted!`);
};

removeAllContacts();
