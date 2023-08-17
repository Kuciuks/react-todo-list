import { useReducer, useRef } from "react"


const reducer = (state, action) =>{
    switch(action.type){
        case 'addedTodo':
            return {
                ...state,
                id: crypto.randomUUID(),
                task: action.task
            }
        case 'inputChange':
            return {
                ...state,
                task: action.task
            }
        case 'delete':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case 'edit':
            return{
                ...state,
                editId: action.id,
                editingTask: action.task
            }
        case 'save':
            return{
                ...state,
                editingTask: "",
                editId: null,
                todos: state.todos.map(todo => {
                    if(todo.id == state.editId){
                        return{
                            ...todo,
                            task: action.task
                        }
                    }else{
                        return todo
                    }
                })
            }
        case 'inputEdit':
            return{
                ...state,
                editingTask: action.task
            }
    }
}

export default function TodoComponent(){

    const [state, dispatch] = useReducer(reducer, InitialList)

    const editRef = useRef() 

    const newTodoRef = useRef()

    const handleAddTodo = () =>{
        dispatch({
            type: 'addedTodo',
            task: newTodoRef.current.value
        })
    }

    const handleInputChange = (e) => {
        dispatch({
            type: 'inputChange',
            payload: {task: e.target.value}
        })
    }

    const handleDelete = (id) =>{
        dispatch({
            type: 'delete',
            id: id
        })
    }

    const handleEdit = (id, task) => {
        dispatch({
            type: 'edit',
            id: id,
            task: task
        })
    }

    const handleSave = (id) => {
        dispatch({
            type: 'save',
            id: id,
            task: editRef.current.value
        })
    }
    console.log("State :",state,"\nTodo :",state.todos)
    return(
        <div>
            <input 
                ref={newTodoRef}
            />
            <button onClick={handleAddTodo}>Add</button>
            {state.map((todo)=>(
                <div key={todo.id}>

                    {state.editId === todo.id ? (
                        <>
                            <input ref={editRef} defaultValue={todo.task} autoFocus/>
                            <button onClick={() => handleSave(todo.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{todo.task}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                        </>
                    )}

                    
                </div>
            ))}
        </div>
    )
}

const InitialList = [
    {id:1, task:'Clean kitchen'},
    {id:2, task:'Walk the dog'},
    {id:3, task:'Walk the cat'},
    {id:4, task:'Go shopping'}
]