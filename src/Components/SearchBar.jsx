import { useState } from 'react'
import TodoComponent from '../Components/TodoComponent'

export default function SearchBar() {

    const [input, setInput] = useState("")

    const handleInput = (e) => {
        const text = e.target.value
        setInput(text)
    }

    return(
        <div>
            <input value={input} onChange={handleInput}></input>
            <TodoComponent searchText={input.length > 0 ? input : ""} />
        </div>
    )
}