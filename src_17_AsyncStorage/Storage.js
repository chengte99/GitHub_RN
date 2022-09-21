import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {

    /**
     * 
     * @param {*} key 
     * @param {*} value 
     * @returns 
     */
    static set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 
     * @param {*} key 
     * @returns 
     */
    static get(key) {
        return AsyncStorage.getItem(key).then((res)=>{
            if(res && res !== '') {
                const value = JSON.parse(res);
                return value;
            }
        }).catch((e)=>{
            return null
        })
    }

    /**
     * 
     * @param {string} key 
     * @param {mixed} newValue 
     * @returns 
     */
    static update(key, newValue) {
        return AsyncStorage.getItem(key).then((res)=>{
            if(res && res !== '') {
                const oldValue = JSON.parse(res);
                newValue = typeof newValue === 'string' ? newValue : Object.assign({}, oldValue, newValue);
                return AsyncStorage.setItem(key, JSON.stringify(newValue));
            }
        })
    }

    static remove(key) {
        return AsyncStorage.removeItem(key);
    }

    static clear() {
        return AsyncStorage.clear();
    }
}

export default Storage;