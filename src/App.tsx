import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoFilter from './components/TodoFilter'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (

    <div>
      <h1>My Todo Application</h1>
      <ThemeToggle />
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>

  )
}

export default App
