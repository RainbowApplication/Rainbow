import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
  public async setData(setKey: string, setValue: string): Promise<string> {
    try {
      await AsyncStorage.setItem(`@${setKey}`, setValue);
      return 'Ok';
    } catch (err) {
      return `Could not set data: ${err}`;
    }
  }

  public async getData(getKey: string): Promise<string | null> {
    try {
      let res = await AsyncStorage.getItem(getKey);
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
}
