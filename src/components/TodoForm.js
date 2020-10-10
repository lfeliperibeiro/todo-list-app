import React, {useState} from 'react'

function TodoForm () {
  const [input, setInpunt] = useState('')
  return (
   <form className="todo-form">
     <input 
      type="text" 
      palceholder="Adicione uma Tarefa" 
      value={input} 
      name="text" 
      className="todo-input"
      />
      <button className="todo-button">Adicionar</button>
   </form>
  )
}

export default TodoForm