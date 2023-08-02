import axios from "axios";

const baseUrl = "http://localhost:5000"

const getAllToDo = (setTodo) =>{
    axios
    .get(baseUrl)
    .then(({data})=> {
        console.log("data -->",data)
        setTodo(data)
    })
}
const addToDo = (text,setText,setTodo)=>{
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        console.log(data)
        setText("")
        getAllToDo(setTodo)
    }).catch((err)=>console.log(err))
}

const updateToDo = (todoId,text,setText,setTodo,setIsUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id: todoId,text}).then((data)=>{
        console.log(data)
        setText("")
        setIsUpdating(false)
        getAllToDo(setTodo)
    }).catch((err)=>console.log(err))
}

const deleteToDo = (todoId,setTodo)=>{
    axios.post(`${baseUrl}/delete`,{_id: todoId}).then((data)=>{
        getAllToDo(setTodo)
    }).catch((err)=>console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}