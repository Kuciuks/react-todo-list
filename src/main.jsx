import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModeProvider from './Provider/ModeProvider.jsx'
import TodoListProvider from './Provider/TodoListProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListProvider>
      <ModeProvider>
        <App />
      </ModeProvider>  
    </TodoListProvider>
  </React.StrictMode>,
)
