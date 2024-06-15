import { useState } from "react"
import "./App.css"
function App(){
  let [todoInput, updateInput]=useState("test")
  let [todolist, updatetodos] = useState(
    [
      {
        id:1,
        task:"Learn React"
      },
      {
        id:2,
        task:"Learn Angular"
      }
    ]
  )
  let nextid=3;

  function AddNewTodo() {
    if(todoInput==""){
      alert('Add som task')
    }
    else {
      let newtodos = [
        ...todolist,
        {
          id:nextid++,
          task: todoInput
        }
      ]
      updatetodos(newtodos)
      updateInput("")
    }
  }
  function deletetodoid(id){
   let updatedtodos= todolist.filter(
      (todo)=>{
        return todo.id != id
    })
    updatetodos(updatedtodos)

  }
  return (
  <div className="container mt-5 w-50">
    <h3 className="text-center">Todo App in React</h3>
    <div className="input-group">
    <input className= "form-control" type='text' onChange={(e)=>{
      let task = e.target.value;
      updateInput(task)
    }} value={todoInput}/>
    <button onClick={()=>{
      AddNewTodo()
    }} className="btn btn-primary">Add</button>
    </div>
    <ul className="list-group mt-4">
      {
      todolist.map(
        (todo) => {
          return (
          <li className="list-group-item">
          <p>{todo.task}</p>
          <button onClick={()=>{
            deletetodoid(todo.id)
          }}
           className="btn" 
          >❌</button>
        </li>
          )
        }
      )
    }
    </ul>
  </div>
  )
}
 export default App