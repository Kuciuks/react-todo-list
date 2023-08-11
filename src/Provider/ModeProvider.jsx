import {useState, useContext, createContext} from "react";

const ModeContext = createContext()

const ModeProvider = ({children}) =>{

    const [mode, setMode] = useState("light")

    return(
        <ModeContext.Provider 
        value={{
            mode,
            toggleMode: () => setMode(mode == "light" ? "dark" : "light") //ternary condition operator, controls the mode value
        }}>
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () => useContext(ModeContext)

export default ModeProvider