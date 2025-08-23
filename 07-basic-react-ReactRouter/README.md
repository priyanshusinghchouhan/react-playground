# React Router (react-router-dom) – Interactive README

> A hands-on guide built from your practice with **react-router-dom**.

---

## 🎯 What you built

You implemented a basic **multi-page navigation system** using `react-router-dom` v6, and demonstrated how to:

* Set up routes with `<Routes>` and `<Route>`
* Create links with `<Link>` to navigate between pages
* Organize multiple components (Home, About, Contact, Number)
* Nest routes (`/Contact/Number`) inside parent paths
* Use React Router to replace manual conditional rendering

Pages you created:

1. **Home** → default landing page
2. **About** → informational page
3. **Contact** → contact details page
4. **Number** → nested route under Contact (`/Contact/Number`)

---

## 🧠 Why React Router?

React Router enables **client-side routing**, meaning:

* Navigation is instant (no full-page reloads)
* The UI updates based on the URL
* Routes can be **nested, dynamic, and parameterized**
* Perfect for SPAs (Single Page Applications)

Without React Router, you’d have to conditionally render based on `window.location`, which is messy.

---

## 🔩 Summary of your example

* Navigation bar with `<Link>` elements → changes the URL without reload.
* `<Routes>` acts as a container, holding multiple `<Route>` components.
* Each `<Route>` maps a `path` (like `/About`) to a component (like `<About />`).
* Nested route: `/Contact/Number` renders a different component inside the same app.

✔️ This demonstrates the basics of **routing, linking, and nesting**.

---

## 🧩 Mental model

Think of React Router as a **map**:

```
URL Path  →  Route Match  →  Component Rendered
```

For example:

* `/` → `Home`
* `/About` → `About`
* `/Contact` → `Contact`
* `/Contact/Number` → `Number`

---

## ✅ Quick Checklist

* [ ] Installed `react-router-dom`
* [ ] Wrapped app in `<BrowserRouter>` (in `main.jsx` or `index.js`)
* [ ] Defined routes using `<Routes>` + `<Route>`
* [ ] Linked pages with `<Link>`
* [ ] Tested nested route `/Contact/Number`

---

## 🧭 When to use React Router

**Use it for:**

* Multi-page navigation in SPAs
* Nested layouts (dashboard, settings, user profiles)
* Dynamic routes (e.g., `/users/:id`)
* Protecting routes (authentication/authorization)

**Avoid for:**

* Very small apps with 1–2 pages (simple conditional rendering may be enough)

---

## 🪤 Common pitfalls & fixes

* **Forgetting `<BrowserRouter>` wrapper** → routes won’t work.
* **Capitalization matters** in paths → `/About` ≠ `/about`.
* **Missing `element={<Component />}`** → React Router v6 requires `element` instead of `component`.
* **Empty path confusion** → use `path="/"` for home route, not just an empty string.

---

## 🧪 Mini challenges (level up your routing skills)

1. Add a **404 page** (`<Route path="*" element={<NotFound />}`).
2. Create a **nested layout**: `Contact` renders child routes inside.
3. Use **dynamic route parameters** (`/users/:id`) and display them with `useParams()`.
4. Add **navigation highlighting** using `<NavLink>`.
5. Implement **Protected Routes** (redirect to login if not authenticated).

---

## 🧾 TL;DR Summary

* You learned the basics of `react-router-dom` v6.
* Built routes: Home, About, Contact, and a nested route (Number).
* Used `<Link>` for navigation without reload.
* Organized SPA into multiple pages with clean URLs.

---

Built with ⚡ by Priyanshu’s React learning journey.

