import { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        ),
      };

    default:
      return state;
  }
}

function TODO() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (!inputValue.trim()) return;

    if (editId) {
      // edit the existing todo
      dispatch({
        type: "EDIT_TODO",
        payload: { id: editId, task: inputValue },
      });
      setEditId(null); //
    } else {
      // Adding new todo
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), task: inputValue },
      });
    }

    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>
        {editId ? "Save Changes" : "Add Todo"}
      </button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_TODO",
                  payload: todo.id,
                })
              }
            >
              Remove
            </button>
            <button
              onClick={() => {
                setEditId(todo.id);
                setInputValue(todo.task);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TODO;
