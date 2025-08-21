# React `useReducer` – Interactive README

> A hands-on guide built from your two reducer examples: **Counter** and **Todo List**.

---

## 🎯 What I built ?

You implemented **two independent reducers** and demonstrated how to:

* Define a `reducer` function with `state` + `action`
* Use `useReducer(reducer, initialState)` to manage state
* Dispatch actions with `dispatch({ type: "...", payload })`
* Build predictable state transitions without prop drilling or tangled `useState`

Reducers you built:

1. **Counter Reducer** → handles `increment` and `decrement` actions
2. **Todo Reducer** → handles `ADD_TODO`, `REMOVE_TODO`, `EDIT_TODO`

---

## 🧠 Why `useReducer`?

`useReducer` is perfect when:

* State logic is **complex** or involves multiple sub-values.
* State updates depend on **previous state**.
* You want to **organize actions** clearly (like Redux, but lighter).

Compared to `useState`, reducers:

* Provide a **centralized logic** (all updates go through `reducer`)
* Make state transitions **predictable**
* Improve **testability** (you can unit test the reducer separately)

---

## 🔩 Summary of your examples

### 1) Counter Example

* State: `{ count: 0 }`
* Actions: `increment`, `decrement`
* Flow: Button clicks dispatch actions → reducer updates count → UI re-renders

✔️ Great starter example to understand action/state flow.

---

### 2) Todo Example

* State: `{ todos: [] }`
* Actions:

  * `ADD_TODO` → pushes a new todo object with `id` + `task`
  * `REMOVE_TODO` → filters out todo by `id`
  * `EDIT_TODO` → maps through todos and updates the right task
* Extras:

  * Used `useState` alongside `useReducer` for input handling (`inputValue`, `editId`).
  * Built functionality for add, remove, edit — all dispatched through reducer.

✔️ Showcases **real-world useReducer usage** with multiple actions.

---

## 🧩 Mental model

Think of `useReducer` as a **mini Redux inside React**:

```
User Interaction → dispatch(action) → reducer(state, action) → newState → UI re-renders
```

Your flow looked like this:

1. User clicks button or submits input
2. Component dispatches an action object (`{ type, payload }`)
3. Reducer decides how to update state
4. New state returned → UI updates

---

## ✅ Quick Checklist

* [ ] Defined `initialState`
* [ ] Created a `reducer` function with `switch(action.type)`
* [ ] Used `useReducer(reducer, initialState)`
* [ ] Dispatched actions with `dispatch({ type, payload })`
* [ ] Updated state immutably (using spread, filter, map)
* [ ] Combined `useReducer` with `useState` for hybrid scenarios

---

## 🧭 When to use `useReducer` (and when not to)

**Use it for:**

* Complex state objects (e.g., todos, forms, settings)
* Multiple ways of updating state (many action types)
* When state updates need to be **predictable & centralized**

**Avoid for:**

* Simple toggles or single-value state → `useState` is simpler
* Highly global state → might need Context + useReducer or external store

---

## 🪤 Common pitfalls & fixes

* **Accidentally mutating state** → always return a **new object/array**.
* **Forgetting default case** → reducer must return state if no action matches.
* **Bloated reducers** → split logic into smaller reducers and combine.
* **Unnecessary re-renders** → memoize heavy components or selectors.

---

## 🧪 Mini challenges (level up your reducer skills)

1. **Add “Clear All Todos”** action → resets todos to `[]`.
2. **Add “Toggle Completed”** → mark a todo as done/undone.
3. **Add persistence** → save todos in `localStorage`.
4. **Split reducers** → separate todo editing logic from todo list logic.
5. **Use Context + Reducer** → create a global todo provider.

---

## 🧾 TL;DR Summary

* You built **two reducers**: one for a simple counter, one for a todo app.
* Used `useReducer` to manage structured state with multiple actions.
* Learned to dispatch actions and let the reducer decide how to update.
* Realized `useReducer` is great for complex/local state management.

---

Built with ⚡ by Priyanshu’s React learning journey.
>>>>>>> c91af4c (Updated Readme)
