import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => async ({get}) => {
            console.log("befre fecth")
            const res = await axios.get(`https://mocki.io/v1/b934c125-beac-46c2-a519-1ea339acf17f?id=${id}`)
 
            const todo = res.data.todos.find((t) => t.id === id);
            return todo;
        }
    })
})