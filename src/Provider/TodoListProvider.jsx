import {useState, useContext, createContext } from "react";

const TodoListContext = createContext()

const TodoListProvider = ({children}) => {

    const [todoList, setTodoList] = useState([])

    const manageTodoList = (todos,text) => {
        const filteredTodos = todos.filter((element) =>{
            element.task.includes(text)
        })
        setTodoList(filteredTodos)
    }


    return(
        <TodoListContext.Provider value={{
            todoList, importTodoList: manageTodoList}}>
            {children}
        </TodoListContext.Provider>
    )
}

export const useTodoList = () => useContext(TodoListContext)

export default TodoListProvider