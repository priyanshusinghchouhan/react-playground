# 🧑‍💻 React useEffect Hook 

This repository contains a collection of **basic React projects** I built while learning **useEffect Hooks**.  
Each project focuses on one or two key React concepts to help me build strong fundamentals.  

---

## 🌟 Focus on `useEffect`  

The **`useEffect` hook** is one of the most powerful and commonly used hooks in React.  
It allows you to:  
- Run code after the component renders  
- Handle **side effects** like API calls, subscriptions, event listeners  
- Perform **cleanup** to avoid memory leaks (like clearing intervals or timeouts)  
- Control execution with **dependency arrays**  

👉 In these projects, I practiced `useEffect` with:  
- Setting **timers and intervals** (`setTimeout`, `setInterval`)  
- Updating the **DOM directly** (`document.title`)  
- Logging and tracking **component lifecycle**  
- Handling **async-like behavior** with delays  
- Running cleanup functions  

---

## 📂 Projects Included  

### 1. 💰 Bank Data & Income Tax Calculator  
- Simulates delayed bank + exchange data using `setTimeout`.  
- Calculates income tax once data is available.  

👉 **Concepts Practiced:**  
- `useEffect` for simulating API fetch delays  
- Updating state asynchronously  

---

### 2. ⏰ Real-time Clock with Greetings  
- Displays a **live digital clock** updating every second.  
- Greets user depending on the time of day.  

👉 **Concepts Practiced:**  
- `useEffect` with `setInterval` + cleanup  
- Time formatting & conditional logic  

---

### 3. 🖥️ Console Logger  
- Logs **re-render counts** when the state changes.  
- Demonstrates `useEffect` cleanup with console logs.  

👉 **Concepts Practiced:**  
- Understanding how `useEffect` runs after every render  
- Cleanup functions firing before the next effect  

---

### 4. 📝 Title Updater  
- Updates the **browser tab title** dynamically from input.  

👉 **Concepts Practiced:**  
- DOM side effects with `document.title`  
- Dependency arrays in `useEffect`  

---

### 5. ✅ To-Do App  
- Add & remove tasks from a list with unique IDs.  
- Simple project without `useEffect`, but complements the collection.  

👉 **Concepts Practiced:**  
- State management with arrays  
- Controlled components  

---

## 🛠️ Tech Stack  
- **React (Hooks)**  
- **JavaScript (ES6+)**  
- **HTML & CSS (basic styling - that are provide in vite package when you install React with it)**  

---

## 🚀 How to Run Locally  

1. Clone the repository  
   ```bash
   git clone https://github.com/priyanshusinghchouhan/02-basic-react-useEffect.git
   cd 02-basic-react-useEffect
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev   # if using Vite
   # or
   npm start     # if using CRA
   ```

## 📖 Learning Notes

Through these projects, I explored:

- ✅ When useEffect runs (initial mount, dependency updates)
- ✅ Cleanup functions and their role in avoiding memory leaks
- ✅ The difference between state updates and side effects
- ✅ How React re-renders and how effects tie into that lifecycle

## 📜 License
  MIT License – Feel free to use and learn from these examples.
