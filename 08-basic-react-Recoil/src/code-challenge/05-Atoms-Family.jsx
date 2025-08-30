import { useRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./05-atom-family";

function Todo({id}){

    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
    console.log(todo.title)

    return(
        <>
        <h2>{todo.title}</h2>
        <h3>{todo.description}</h3>
        </>
    )
}

export default Todo;