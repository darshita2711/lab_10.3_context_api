import { useContext, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoFilter from './components/TodoFilter'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContext } from './context/ThemeContext'
import ClearCompleted from './components/ClearCompleted'

function App() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("App must be inside ThemeProvider");
  }

  const { theme } = context;

  return (

    <div className={`app ${theme}`}>
      <h1>My Todo Application</h1>
      <ThemeToggle />
      <TodoInput />
      <TodoFilter />
      <ClearCompleted />
      <TodoList />
    </div>

  )
}

export default App
