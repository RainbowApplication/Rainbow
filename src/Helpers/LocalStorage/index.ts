import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorage {
    private data: object;
    // private key: string;
    // private value: any;

    constructor(item: object) {
        this.data = item;
        // this.key = data.key;
        // this.value = data.value;
    }

    public async setData() {
        try {
            await AsyncStorage.setItem(``, ``)
        } catch (err) {
            return `Could not set data: ${err}`;
        }
    }

    public async getData() {

    }
}