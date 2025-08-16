# 📘 React Fundamentals with useState & map()

This repo contains my learning journey with React’s useState hook and the map() function.
I built multiple small projects to deeply understand how state and rendering work in React.

---

# 🛠 Projects Covered
### 1️⃣ Characters Counter

📍 File: Characters.jsx

- Counts the number of characters typed in an input.
- Learns how to track live updates using onChange + useState.
```
<label>You have typed {characters} characters</label>
<input type="text" onChange={(e) => setCharacters(e.target.value.length)} />
```
---

### 2️⃣ Counter App with Multiple States

📍 File: Counter.jsx

- Two independent counters: one simple counter, one counting in hundreds.
- Learns how to manage multiple states in the same component.
```
const [count, setCount] = useState(initialCount);
const [counthundred, setCounthundred] = useState(initialCountHundred);
```

### 3️⃣ Dynamic List App

📍 File: List.jsx
Add and remove items dynamically.

Learns:

- Managing arrays in state
- Rendering lists with map()
- Removing items with filter()

```
setList([...list, inputValue]); // Add
setList(list.filter((_, index) => index !== indexToRemove)); // Remove
```

### 4️⃣ Exploring map()

📍 File: MapFunc.jsx

- Practiced multiple scenarios using map():
- Rendering arrays of strings
- Rendering arrays of objects (users, products, todos)
- Adding unique keys (key={id})
- Handling user interactions (like clicks on todos)
- Extended to a mini fruit list app with unique IDs using Date.now().
```
<ul>
  {fruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name}</li>
  ))}
</ul>
```

### 🎯 Key Learnings

✅ useState lets us track changing data inside components.

✅ A component re-renders when state or props change.

✅ Always treat state as immutable (...spread or .filter() instead of direct mutation).

✅ map() is essential for rendering lists. Always use a unique key.

✅ Multiple states can exist in a single component.

### 🚀 Next Steps

- Combine useState with useEffect for side effects (e.g., saving lists to localStorage).

- Try lifting state up and passing it down via props.

- Rebuild the To-Do App with persistence.

### 📝 Author

👤 Priyanshu
Learning React step by step & documenting my journey.
