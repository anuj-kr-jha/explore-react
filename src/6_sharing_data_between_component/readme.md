**Sharing data b/w components**

We can share data b/w component and for that we need to : -

- move state from individual component to nearest parent component that contain all of them
- pass state and handler from parent component to child component, this can be done while using the component
- In the child component we can use props to retrieve all the state data

```typescript
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
```

[Home](../../readme.md)
[Prev](../5_events_and_screen_updation/readme.md)
[Next](../../readme.md)
