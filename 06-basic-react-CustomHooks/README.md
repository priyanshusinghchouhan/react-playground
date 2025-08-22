
# ⚡React `Custom Hooks`

> A hands-on guide built from my three custom hooks: **Mouse Position**, **Online Status**, and **Window Width**.

---

## 🎯 What I built ?

I implemented **three custom React hooks** and demonstrated how to:

* Encapsulate reusable logic into custom hooks
* Use `useState` and `useEffect` inside hooks
* Return values from hooks for use in components
* Keep components **clean** by moving side-effect logic out

Custom hooks I built:

1. **useMousePosition** → tracks mouse `x, y` coordinates
2. **useOnlineStatus** → detects online/offline status of the browser
3. **useWindowWidth** → tracks and updates window width on resize

---

## 🧠 Why Custom Hooks?

Custom hooks are perfect when:

* Multiple components need the same logic (e.g., event listeners, timers)
* You want to separate concerns (logic vs UI)
* You need reusable, testable, and clean stateful logic

They are simply **functions that start with `use`** and can call other hooks (`useState`, `useEffect`, etc.).

---

## 🔩 Summary of examples

### 1) `useMousePosition`

* State: `{ x: 0, y: 0 }`
* Effect: Listens to `mousemove` events and updates state with cursor position.
* Return: `{ x, y }` → consumed in `MouseTracker` component.

✔️ Demonstrates tracking DOM events and cleaning up listeners.

---

### 2) `useOnlineStatus`

* State: `navigator.onLine`
* Effect: Listens to `online` and `offline` events.
* Return: `isOnline` boolean → used in `StatusComponent`.

✔️ Great for showing how to handle browser APIs & connectivity.

---

### 3) `useWindowWidth`

* State: `window.innerWidth`
* Effect: Listens to `resize` events.
* Return: `width` number → used in `MyComponent`.

✔️ Classic example of adapting UI to screen changes.

---

## 🧩 Mental model

Custom hooks let you **extract logic** out of components:

```
Component UI  →  uses Custom Hook  →  manages logic internally
```

Instead of bloating components with `useEffect` & listeners, you:

1. Create a hook function that handles logic + state
2. Return values (state/data)
3. Use it inside any component like a built-in hook

---

## ✅ Quick Checklist

* [ ] Custom hooks are just functions starting with `use`
* [ ] They can call other hooks (`useState`, `useEffect`)
* [ ] They must follow the **Rules of Hooks** (only call at top level)
* [ ] Return useful state or functions
* [ ] Components become **simpler & more focused**

---

## 🧭 When to use custom hooks

**Use them for:**

* Event listeners (resize, scroll, mouse, keyboard)
* Fetching data / API calls
* Form handling logic
* Reusable timers, debouncing, throttling
* Centralized app behaviors (auth, theme, online status)

**Avoid for:**

* One-off logic used by a single component → keep inline.
* Overengineering → don’t create a hook just for one `useState`.

---

## 🪤 Common pitfalls & fixes

* **Forgetting cleanup** → always return cleanup in `useEffect`.
* **Calling hooks conditionally** → break Rules of Hooks; always call at top-level.
* **Returning too much** → keep return value focused (object or array of relevant state/actions).
* **Name must start with `use`** → otherwise React won’t treat it as a hook.

---

## 🧪 Mini challenges (level up your hooks)

1. **useScrollPosition** → track window scroll Y.
2. **useDarkMode** → persist theme preference in `localStorage`.
3. **useDebounce** → debounce user input.
4. **usePrevious** → track previous value of a state.
5. **useFetch** → wrap `fetch` with loading/error handling.

---

## 🧾 TL;DR Summary

* I created three reusable custom hooks (`useMousePosition`, `useOnlineStatus`, `useWindowWidth`).
* Each encapsulated state + effects into a single hook.
* Components stayed clean and only consumed returned values.
* Custom hooks make logic **reusable, organized, and testable**.

---

Built with ⚡ by Priyanshu- my React learning journey.
