**Rendering lists**

We can render list using js loop and map method of array.

> - for every item we need to put a **key** attribute
> - the key can be string or a number that uniquely identifies items among its siblings
>
> react use this key to know what happened to it when altered in future

```typescript
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map((product) => <li key={product.id}>{product.title}</li>);

function Module() {
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Module;
```

[Home](../../readme.md)
[Prev](../3_conditional_rendering/readme.md)
[Next](../5_events_and_screen_updation/readme.md)
