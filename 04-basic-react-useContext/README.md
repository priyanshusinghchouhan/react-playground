# React `useContext` – Interactive README

> A hands-on guide built from your two context examples: **Theme** (light/dark) and **User** (name toggle).

---

## 🎯 What you built

You implemented **two independent React Contexts** and demonstrated how to:

* Create a context with `createContext()`
* Provide values via a **Provider** component
* Consume the context with `useContext()` inside child components
* Update shared state from nested components without prop drilling

Contexts you built:

1. **ThemeContext** → toggles between `light` and `dark`
2. **UserContext** → toggles a username between `Cubarsi` and `Pedri` (default `Priyanshu`)

---

## 🧠 Why `useContext`?

`useContext` lets components read **shared state** without passing props through every level (avoids **prop drilling**). It’s perfect for global-like data such as theme, auth, user, locale, and feature flags.

---

## 🔩 Code you wrote (annotated)

### 1) Theme Context

```jsx
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          padding: 10,
        }}
      >
        <h3>Theme is: {theme}</h3>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export { ThemeProvider, Toolbar };
```

**What’s happening?**

* `ThemeProvider` owns `theme` state and exposes `{ theme, toggleTheme }` via context.
* `Toolbar` consumes it with `useContext(ThemeContext)` and changes UI + toggles theme.

---

### 2) User Context

```jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("Priyanshu");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Hi, My name is {user}</h2>
      <button onClick={() => setUser(u => (u === "Cubarsi" ? "Pedri" : "Cubarsi"))}>
        Change
      </button>
    </>
  );
}

export { UserProvider, Profile };
```

**What’s happening?**

* `UserProvider` owns `user` state and exposes `{ user, setUser }` via context.
* `Profile` consumes it and flips the displayed name on button click.

---

## 🧩 Putting them together

Wrap your app with **both providers**. Order doesn’t matter unless a provider needs another provider’s value.

```jsx
// App.jsx
import { ThemeProvider, Toolbar } from "./ThemeContext";
import { UserProvider, Profile } from "./UserContext";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <main style={{ fontFamily: "sans-serif", padding: 16 }}>
          <Toolbar />
          <hr />
          <Profile />
        </main>
      </UserProvider>
    </ThemeProvider>
  );
}
```

**Mental model:**

```
ThemeProvider
  └─ UserProvider
       └─ App UI (Toolbar, Profile, ...)
```

Any component inside the tree can call `useContext(ThemeContext)` or `useContext(UserContext)`.

---

## ✅ Quick Checklist (tick as you go)

* [ ] Created contexts with `createContext()`
* [ ] Wrote provider components that hold state (`useState`)
* [ ] Passed values via `<Context.Provider value={...}>`
* [ ] Consumed with `useContext(Context)` in nested components
* [ ] Updated context state from children (e.g., toggle button)
* [ ] Composed multiple providers

---

## 🧭 When to use Context (and when not to)

**Use it for:** theme, current user, auth token, locale, feature flags, app-wide settings.

**Avoid for:** rapidly-changing or deeply component-specific state (it can cause wide re-renders). Prefer local `useState` or external state libraries if many components update frequently.

---

## 🪤 Common pitfalls & fixes

* **"useContext must be inside a Provider" error** → Ensure the component is **wrapped** by the right provider in the tree.
* **Unnecessary re-renders** → Memoize the `value` object if it’s derived:

  ```jsx
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  <ThemeContext.Provider value={value}>...
  ```
* **Splitting context values** → If some values change often and others rarely, split into two contexts for perf.
* **Default values** → Pass a shape or initial default to `createContext(defaultValue)` for better DX/testing.

---

## 🧪 Mini challenges (make it yours)

1. **Persist theme** in `localStorage` so it stays after refresh.
2. **Keyboard toggle**: Press `T` to toggle theme.
3. **Welcome banner** using `UserContext`: “Welcome back, {user}”.
4. **Split ThemeContext**: one for state (`theme`), one for actions (`toggleTheme`).
5. **Custom hooks**: `useTheme()` and `useUser()` wrappers for cleaner imports.

```jsx
// useTheme.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // export the context
export const useTheme = () => useContext(ThemeContext);
```

---

## 🧰 Testing the context (ideas)

* Render `Toolbar` with **React Testing Library**, wrap in `ThemeProvider`, and assert background/colors switch after click.
* In tests, pass a **mock provider** with a custom value to isolate behavior.

---

## 🗂️ Suggested file structure

```
src/
  context/
    ThemeContext.jsx
    UserContext.jsx
    hooks/
      useTheme.js
      useUser.js
  App.jsx
  main.jsx
```

---

## 📝 FAQ

**Q: Do I need Redux for this?**
A: Not for simple global state like theme or a username. Context + `useState` is enough. Reach for Redux/Zustand/Recoil when state logic becomes complex, spans many domains, or needs advanced tooling.

**Q: Can providers be nested?**
A: Yes, and they often are. You can also create a `Providers` component that composes them.

```jsx
function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
```

---

## 🔮 Next steps

* Add a **System** theme option using `matchMedia('(prefers-color-scheme: dark)')`.
* Extract inline styles into CSS classes or Tailwind for cleaner UI.
* Memoize `value` objects and create **custom hooks** for each context.
* Learn `ContextSelector` patterns (or libraries) to minimize re-renders.

---

## 🧾 TL;DR Summary

* You created two contexts: **Theme** and **User**.
* Providers hold state (`useState`) and expose values via `value={{...}}`.
* Children consume with `useContext(Context)` to read/update shared state.
* Works great to avoid prop drilling for app-wide data.

---

Built with ❤️ by Priyanshu’s React learning journey.
