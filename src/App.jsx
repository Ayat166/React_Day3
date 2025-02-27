import { useState } from 'react'
import TodoForm from './combonents/TodoForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './combonents/TodoList.jsx';

function App() {
  const [myList,setToDo] = useState([]);
  function setMyListToDo(todo){
    setToDo(myList=>[...myList,todo])
  }
  return (
    <>
      <div>
        <h2 className="text-center mb-4">My To-Do</h2>
        <TodoForm setMyListToDo={setMyListToDo}/>
        <TodoList myList={myList}/>
      </div>

    </>
  )
}

export default App
