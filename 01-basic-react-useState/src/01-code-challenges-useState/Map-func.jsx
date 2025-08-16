import { useState } from "react";

function MapFunc(){
    //1.
    // const fruits = ["Apple, Mango, Banana, Grapes"];

    // return(
    //     <div>
    //         <ul>
    //             {fruits.map((fruit, index) =>(
    //                 <li key={index}>{fruit}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )


    //2.
    // const users = [
    //     { id: 1, name: "Pedri" },
    //     { id: 2, name: "Inigo" },
    //     { id: 3, name: "Gavi" },
    //     { id: 4, name: "Lewaa"}
    // ]

    // return(
    //     <div>
    //         {users.map(user => (
    //             <li key={user.id}>{user.name}</li>
    //         ))}
    //     </div>
    // )


    //3.
    // const products = [
    //     { id: 1, name: "Laptop", price: 1000 },
    //     { id: 2, name: "Phone", price: 500 }
    // ]


    // return(
    //     <div>
    //         {products.map(product => (
    //             <div key={product.id}>
    //                 <li>{product.name}</li>
    //                 <li>{product.price}</li>
    //             </div>
    //         ))}
    //     </div>
    // )


    //4.
    // const todos = [
    //     { id: 1, text: "Learn React" },
    //     { id: 2, text: "Master map()" }
    // ]

    // function handleClick(){
    //     alert(`Todo ${id} clicked!`)
    // }

    // return(
    //     <div>
    //         {todos.map(todo => (
    //             <li key={todo.id} onClick={handleClick}>{todo.text}</li>
    //         ))}
    //     </div>
    // )

    const [fruits, setFruits] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addFruits(){
        if(inputValue.trim() === ""){
            return;
        }

        const newFruits = {
            id: Date.now().toString(),
            name: inputValue
        }

        setFruits([...fruits, newFruits]);
        setInputValue("");
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addFruits}>Add</button>


            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id}>{fruit.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default MapFunc;