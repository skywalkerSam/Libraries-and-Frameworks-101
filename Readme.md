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

## State in React

&nbsp;

&nbsp;

&nbsp;

&nbsp;
