import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  return (
    <div>
        <div className='container mt-4'>

            {props.myList.length>0?(
                <>
                    <h2 className="text-center mb-4">list of my ToDo</h2>
                    {props.myList.map((todo)=>(
                        <TodoItem key={todo.id}  todo={todo}/>
                    ))} 
               </>
            ):null}
        </div>
    </div>
  )
}
