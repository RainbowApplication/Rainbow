import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {

  private searchForSpecialChars(searchString: string): boolean {
    let specialChars: string = "!@#$%^&*()-=+|}{\\;':\"<>,.?~`";
    let isSpecial: boolean = false;

    for (let i = 0; i < searchString.length; i++) {
      let char = searchString[i];
      for (var f = 0; f < specialChars.length; f++) {
        if (char == specialChars[f]) {
          isSpecial = true;
          break;
        }
      }
    }

    return isSpecial;
  }


  public async setData(setKey: string, setValue: string): Promise<string> {
    try {
      if (setValue.length > 25) throw 'setValue length is greater than 25';
      else if (setValue.length < 1) throw 'setValue length is less than 1';
      else if (await this.searchForSpecialChars(setValue)) throw `setValue(${setValue}) contains special characters`;
      
      await AsyncStorage.setItem(`@${setKey}`, setValue);
      return 'Ok';
    } catch (err) {
      console.error(`Could not set data: ${err}`);
      return `Could not set data: ${err}`;
    }
  }

  public async getData(getKey: string): Promise<string | null> {
    try {
      let res = await AsyncStorage.getItem(`@${getKey}`);
      return res;
    } catch (err) {
      return `Could not get data: ${err}`;
    }
  }

  public async getAllData(): Promise<readonly string[] | void | string> {
    try {
      let res = await AsyncStorage.getAllKeys();
      return res;
    } catch (err) {
      return `Could not get all data: ${err}`;
    }
  }

  public async deleteData(key: string): Promise<string | void> {
    try {
      let res = await AsyncStorage.removeItem(key);
      return res;
    } catch (err) {
      return `Could not remove ${key}: ${err}`;
    }
  }
}
