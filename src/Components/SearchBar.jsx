import { useState } from 'react'
import TodoComponent from '../Components/TodoComponent'
import '../Styles/SearchBar.css'

export default function SearchBar() {

    const [input, setInput] = useState("")

    const handleInput = (e) => {
        const text = e.target.value
        setInput(text)
    }

    return(
        <div className='search-bar-div'>
            <input className='search-bar' value={input} onChange={handleInput} placeholder='Search...'></input>
            <TodoComponent searchText={input.length > 0 ? input : ""} />
        </div>
    )
}