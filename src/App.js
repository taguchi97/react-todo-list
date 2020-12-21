import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'

const App = () => {
  const [lists, setLists] = useState(['プログラミング', 'お買い物', 'お風呂'])
  const [value, setValue] = useState('')
  const handleValue = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    if (value !== '') {
      e.preventDefault()
      setLists(
        [...lists, value]
      )
      setValue('')
    }
  }
  return (
    <>
      <h1>TODOアプリ</h1>
      <Form
        value={value}
        handleValue={handleValue}
        handleSubmit={handleSubmit}
      />
      <TodoList lists={lists} />
    </>
  )
}

export default App