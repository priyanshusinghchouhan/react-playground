import { useState } from "react";

function ToDo(){
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
   
    function addTasks(){
        if(input.trim() === ""){
            return;
        }

        const newTodo = {
            id: Date.now(),
            task: input
        }

        setTodo([...todo, newTodo]);

        setInput("")
    }

    function removeTask(id){
        const updatedTodo = todo.filter((todos => todos.id !== id));
        setTodo(updatedTodo)
    }

    return(
        <>
        <input type="text" value={input} onChange={(e) =>setInput( e.target.value)} />
        <button onClick={addTasks}>Add Task</button>
        

        <ul>
            {todo.map(todos => (
                <li key={todos.id}>{todos.task}<button onClick={() => removeTask(todos.id)}> X </button></li>
            ))}
        </ul>
        </>
    )
}


export default ToDo;