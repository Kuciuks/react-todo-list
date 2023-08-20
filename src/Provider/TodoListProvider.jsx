import {useState, useContext, createContext } from "react";

const TodoListContext = createContext()

const TodoListProvider = ({children}) => {

    const [todoList, setTodoList] = useState()

    const manageTodoList = (todos,text) => {
        todos.forEach(element => {
            if(element.task.includes(text)){
                todoArray.push(element)
            }
        });
    }


    return(
        <TodoListContext.Provider value={{
            todoList, importTodoList: (todos,text) => manageTodoList}}>
            {children}
        </TodoListContext.Provider>
    )
}

let todoArray = []

export const useTodoList = () => useContext(TodoListContext)

export default TodoListProvider