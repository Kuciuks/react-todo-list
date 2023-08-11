import ToggleButton from './Components/ToggleButton.jsx'
import ModeProvider from './Provider/ModeProvider.jsx'
import './Styles/App.css'

function App() {
    return(
        <ModeProvider>
            <ToggleButton />
        </ModeProvider>
    )
}

export default App
