import { useReducer, useRef } from "react"
import '../Styles/TodoComponent.css'

const reducer = (state, {type, payload}) =>{
    switch(type){
        case 'addedTodo':
            return {
                ...state, //creates a shalow copy of the state object
                todos: [ //targets the todos property (Array)
                    ...state.todos, //creates a shalow copy of the todos property (Array)
                    { //creates a new item (Object) in the todos property (Array)
                        id: crypto.randomUUID(),
                        task: payload.task
                    }
                ]
            }
        case 'inputChange':
            return {
                ...state,
                task: payload
            }
        case 'delete':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload.id) //Maps over the state todos property (Array) and filters out the Array item whichs id matches the payload.id
            }
        case 'edit':
            return{
                ...state,
                editId: payload.id
            }
        case 'save':
            return{
                ...state,
                editId: null, //resets the selected items id in the todos property (Array)
                todos: state.todos.map(todo => { 
                    if(todo.id == state.editId){ //if the Array items id matches the selected items id
                        return{
                            ...todo, //creates a shalow copy of the select item
                            task: payload.task //edits the task property
                        }
                    }else{
                        return todo //returns the default Array item
                    }
                })
            }
    }
}

export default function TodoComponent(){

    const [state, dispatch] = useReducer(reducer, {
        todos: InitialList,
        editId: null
    })

    const editRef = useRef() 

    const newTodoRef = useRef()


    const handleAddTodo = () =>{
        dispatch({
            type: 'addedTodo',
            payload: {task: newTodoRef.current.value}
        })
    }

    const handleDelete = (id) =>{
        dispatch({
            type: 'delete',
            payload: {id: id}
        })
    }

    const handleEdit = (id) => {
        dispatch({
            type: 'edit',
            payload: {
                id: id
            }
        })
    }

    const handleSave = (id) => {
        dispatch({
            type: 'save',
            payload: {
                id: id,
                task: editRef.current.value
            }
        })
    }
    console.log("State :",state,"\nTodos :",state.todos)
    return(
        <div className="todo-container">
            
            <div>
                <input ref={newTodoRef}/>
                <button onClick={handleAddTodo}>Add</button>
            </div>
            
            {state.todos.map((todo)=>(

                <div className="item-container" key={todo.id}>

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