import LocalStorage from '../LocalStorage';


// Add filtering on what gets stored

async function getName(ls: LocalStorage, setName: any) {
  let data = await ls.getData('Name');
  setName(data);
}

async function getGender(ls: LocalStorage, setgender: any) {
  let data = await ls.getData('Gender');
  setgender(data);
}

async function getPronouns(ls: LocalStorage, setpronouns: any) {
  let data = await ls.getData('Pronouns');
  setpronouns(data);
}

async function getStatus(ls: LocalStorage, setstatus: any) {
  let data = await ls.getData('Status');
  setstatus(data);
}

export {getName, getGender, getPronouns, getStatus};
