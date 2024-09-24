import { createContext,  useState } from "react";

const DartModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDartMode] = useState(false)
    return (
        <DartModeContext.Provider value={[isDarkMode, setIsDartMode ]} >
            {children}
        </DartModeContext.Provider>
    )
}

export const DarkMode = DartModeContext;
export default DarkModeContextProvider

