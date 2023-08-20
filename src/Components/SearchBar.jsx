import { useState } from 'react'
import {useTodoList} from '../Provider/TodoListProvider'

export default function SearchBar() {

    const [input, setInput] = useState("")

    const {todoList, setTodosList} = useTodoList()

    const handleInput = (e) => {
        setInput(e.target.value)
        setTodosList(input)
    }

    return(
        <input value={input} onChange={handleInput}></input>
    )
}