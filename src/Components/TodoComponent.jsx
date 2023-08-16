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

    console.log(state)

    return(
        <div>
            <input 
            value={state.task}
            onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Add</button>
            {state.todos.map((todo)=>(
                <div key={todo.id}>{todo.task}</div>
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