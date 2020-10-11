import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <div className="todo-main">
      <TodoList />
    </div>
      <div className="footer">Feito com por 💙  Felipe Ribeiro</div>
      </>
  );
}

export default App;
