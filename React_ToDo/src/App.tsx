import { useState } from 'react'
/// COMPONENTS ///
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

/// CSS ///
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoCreate />
     <TodoList />
    </>

  )
}

export default App
