// change it to false to see difference
const isLoggedIn = false; // this is just for demonstration. In real-world we will have this kind of stuff in runtime

function Module() {
  // let content: JSX.Element;
  // if (isLoggedIn) content = <p>Dashboard</p>;
  // else content = <p>LoginPage</p>;
  // return <div>{content}</div>;
  // or
  return <div>{isLoggedIn ? <p>Dashboard</p> : <p>LoginPage</p>}</div>;
}

export default Module;
