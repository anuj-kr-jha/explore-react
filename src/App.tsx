// App.tsx

import './App.css';

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

export default App;
