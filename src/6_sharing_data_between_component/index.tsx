import { useState } from 'react';

function Button(props: { count: number; clickHandler: () => void }) {
  console.log(props);

  return <button onClick={props.clickHandler}>Clicked {props.count} times</button>;
}

function Module() {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);

  return (
    <div>
      <div>
        <p>components with shared state</p>
        <hr />
        <Button count={count} clickHandler={clickHandler} />
        <br />
        <Button count={count} clickHandler={clickHandler} />
        <br />
        <Button count={count} clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default Module;
