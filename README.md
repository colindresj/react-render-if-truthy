#react-render-if-truthy

A JSX-specific util for rendering a component if some data value is truthy. An
unlimited number of arguments may be passed, with the last argument always
being a callback function. The supplied callback will be invoked with arguments
in the same order as passed, replacing non-truthy values with `null`, and
mainting truthy values.

The the callback will be returned, unless all the passed arguments are falsy,
in which case `null` will be returned.

##Examples
```js
// Basic Examples
RIT('truthy!', val => <div>{val}</div>); // => <div>truthy!</div>
RIT(1, 2, (val, val2) => <div>{val + val2}</div> // => <div>3</div>
RIT(undefined, val => <div>{val}</div>); // => null

// Advanced Example
const user = {
  firstName: 'Turbo',
  lastName: 'Jackson',
  email: null,
  phone: null
};

<ul className="user-info">
  {Object.keys(user).map(key => RIT(user[key], val => (
    <li key={key} className={dasherize(key)}>
      {humanize(key)}: {val}
    </li>
  )))}
</ul>
```

##License
MIT
