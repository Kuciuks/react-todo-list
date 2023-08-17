import { useReducer } from "react"


const reducer = (state, action) =>{
    switch(action.type){
        case 'addedTodo':
            return {
                task: "",
                todos: [...state.todos,
                    {
                        id: action.id,
                        task: action.task
                    }
                ]
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
    }
}

export default function TodoComponent(){

    const [state, dispatch] = useReducer(reducer, {
        task: "",
        todos: InitialList,
        editId: null,
        editingTask: ""
    })


    const handleButtonClick = () =>{
        dispatch({
            type: 'addedTodo',
            id: ID++,
            task: state.task
        })
    }

    const handleInputChange = (e) => {
        dispatch({
            type: 'inputChange',
            task: e.target.value
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

    console.log("State :",state,"\nTodo :",state.todos)
    return(
        <div>
            <input 
            value={state.task}
            onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Add</button>
            {state.todos.map((todo)=>(
                <div key={todo.id}>
                    {state.editId === todo.id ? (
                        <input value={state.editingTask} onChange={(e) => handleInputChange(e,todo.id)}/>
                    ) : (
                        <span>{todo.task}</span>
                    )}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    {state.editId === todo.id ? (
                        <button onClick={() => handleEdit(todo.id, state.editingTask)}>Save</button>
                    ) : (
                        <button onClick={() => handleEdit(todo.id, todo.task)}>Edit</button>
                    )}
                </div>
            ))}
        </div>
    )
}

let ID = 5
const InitialList = [
    {id:1, task:'Clean kitchen'},
    {id:2, task:'Walk the dog'},
    {id:3, task:'Walk the cat'},
    {id:4, task:'Go shopping'}
]