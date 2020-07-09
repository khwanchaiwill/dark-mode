import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react';

export const useDarkmode = (keyValuse) => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode', keyValuse);

    useEffect(() => {
        if(someValue){
             document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode')
        }

    }, [someValue, setSomeValue])
    return [someValue, setSomeValue]

}

