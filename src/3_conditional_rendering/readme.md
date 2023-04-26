**Conditional rendering**

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX

```typescript
const isLoggedIn = false; // this is just for demonstration. In real-world we will have this kind of stuff in runtime

function Module() {
  let content: JSX.Element;
  if (isLoggedIn) content = <p>Dashboard</p>;
  else content = <p>LoginPage</p>;
  return <div>{content}</div>;
}
```

or

```typescript
const isLoggedIn = false; // this is just for demonstration. In real-world we will have this kind of stuff in runtime

function Module() {
  return <div>{isLoggedIn ? <p>Dashboard</p> : <p>LoginPage</p>}</div>;
}
```

[Home](../../readme.md)
[Prev](../2_jsx/readme.md)
[Next](../../readme.md)
