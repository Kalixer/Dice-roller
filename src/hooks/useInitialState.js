import { useState } from "react";

const initalState = 'english';

const useInitialState = () => {
    const [language, setLanguage] = useState(initalState)

    const changeLanguage = () => {
        if(language == 'english'){
            setLanguage('spanish')
        }
        if(language == 'spanish'){
            setLanguage('english')
        }
    }

    return { language, changeLanguage };
}

export default useInitialState;