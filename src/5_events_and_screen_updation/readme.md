**Responding to events and screen updation**

We can respond to events by declaring event handler functions inside our components and then pass it as reference wherever needed. the function gets auto triggered when utilized event occur

- we can add _state_ to our component to remember some information
- lets say to count number of time button is clicked we can use _'useState'_ hook
- **when we render same component multiple time, each component gets its own state**

```typescript
import { useState } from 'react';

function Button() {
  /*
    - count is set 0 initially due to useState(0)
    - setCount is a function that can be used to update the value of count
    - useState is a built-in hook, we will see more about it later.
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
```

- Functions starting with use are called Hooks
- Hooks are more restrictive than other functions. We can only call Hooks at the top of our components (or other Hooks)
- If you want to use useState in a condition or a loop, extract a new component and put it there.

[Home](../../readme.md)
[Prev](../4_rendering_list/readme.md)
[Next](../6_sharing_data_between_component/readme.md)
