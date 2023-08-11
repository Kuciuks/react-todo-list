import { useMode } from "../Provider/ModeProvider";

const ToggleButton = () =>{

    const {mode, toggleMode} = useMode("light")

    return(
        <div>
            <button 
            onClick={toggleMode}
            >Toggle {mode}</button>
        </div>
    )
}

export default ToggleButton