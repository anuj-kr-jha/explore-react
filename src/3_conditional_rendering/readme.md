**Conditional rendering**

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX

```typescript
//...
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
// ...
```

or

```typescript
//...
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
// ...
```

[Home](../../readme.md)
[Prev](../2_jsx/readme.md)
[Next](../../readme.md)
