// change it to false to see difference
const isLoggedIn = true; // this is just for demonstration. In real-world we will have this kind of stuff in runtime

function Module() {
  return <div>{isLoggedIn ? <p>Dashboard</p> : <p>loginPage</p>}</div>;
}

export default Module;
