# React useRef Hook Examples

This repository contains simple React examples demonstrating the **`useRef` hook** and how it can be used to manage mutable references, access DOM elements directly, and persist values between renders.

---

## What is `useRef`?

`useRef` is a React hook that allows you to:

- Access and manipulate **DOM elements** directly.
- Keep a **mutable value** that persists across re-renders without triggering a re-render.
- Store values like counters or timers that should not cause the component to update.

**Syntax:**

```javascript
const refContainer = useRef(initialValue);
```
- `refContainer.current` contains the mutable value or DOM element.
- Changing `refContainer.current` does not trigger a re-render.
