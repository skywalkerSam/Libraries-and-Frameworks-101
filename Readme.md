# [Libraries & Frameworks](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/)

w/ freeCodeCamp.org

&nbsp;

## Libraries vs. Frameworks

JavaScript libraries and frameworks provide _pre-built_ code that **streamlines the development process**. While both libraries and frameworks serve to **improve productivity** and **standardize coding practices**, they differ in their **approach** and **level of control** they provide to developers.

- **Libraries** are generally more focused on providing **solutions to specific tasks**, such as manipulating the DOM, handling events, or managing AJAX requests.
  - jQuery
  - React

- **Frameworks**, on the other hand, provide a more **defined structure for building applications**. They often come with **a set of rules and conventions** that developers need to follow.
  - Next.js
  - Angular
  - Svelte
  - Remix

Although libraries and frameworks are used across projects of all sizes, the choice between using them often depends on the **project's requirements**. Libraries offer **flexibility for specific functionalities**, while frameworks provide **a structured approach towards complex applications**.

- Libraries and frameworks are widely used for several reasons. They significantly **speed up development** by providing **quick solutions for common problems**.

- Libraries and frameworks follow **best practices and patterns** that have been proven effective in real life scenarios. This can lead to **more robust and scalable applications**.

&nbsp;

## Single Page Applications (SPAs)

Unlike traditional multi-page websites, single page applications (SPAs) **load only one HTML page** and **dynamically update the content** as the user interacts with the app, **without reloading the entire page**. This approach can lead to **faster, more responsive applications**, but it also comes with a set of **challenges** and **considerations**.

- SPAs **heavily use JavaScript** to manage the application's state and render content. Instead of requesting new HTML pages from the server, SPAs use JavaScript to manipulate the DOM and fetch data asynchronously.

### Drawbacks of SPAs

- **SEO** Optimization

- **Navigation** and browser **history**.

- **Unable to bookmark** any specific page.

- **Performance** is impacted due to a large/bloated bundle size.

- **Screen readers may struggle** with dynamically updated content. (Accessibility)

- **Refreshing the page might reset the application** to its initial state, rather than maintaining the current view.

&nbsp;

## React

React is one of the most popular JavaScript libraries for building **user interfaces** and **web applications**.

- Virtual DOM

- State Management

- Reusable UI Components

### React Components

Components are the **building blocks** of React applications that allow developers to **break down complex user interfaces into smaller, manageable pieces**, making it easier to develop and maintain large-scale applications.

- Functional Components (Modern, Simple, & Efficient)

- Class-based Components (Traditional, Complex, & No longer used.)

At a higher level, you can think of components like **JavaScript functions that return elements describing the UI**.

### JSX

This UI is described using **JSX**, _a syntax extension_ for JavaScript that looks similar to HTML but allows you to **write UI elements in a more declarative way**.

```jsx
function Greeting() {
  const name = "John";
  {
    /* The result will be Hello John*/
  }
  return <h1 className="title">Hello {name}</h1>;
}
```

- We using `className` instead of `class` because in JavaScript, `class` is a **"reserved keyword"**. So, we need to use `className` _instead_.

- We are using a **Capital** letter at the _beginning_ of the component name because React treats components with a capital letter as **custom components/user-defined components**, while elements with **lowercase** letters are considered **built-in HTML elements**.
  - This subtle distinction helps React **differentiate** between native HTML tags and components that you create.

`Note`: When working with **JSX**, all _tags_ and uses of _components_ need to be explicitly **closed**.

### React Fragment

React fragments are used to group elements together.

- This is because **multiple sibling elements need to be wrapped in a parent element** while working with `JSX`.

```jsx
function Greeting() {
  const name = "John";
  return (
    <Fragment>
      <h1>Hello {name}</h1>
      <p>Nice to meet you.</p>
    </Fragment>
  );
}
```

You can also choose to use **empty JSX tags** which can serve as **shorthand for fragments**:

```jsx
function Greeting() {
  const name = "John";
  return (
    <>
      <h1>Hello {name}</h1>
      <p>Nice to meet you.</p>
    </>
  );
}
```

&nbsp;

## Exporting & importing Components

An **export** makes a component **available to import** in other files.

- **Default Export**

  A file can only have **one default export**, which makes it ideal for a file that primarily contains a _single component_.

  ```jsx
  function Cat() {
    return (
      <div className="card">
        <h2>Mr. Whiskers</h2>
        <img
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
          alt="Tuxedo cats running on dirt ground."
        />
      </div>
    );
  }

  export default Cat;
  ```

  Or,

  ```jsx
  export default function Cat() {
    return (
      <div className="card">
        <h2>Mr. Whiskers</h2>
        <img
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
          alt="Tuxedo cats running on dirt ground."
        />
      </div>
    );
  }
  ```

&nbsp;

- **Named Export**

  Named exports allow a file to **share multiple components or functions**. Unlike default exports, these must be imported using the exact name they were exported with (unless you rename them using `as` term). This is useful when a file **serves as a library of components**.

  ```jsx
  // Animals.jsx
  export function Cat() {
    return <h2>Mr. Whiskers</h2>;
  }

  export function Dog() {
    return <h2>Fido</h2>;
  }
  ```

&nbsp;

- **Mixed** Export

  A file can have **one default export** and **multiple named exports**.

  ```jsx
  // Animals.jsx
  export default function Cat() {
    return <h2>Mr. Whiskers</h2>;
  }

  export function Dog() {
    return <h2>Fido</h2>;
  }
  ```

&nbsp;

### importing A Component

An **import** allows a file to **use a component** that was exported elsewhere.

- **Default import**

  ```jsx
  import Cat from "./Cat";

  export default function App() {
    return <Cat />;
  }
  ```

&nbsp;

- **Named import**

  ```jsx
  import { Cat, Dog } from "./Animals";

  export default function App() {
    return (
      <div>
        <Cat />
        <Dog />
      </div>
    );
  }
  ```

  - Renaming w/ `as` keyword

    ```jsx
    import { Cat as Kitty } from "./Animals";

    export default function App() {
      return <Kitty />;
    }
    ```

- **Mixed** import

  When importing mixed exports, the **default export comes first** (_without braces_), followed by the named exports (_inside braces_):

  ```jsx
  // App.jsx
  import Cat, { Dog } from "./Animals";

  export default function App() {
    return (
      <div>
        <Cat />
        <Dog />
      </div>
    );
  }
  ```

&nbsp;

## [Vite](https://vite.dev/)

Vite is a **build tool** that aims to provide a faster development experience for modern web projects. it can be used with **React**, as well as with other libraries and frameworks like **Vue**, **Svelte**, and even with **vanilla JavaScript projects**.

```shell
npm create vite@latest
```

Furthermore,

```shell
cd to-your-react-app
npm install
```

To run your project, run the `npm run dev` command and open up a new browser tab at `http://localhost:5173/`.

&nbsp;

## React Props

Props, which is short for **properties**, is the way for **parent components** to **pass data** down to the **child component**.

- Props can be of any type: _strings_, _numbers_, _booleans_, _objects_, or _arrays_.

  ```jsx
  function App() {
    return <Greeting name="Jessica" />;
  }

  export default App;

  function Greeting(props) {
    console.log(props);
    return <h1>Hi {props.name}!</h1>;
  }
  ```

  - Props are passed down as **objects**.

&nbsp;

### Object Destructuring

The code achieves the **same result** but **makes it clearer which props the component is expecting** to receive.

```jsx
function App() {
  return <Greeting name="Jessica" />;
}

export default App;

function Greeting({ name }) {
  return <h1>Hi {name}!</h1>;
}
```

&nbsp;

### `children`: A Special Prop

Any **JSX you place between a component's opening and closing tags** is passed to the component as `children`.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Hello</h2>
    </Card>
  );
}
```

- The **JSX** inside `<Card>...</Card>` becomes the `children` prop. The rendered output in the DOM will be:

  ```html
  <div class="card">
    <h2>Hello</h2>
  </div>
  ```

- This pattern is often used for **component composition**, where a component wraps other UI elements.

&nbsp;

### The Spread Syntax (`...`)

Sometimes, you can have **a lot of properties** that you have to pass as props. instead of passing them one by one, you can use the spread operator (`...`), after **converting** them to an **object**.

- it is used to **pass all properties of an object as individual props** to a child component.

```jsx
function App() {
  const developerObj = {
    name: "Alice",
    age: 30,
    country: "USA",
  };

  return (
    <div className="App">
      <DeveloperCard {...developerObj} />
    </div>
  );
}

function DeveloperCard({ name, age, country }) {
  return (
    <div className="developer-card">
      <h1>Developer: {name}</h1>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}
```

&nbsp;

Using props in React makes your components more _flexible_ and _reusable_, allowing you to build more complex UIs.

However, it's important to note that **props are immutable**, meaning they cannot be changed once passed to a component.

- if you need to handle _user input_ and _modify data_, you should use **state** instead.

&nbsp;

## Conditional Rendering

Conditional rendering in React allows you to create _dynamic user interfaces_ by **showing different content based on certain conditions or states** within your application.

The most common approaches of using conditional rendering includes using `if` statements, the ternary (`?:`) operator, and logical AND (`&&`) operator.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in</h1>;
}
```

- For **simpler conditions**, the ternary operator (`?:`) is often used directly within JSX. it allows for **inline conditional rendering**, which can make your code more _concise_.

  ```jsx
  function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
  }
  ```

  - This code achieves the **same result as the previous** example, but **in a more compact form**. The ternary operator checks `isLoggedIn` and renders the appropriate message. (**DRY**)

- Another common pattern for conditional rendering is using the logical AND (`&&`) operator. This is particularly useful **when you want to render something, or nothing at all**, based on a _condition_.

  ```jsx
  function Notification({ message }) {
    return <div>{message && <p>{message}</p>}</div>;
  }
  ```

  - in this example, the paragraph element with the `message` is **only rendered if the message prop is truthy**. if `message` is **falsy** - meaning it is an empty string(`""`), `null`, or `undefined`, **nothing is rendered** to the screen. (`<div></div>`)

&nbsp;

## Rendering Lists

Rendering lists is _a fundamental task_ in React web apps, and is used for _displaying data_ to users.

in React, the `map` method is used to **transform an array of data into an array of JSX elements** that can be rendered in the UI.

```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

- in this example, the `map` function **iterates over each item** in the `fruits` array. For each fruit, it **creates a new** `li` _element_ containing the fruit's name. The **newly created array** of `li` elements is then _displayed_ inside the `ul` parent tags.

&nbsp;

### The `key`

When rendering lists in React, it is important **NOT to forget** the `key` prop for each element in the list.

**The key must always be unique** and it helps React identify which items have _changed_, been _added_, or been _removed_, which is **essential for efficient rendering and updating** the list.

if you forget the key, React will show a `warning` in the console, but it will **not throw a fatal error**.

The application might still render and function, but you may encounter **subtle bugs**, **especially when the list changes**.

These bugs can be **difficult to debug** because the UI might look correct initially.

A **common mistake** is to **use the array index as the key**, like this:

```jsx
{
  fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
}
```

While this _silences the warning_, it is generally considered an **anti-pattern**. Using the index as a key can cause **issues when the list is reordered, sorted, or filtered**.

**React uses the `key` to track elements**. if the list order _changes_, React might **incorrectly reuse component state** or **fail to update the DOM** efficiently because the **keys (_indexes_) stay the same even if the content at that index has changed**.

- The _best practice_ is to **use a stable, unique identifier** for each item. This is typically an **ID** from your **database**, like a `UUID`, or a **database ID**.
  - if your data doesn't have a unique ID, **you can generate one when the data is created** (e.g., using `crypto.randomUUID()` or a library like `uuid`), or **use a combination of fields that are guaranteed to be unique**.
    - However, you should **avoid generating keys on the fly during rendering** (e.g., `key={Math.random()}`), as this will cause React to **recreate the DOM elements on every render** and **reset their state**.

Let's modify our example to include the `key`:

```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}
```

- in this refactored example, we are creating **a unique key** for each list item by **concatenating the fruit name with its index**.
  - This ensures that **each list item has a distinct key**, which helps React efficiently manage and update the list when items are _added_, _removed_, or _reordered_.

&nbsp;

React also allows you to render more _complex structures_. For instance, you might have an _array of objects_ representing users, each with multiple properties that you want to display:

```jsx
function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

- in this example, we're creating a more complex JSX structure for each user, displaying both their name and email address. We're using the user's `id` as the `key`, which is _a good practice_.

&nbsp;

in conclusion, rendering lists in React involves **converting arrays of data into JSX elements**, typically using the `map` function.

&nbsp;

## inline Styles

in React, inline styles are used to **apply CSS styles directly to React elements** within your JSX code _instead of defining them in separate CSS files_.

React's approach to _inline styles_ involves using JavaScript **objects to define styles**, rather than traditional CSS strings.

- This means that instead of writing styles as you would in a CSS file, you create a JavaScript _object_ where the **keys** are **camel cased versions of CSS property names**, and the **values** are the **strings of CSS values**.

  ```jsx
  function Button({ buttonText }) {
    const defaultStyles = {
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    };

    return <button style={defaultStyles}>{buttonText}</button>;
  }
  ```

  - in this example, we define a style object called `defaultStyles`. We then apply these styles to a `button` element using the `style` attribute.
    - React takes care of applying these styles to the element when it renders.

- You can also choose to **pass in an object directly to the `style` attribute**.

  ```jsx
  function Button({ buttonText }) {
    return (
      <button
        style={{
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {buttonText}
      </button>
    );
  }
  ```

  - Notice the double curly braces `{{}}` in the `style` attribute?
    - The **outer braces indicate a JavaScript expression in JSX**, while the **inner braces define a JavaScript object literal**.
      - This syntax allows you to embed JavaScript objects directly in JSX attributes.

&nbsp;

it is important to note that while **CSS property names** are typically written in **kebab case**, like `font-size`, in **React's inline styles**, we use **camel case**, like `fontSize`.

- This is because the `style` **object is a JavaScript object**, and _kebab case names are not valid as object keys_ in JavaScript without using quotes.

&nbsp;

A great _advantage_ of inline styles in React is that they support **dynamic styling based on a component state or props**.

```jsx
function DynamicButton({ isActive }) {
  const buttonStyles = {
    backgroundColor: isActive ? "green" : "red",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyles}>Login</button>;
}
```

- in this example, the _button's background color_ changes based on the `isActive` prop.
  - This kind of dynamic styling can be **powerful for creating interactive and responsive user interfaces**.

&nbsp;

## Events in React

_Event handling_ is an essential part of every interactive website.

React provides a powerful and consistent way to handle _events_ through its **Synthetic Event System**, which is **a wrapper around native events** like `click`, `keydown`, and `submit`.

- This _cross-browser_ wrapper ensures that events work the _same_ across all browsers, so there are _no inconsistencies_.

&nbsp;

in React, event handlers work in a similar way to native browser events, but with _a few tweaks_.

- instead of using **lowercase event attribute names** like `onclick` and `onsubmit`, _React_ uses **camelCase**, like `onClick` and `onSubmit`.

- in addition, instead of using "_strings_" **to specify the kind of event**, _React_ expects **a function for the event handler**.

The _event handler function_ is passed to the _element_ as a **prop**, and the event type like `onClick` or `onSubmit` is used as **an attribute in JSX**.

A click event in regular HTML:

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

in React:

```jsx
function handleClick() {
  console.log("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>;
```

- in this example, `handleClick` logs a message to the console when the user _clicks_ the `button`.

- You don't need parentheses(`()`) after `handleClick` in the `onClick` attribute, as you're **passing a reference** to the _function_, **NOT calling it**.

&nbsp;

in React, **event handler functions** usually start with the _prefix_ `handle` to indicate they are responsible for _handling events_, like `handleClick` or `handleSubmit`.

When a user action _triggers_ an event, React passes a **Synthetic Event object** to your _handler_.

- This object _behaves_ much like the **native event object** in _vanilla JavaScript_, providing properties like `type`, `target`, and `currentTarget`.

&nbsp;

You can pass `event` as a _parameter_ to the handler function:

```jsx
function handleClick(event) {
  console.log(event);
}
```

&nbsp;

Sometimes, while handling _special cases_ like **delete** and **edit** _features_, you might want to **pass extra data to an event handler**.

You can do this by **wrapping** the _handler_ in **an inline arrow function**:

```jsx
function handleDelete(id) {
  console.log("Deleting item:", id);
}

<button onClick={() => handleDelete(1)}>Delete Item</button>;
```

- it is **fine to use inline event handlers in React**, because React efficiently manages _re-renders_ and avoids _performance issues_ by using **a virtual DOM**.
  - While in _vanilla JavaScript_, **inline event handlers** can lead to **performance issues** by _creating_ **new functions** on **every render**, as there is **NO virtual DOM** to _optimize_ the process.

&nbsp;

To **prevent default behaviors** like **browser refresh** during an `onSubmit` event, for example, you can call the `preventDefault()` method:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button>Submit</button>
</form>;
```

- You can also **stop an event from bubbling up to parent** elements by calling `event.stopPropagation()`.

&nbsp;

## States in React

State is like **the brain of a component**, it holds **dynamic data** and _controls_ how the components _behave_ and look.

- The _value_ from a user _input_

- _Data_ fetched from an API

- An item in a _to-do_ list.

Whenever the _state_ **changes**, React **re-renders** the component **without reloading the page** to reflect those changes in the UI.

- This _reactivity_ makes your app _interactive_.

&nbsp;

### `useState` Hook

The `useState()` hook is **a function that lets you declare state variables** in functional components.

Before _hooks_, you could only use state in _class components_. But with the introduction of hooks since React `16.8`, you can use state in functional components by using the `useState` hook.

First, import:

```jsx
import { useState } from "react";

// OR

import React from "react";
```

Then, declare:

```jsx
const [stateVariable, setStateFunction] = useState(initialValue);

// OR

const [stateVariable, setStateFunction] = React.useState(initialValue);
```

- `stateVariable` **holds** the current _state_ value

- `setStateFunction` (the _setter_ function) **updates** the _state_ variable

- `initialValue` **sets** the _initial_ state

&nbsp;

The _state_ in a React component is **private**, and is **isolated to each component instance**.

- This means that, if you render the same component _twice_, **the state of one component does not affect the other**.

- This also means that, if you'd like to **share state between components**, then you'd need to _lift the state up_ to a **common parent** and _pass it down_ as **props**.

&nbsp;

Another thing is that **hooks must be called at the top level of a component**, just **before** the `return` keyword, to keep the _state_ and _effects_ consistent across renders.

- This means you can **NOT** use _state_ inside _loops_, _conditions_, or _nested functions_.

```jsx
// importing the useState hook
import { useState } from "react";

function Counter() {
  const initialValue = 0;

  // The state variable and setter function
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      {/* Display current state value */}
      <h2>{count}</h2>

      <button onClick={() => setCount(count--)}>Decrement</button>
      <button onClick={() => setCount(count++)}>Increment</button>
    </div>
  );
}

export default Counter;
```

- in the code above, we have the `useState` hook _imported_ from React.

- in the `Counter` component, the `count` represents the **current state** while `setCount` is the **setter function** responsible for **updating** state.
  - The current state value is `0`.

- The `return` statement contains the `count` and _two buttons_ to _decrement_ and _increment_ the `count` by `1`.

&nbsp;

You can **manage multiple states** by calling the `useState` hook _multiple times_.

- This is especially important when you have **unrelated state variables**:

```jsx
function UserProfile() {
  const [isOnline, setIsOnline] = useState(false);
  const [notifications, setNotifications] = useState(0);

  // The rest of the component logic
}
```

&nbsp;

### Form fields (`{}`)

it is best to **combine the states into an object** since they're all part of the _same form_.

```jsx
function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  // The rest of the component logic
}
```

&nbsp;

### Updating Objects in State

Updating objects in state in React can be _tricky_, if you're used to changing object property values _directly_.

React treats **state** as **immutable**, meaning you should **NOT** modify it _directly_.

- in React, state is treated as _immutable_, so it can **recognize changes** and make the proper **updates** to the _UI_.

What **NOT** _to do_:

```jsx
const [user, setUser] = useState({
  name: "John Doe",
  age: 31,
  city: "LA",
});

// Do NOT change user's properties directly!!
const handleAgeChange = (e) => {
  user.age = e.target.value;
};
```

&nbsp;

To _update an object_ in the state, you need to **use the setter function** to **create a new object** with the _updated value_.

- **Copy the existing object** first, then **update only the property** you want to _update_.

To do this, you can pass a _special function_ called **an updater function** to your _setter function_ (`setUser`).

- The _updater function_ takes the **pending state as an argument**, here, called `prevUser`, and should **return the next state**.

```jsx
const [user, setUser] = useState({
  name: "John Doe",
  age: 31,
  city: "LA",
});

const handleAgeChange = (e) => {
  setUser((prevUser) => {
    const updatedUser = { ...prevUser, age: e.target.value };
    return updatedUser;
  });
};
```

- As you can see, we create a new _user object_ called `updatedUser` by using the _spread syntax_ to copy the pending user object, `...prevUser`.
  - We then update the `age` based on the _form input_ and **return** `updatedUser` at the bottom of the function as the **next state**.

- This is the ideal way to update an object in state, _especially_ when you're **NOT updating all the properties** at once.

&nbsp;

Now, if you are **updating the whole object**, you can **combine them into a single setter function**, like this:

```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value,
  }));
};
```

- Each _input field_ **must** have a `name` attribute.

&nbsp;

### Updating Arrays in State

in React, updating arrays in state is quite _straightforward_, but it can be easy to make a mistake, especially if you're coming from _vanilla JavaScript_ where you can modify arrays _directly_.

Again, states in react are **immutable**, i.e., you can **NOT** change it **directly**.

- Do **NOT** modify the array _directy_ using methods like `push()`, `pop()`, or `splice()`. For these methods **mutate the original array**, and React does NOT allow that.

React relies on a **new array reference** to _detect changes_, so _directly_ modifying the array can **prevent the component from re-rendering** as expected.

&nbsp;

To update an array in state, the _key_ is to **create a new array**, do your **operations**, and **pass** that to React, rather than _mutating_ the existing array.

- Because it is a **new array**, React will know that **the state has been changed**, and _trigger_ a **re-render**.

```jsx
const addItem = () => {
  const newItem = {
    id: items.length + 1,
    name: `Item ${items.length + 1}`,
  };

  // Creates a new array
  setItems((prevItems) => [...prevItems, newItem]);
};
```

- `[...prevItems, newItem]` creates a _new array_ by **copying** all items in **the existing items array** held in _state_, then adds `newItem` at the end, which _increments_ the `id` and the item number.

&nbsp;

if you want to remove something from the array, you can use the `filter()` method, which **returns a new array** after _filtering_ out whatever you want to remove:

```jsx
import { useState } from "react";

export function ItemsList() {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems((prevItems) => [...prevItems, newItem]); // Creates a new array
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Creates a new array
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

&nbsp;

## Rendering in React

in React, rendering is **the process by which components appear in the user interface** (_UI_), usually the browser.

React takes all your _JavaScript_, _JSX_, and _CSS_ code, figures out how it should look, and then displays it in the _UI_.

&nbsp;

The 3 stages of rendering:

### 1. The Trigger

The trigger stage occurs when React **detects** that something has **changed**, and that the **UI might need to be updated**.

- This change is often due to _an update_ in the **state** or **props**.
  - For instance, noticing that it's time for dinner can trigger you to go into the kitchen to start cooking.

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count--)}>Decrement</button>
      <button onClick={() => setCount(count++)}>Increment</button>
    </div>
  );
}
```

- Clicking the _increment_ or _decrement_ `button`, **triggers** React to show the new `count` value.

&nbsp;

### 2. The Render

Once the _trigger_ happens, React enters _the render stage_. Here, React **re-evaluates** your components and **figures out what to display**.

To do this, React uses **a lightweight copy of the "real" DOM**. This is called the **virtual DOM**.

- With the _virtual DOM_, React can _quickly_ **check what needs to change in the component**.
  - Think of this stage as the point where you're in the kitchen, you've gathered your ingredients, and you cook your dinner.

For the `Counter` component, the _render stage_ is the point where React **runs the functions again with the _new_ `count` value**.

- React recalculates what the `<h1>{count}</h1>` part of the component should look like based on the _updated_ `count` value, but you won't see any changes on the screen until the next stage – _commit_.

&nbsp;

### 3. The Commit

The _commit_ stage is where React **takes the prepared changes** from the _virtual DOM_, and **applies them to the real DOM**.

in other words, this is **the stage where you see the final result** on the screen.

To make this happen, React **compares the virtual DOM to the actual DOM**, **identifies only the parts that need updates**, and **applies** those _changes_ to the _real DOM_ to update the _UI_.

- You can think of this stage as the point where you serve the food you cooked, making it visible just like React does when it commits updates to the actual DOM.

As for the `Counter` component, the _commit_ stage is the point in which the _new_ `count` value is applied to the `h1` element, and you can **see the change** on the page.

&nbsp;

These three processes are _extremely fast_ because **React minimizes direct DOM manipulation by calculating changes in the virtual DOM** _first_, then it **updates only the parts that needs to be changed** in the _real DOM_.

&nbsp;

## Reference Values (`useRef`)

In React, there may be situations where you need **direct access to a DOM element**. That's where "_refs_" come in handy.

In vanilla JavaScript, you used the `getElementById()` and `querySelector()` methods to access DOM elements. But in React, you use `refs` to access elements in the DOM.

- One of the main differences is that, with _refs_, there is **NO need of identifiers** like _IDs_ and _classes_ to reference elements.

Refs can also _store mutable values_, but _state_ is a better choice for that.

&nbsp;

React provides a `useRef()` hook.

1. import `useRef()`

   ```jsx
   import { useRef } from "react";
   ```

2. Then, create a _variable_ that holds the _ref_ with the _initial value_ of the ref inside the `useRef` hook, say a `sectionRef` initialized to `null`:

   ```jsx
   const sectionRef = useRef(null);
   ```

3. The final thing to do is to attach the _ref_ variable to the _element_ in your JSX by using the `ref` attribute:

   ```html
   <section ref="{sectionRef}">{/* Section content */}</section>
   ```

&nbsp;

Now, if you log the `ref` to the _console_, you'll see it's **an object with the current value**, in this case, `null`:

```js
console.log(sectionRef); // { current: null }
```

- You can also log the _current value_ to the console with the `current` property so you can see the _value_ directly:

  ```js
  console.log(sectionRef.current); // null
  ```

&nbsp;

### The Component Lifecycle

The _subsequent values_ of the `ref` depend on _the component lifecycle_.

#### 1. initialization

The _initial value_ of `sectionRef` will always be `null` because that's what it was _initialized_ to.

#### 2. Mount

After the component is _mounted_, the _value_ of the `ref` will be the `section` element the `ref` is attached to.

#### 3. Unmount

If the component is _unmounted_, the _ref's value_ goes back to the _initial value_ of `null`.

&nbsp;

A typical example to showcase a `ref` is to **focus an input element on render**, _or_ by _clicking_ a `button`.

Here's how to do that when you _click a button_:

```jsx
import { useRef } from "react";

export default function Focus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

- In the code above, the `inputRef` is _created_ and _attached_ to the `input` element. There's also a `button` with an `onClick` event that calls a `handleFocus` function.
  - All the `handleFocus` function does is _call_ the `focus()` method on the `input` element.

&nbsp;

**Best practices** for working with _refs_:

- Use _refs_ mainly to interact with the DOM.
  - You can also use them for _mutable data_, but _state_ is a better choice for that.
    - Do NOT use `refs` for basic _state management_ – that is what `useState` is for.

- Make sure to _check_ if `ref.current` _exists_, before _accessing_ its properties.

  ```jsx
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  ```

  - This **prevents errors** _in case_ the `ref` is **accessed before it is attached** to the DOM _or_ after it is removed.

&nbsp;

## Effects (`useEffect`)

In React, an _effect_ is **anything that happens outside the component rendering process**, i.e., **anything React does NOT handle directly** as part of rendering the UI.

- Fetching data

- Updating the browser tab's title

- Reading from or writing to the browser's local storage

- Getting the user's location, and much more.

These operations **interact with the outside world** and are known as **side effects**.

React provides the `useEffect` _hook_ to let you **handle** those **side effects**.

&nbsp;

`useEffect` lets you **run a _function_ after the component renders _or_ updates**.

First, import

```jsx
import { useEffect } from "react";
```

Then, use

```jsx
useEffect(() => {
  // Your side effect logic (usually a function) here
}, [dependencies]);
```

- The _effect function_ runs after the component _renders_.

- The **optional** `dependencies` argument **controls when the effect runs**.

&nbsp;

`dependencies` can be an _array_ of "_reactive values_" (**state**, **props**, **functions**, **variables**, and so on), an **empty** _array_, or **omitted** entirely.

- if `dependencies` is an **array** that includes _one_ or more _reactive values_, the effect will **run whenever they change**.

  ```jsx
  useEffect(() => {
    console.log("Component renders");
  }, [someDynamicValue]);
  ```

- if `dependencies` is an **empty array**, `useEffect` **runs only once** when the _component first renders_.

  ```jsx
  useEffect(() => {
    console.log("Component renders");
  }, []);
  ```

- if you **omit** `dependencies`, the effect **runs every time the component renders or updates**.

  ```jsx
  useEffect(() => {
    console.log("Component renders");
  });
  ```

&nbsp;

### The Cleanup (_optional_)

if the _effect_ you set up **persists beyond the component's rendering lifecycle**, you might need another _function_ to "_clean up_" that _function_ after the component _renders_ or _updates_.

For example, if your _effect_ function uses `setInterval()`, sets an _event listener_ like `window.addEventListener()`, or connects to a _server_, you'll need a _cleanup function_ to run `clearInterval()`, `window.removeEventListener()`, and disconnect from the _server_, respectively.

```jsx
useEffect(() => {
  // Your side effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

- For instance, if you add a _scroll event listener_, you can clean it up by removing it in your cleanup function:

  ```jsx
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll logic
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  ```

&nbsp;

## Custom Hooks

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
