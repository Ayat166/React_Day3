import { useEffect, useState } from "react";
import TodoForm from "./combonents/TodoForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./combonents/TodoList.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [myList, setToDo] = useState(
    JSON.parse(localStorage.getItem("alltodos")) || []
  );
  const [myFilteredTodo, setFilteredToDo] = useState([]);
  const [filtermthod, setFilteredmethod] = useState("all");

  function setFilteredOption(option) {
    setFilteredmethod(option);
  }
  function setMyListToDo(todo) {
    setToDo((myList) => [...myList, todo]);
  }
  function setDeleteToDoItem(id){
    setToDo((myList)=>myList.filter((todo)=>todo.id!==id));
  }
  function setDoneState(id){
    setToDo((myList)=>myList.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo));
  }
  useEffect(() => {
    localStorage.setItem("alltodos", JSON.stringify(myList));
  }, [myList]);
  
  useEffect(()=>{
    if(filtermthod==="all"){
      setFilteredToDo(myList);
    }
    else if (filtermthod==="inProgress"){
      setFilteredToDo(myList.filter(todo => todo.done === false) )
    }
    else if (filtermthod==="Done"){
      setFilteredToDo(myList.filter(todo => todo.done === true) )
    }
  },[filtermthod,myList])
  return (
    <>
      <div>
        <h2 className="text-center mb-4">My To-Do</h2>
        <TodoForm setMyListToDo={setMyListToDo} />
        <TodoList
          myList={myFilteredTodo}
          setFilteredOption={setFilteredOption}
          filtermthod={filtermthod}
          setDeleteToDo={setDeleteToDoItem}
          setDoneState = {setDoneState}
        />
      </div>
    </>
  );
}

export default App;
