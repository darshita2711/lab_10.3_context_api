import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {

  return (

    <div>
      <h1>My Todo Application</h1>

      <TodoInput />
      <TodoList />
    </div>

  )
}

export default App
