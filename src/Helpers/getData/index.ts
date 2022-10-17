import LocalStorage from '../LocalStorage';

// Add filtering on what gets stored

async function getName(ls: LocalStorage, setName: any) {
  let data = await ls.getData('Name');
  setName(data);
}

async function getGender(ls: LocalStorage, setGender: any) {
  let data = await ls.getData('Gender');
  setGender(data);
}

async function getPronouns(ls: LocalStorage, setPronouns: any) {
  let data = await ls.getData('Pronouns');
  setPronouns(data);
}

async function getStatus(ls: LocalStorage, setStatus: any) {
  let data = await ls.getData('Status');
  setStatus(data);
}

export {getName, getGender, getPronouns, getStatus};
