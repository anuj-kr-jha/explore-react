**JSX**

JSX means js inside html. JSX is stricter than HTML. We have to close tags like <br />. Our component also can’t return multiple JSX tags. We have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

**In jsx/tsx we can js by using curly braces {}**

```typescript
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
```

[Home](../../readme.md)
[Prev](../1_component/readme.md)
[Next](../3_conditional_rendering/readme.md)
