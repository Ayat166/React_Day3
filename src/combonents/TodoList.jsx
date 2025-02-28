import React from 'react'
import TodoItem from './TodoItem'
import FilerationList from './FilerationList'

export default function TodoList(props) {
  return (
    <div>
        <div className='container mt-4'>
        <FilerationList setFilteredOption={props.setFilteredOption} filtermthod={props.filtermthod}/>

            {props.myList.length>0?(
                <>
                    <h2 className="text-center mb-4">list of my ToDo</h2>
                    {props.myList.map((todo)=>(
                        <TodoItem key={todo.id}  todo={todo} setDeleteToDo={props.setDeleteToDo} setDoneState={props.setDoneState}/>
                    ))} 
               </>
            ):null}
        </div>
    </div>
  )
}
