import ToggleButton from './Components/ToggleButton.jsx'
import SearchBar from './Components/SearchBar.jsx'
import { useMode } from './Provider/ModeProvider.jsx'
import './Styles/App.css'

function App() {

    const {mode} = useMode() 

    return(
        <div className="container" style={{backgroundColor: mode == "dark" ? "white" : "black"}}>    
                <ToggleButton />
                <SearchBar />
        </div>
    )
}

export default App
