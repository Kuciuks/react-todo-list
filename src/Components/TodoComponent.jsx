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
    }
}

export default function TodoComponent(){

    const [state, dispatch] = useReducer(reducer, {
        task: "",
        todos: InitialList
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

    const handleEdit = (id) => {
        dispatch({
            type: 'edit',
            id: id
        })
    }

    return(
        <div>
            <input 
            value={state.task}
            onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Add</button>
            {state.todos.map((todo)=>(
                <div key={todo.id}>
                    {todo.task}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    <button onClick={() => handleEdit(todo.id)}>Edit</button>
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