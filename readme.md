**Component**

React components are JavaScript functions that return markup.

- It can be nested into other component
- must start with capital letter(PascalCase), to distinguish easily b/w react component(PascalCases) and html tag(lowercased)

```javascript
// App.tsx

function ButtonComponent() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <ButtonComponent />
    </div>
  );
}
```
