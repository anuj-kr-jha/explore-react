function ButtonComponent() {
  return <button>I'm a button</button>;
}

function Module() {
  return (
    <div>
      <h1>This is all about components</h1>
      <ButtonComponent />
    </div>
  );
}

export default Module;
