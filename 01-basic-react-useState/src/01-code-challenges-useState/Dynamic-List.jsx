import { useState } from "react";

function List({ initialList }) {
  const [list, setList] = useState(initialList);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add item</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeItem(index)}>❌ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
