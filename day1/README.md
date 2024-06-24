Using preact (react-like tool) in HTML directly.

https://preactjs.com/guide/v10/getting-started

### DOM

DOM is Document-Object Model
It's used to represent the HTML document as a tree.

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

> [!IMPORTANT]
> Virtual DOM helps us compose user interfaces declaratively rather than imperatively.
> 'imperative' means you are doing the set of operations yourself.
> 'declarative' means you are just declaring your desired end state.

In this case:
- Imperative means the programmer will edit / update the DOM using some code.
- Declarative means the programmer will just declare the desired DOM state.

#### Imperative
```js
// Imperative approach
const listElement = document.createElement('ul'); // Create a list element

const items = ['Item 1', 'Item 2', 'Item 3'];

// Loop through the items array
for (let i = 0; i < items.length; i++) {
  const item = document.createElement('li'); // Create a list item element
  item.textContent = items[i]; // Set its content
  listElement.appendChild(item); // Add it to the list
}

document.body.appendChild(listElement); // Add the list to the body of the document
```

#### Declarative

```js
// Declarative approach using React
import React from 'react';
import ReactDOM from 'react-dom';

const items = ['Item 1', 'Item 2', 'Item 3'];

const List = () => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li> // Describe the structure, React handles the DOM updates
    ))}
  </ul>
);

ReactDOM.render(<List />, document.getElementById('root'));
```

Using declarative approach, we are able to specify the end state (as a function of something else, or can depend on API calls).
The external library here (example preact, react, etc.) is able to take as input our desired state, and update the DOM when some function inputs or API results change.

So, the desired state of the application depends on the Data (can be internal state or can be fetched from outside).

#### API
API is application programming interface.
Any external programmable interface that we are integrating in our application.
Interface simply means a set of external rules, protocols etc. which are predefined.

#### Virtual DOM

To specify declaratively the desired end DOM result, we are using the Virtual DOM.
Preact / React works to manipulate the DOM as per the requirement, so that the end result is what we initially specified.

[This file shows you how to use preact as standalone inside HTML](./index.html)

[This file shows you how to use preact as standalone inside HTML with JSX syntax](./index-jsx.html)

### Scaffolding a react app.

Reference: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

`npm create vite@latest my-super-app -- --template react`
