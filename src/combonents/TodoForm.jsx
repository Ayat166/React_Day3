import { useState } from 'react'

export default function TodoForm(props) {
    const [todoObj,setToDoObj] = useState({id:Date.now(),title:'',description:'',done:false})
    
  return (
        <div className="container mt-4">
        <div className="card p-4">
            <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                Title
                </label>
                <input type="text" id="title" className="form-control" placeholder="Enter title" value={todoObj.title} onChange={(event)=>setToDoObj(todoObj => ({...todoObj,title:event.target.value}))} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                Description
                </label>
                <textarea id="description" className="form-control" rows="3" placeholder="Enter description" value={todoObj.description} onChange={(event)=>setToDoObj(todoObj => ({...todoObj,description:event.target.value}))}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={(e)=>{
                e.preventDefault();
                if (todoObj.title.trim() === '') {
                    alert('Please enter a title');
                    return;
                }
                const newTodo = { ...todoObj, id: Date.now() };
                props.setMyListToDo(newTodo);
                setToDoObj(todoObj => ({...todoObj,title:'',description:''}))
                }}>
                Save
            </button>
            </form>
        </div>
        </div>

  );
}
