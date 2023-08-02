
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"
import { addToDo, getAllToDo,updateToDo,deleteToDo } from "./utils/HandleApp";


function App() {
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");
  useEffect(()=>{
    getAllToDo(setTodo)
  },[])

  const updateMode = (_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }
  return (
    <div className="App">
    
     <div className="container">
      <h1>Task Manager</h1>
      <div className="top">
      <input required type="text" placeholder="Enter the task" value = {text} onChange={(e)=>setText(e.target.value)} />
      <div className="add" onClick={isUpdating ? ()=>updateToDo(todoId,text,setText,setTodo,setIsUpdating) : ()=> addToDo(text,setText,setTodo)}>{isUpdating?"Update":"Add"}</div>
      </div>
      <div className="list">
      {todo.map((item)=><ToDo key={item._id} text={item.text}
        updateMode={()=>updateMode(item._id,item.text)}
        deleteToDo={()=>deleteToDo(item._id,setTodo)}
      />)}
      </div>
     </div>

    </div>
  );
}

export default App;
