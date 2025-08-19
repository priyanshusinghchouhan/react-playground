# React `useRef` Hook Examples

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

## Summary of Components

### 1. Ref Component
- Demonstrates updating a DOM element directly after a delay.
- Shows how to change the content of an element without re-rendering the component.

### 2. Counter Component
- Tracks a counter using `useState` while keeping a separate click count in a ref.
- Highlights the difference between state (which triggers re-render) and refs (which do not).

### 3. MyComponent
- Focuses an input field and changes its style using `useRef`.
- Shows how refs can be used for direct DOM manipulation.

---

## Key Takeaways

- `useRef` is ideal for **persisting values** between renders.
- Useful for **managing DOM elements**, counters, or other mutable references.
- Helps avoid unnecessary re-renders while maintaining mutable state.

---

## License

This project is licensed under the MIT License.  
You can use and learn from it freely for **educational purposes**.
