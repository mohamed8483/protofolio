---
title: "React Hooks Explained: useState and useEffect"
description: "A practical introduction to the two most important React hooks."
date: "2026-10-15"
tags: ["react", "javascript", "tutorial"]
---

React hooks changed how we write components. Let's look at the two you'll use most: `useState` and ` useEffect`.

## useState — remembering values

React components re-render often, and local variables get reset every time. `useState` lets a component remember a value between renders.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

- `count` is the current value
- `setCount` updates it and triggers a re-render
- The value passed to `useState` is the initial value

## useEffect — doing things when things change

Sometimes a component needs to *do* something: fetch data, set up a subscription, or update the page title. That's what `useEffect` is for.

```jsx
import { useState, useEffect } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
```

The second argument — `[userId]` — is the dependency array. The effect re-runs only when `userId` changes.

## Rules of hooks

1. Only call hooks at the **top level** of a component
2. Only call hooks from **React functions** (components or other hooks)

That's really all there is to it. These two hooks cover the majority of real-world React work.
