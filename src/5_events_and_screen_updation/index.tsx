import { useState } from 'react';

function Button() {
  /*
    - count is set 0 initially due to useState(0)
    - setCount is a function that can be used to update the value of count
    - useState is a hook, we will see more about it later.
  */
  const [count, setCount] = useState(0);

  const clickHandler = () => setCount(count + 1);

  return <button onClick={clickHandler}>Clicked {count} times</button>;
}

function Module() {
  return (
    <div>
      <Button />
      <br />
      <Button />
      <br />
      <Button />
    </div>
  );
}

export default Module;
