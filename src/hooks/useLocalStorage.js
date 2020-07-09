import { useState } from 'react';


 export const useLocalStorage = (keyValues, initailValues ) => {
    const [storedValues, setStoredValues] = useState(() => {
      const item = window.localStorage.getItem(keyValues);
      return item ? JSON.parse(item) : initailValues;
    });
    const setValues = value => {
        console.log(value)
        setStoredValues(value);
        window.localStorage.setItem(keyValues, JSON.stringify(value));
    }
    return [storedValues, setValues];
}
