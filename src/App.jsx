import ToggleButton from './Components/ToggleButton.jsx'
import TodoComponent from './Components/TodoComponent.jsx'
import { useMode } from './Provider/ModeProvider.jsx'
import './Styles/App.css'

function App() {

    const {mode} = useMode() 

    return(
        <div className="container" style={{backgroundColor: mode == "dark" ? "white" : "black", color: mode == "dark" ? "black" : "white"}}>    
                <ToggleButton />
                <TodoComponent />
        </div>
    )
}

export default App
