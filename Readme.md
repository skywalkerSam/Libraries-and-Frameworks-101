# [Libraries and Frameworks](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/)

w/ freeCodeCamp.org

&nbsp;

## Libraries vs. Frameworks

JavaScript libraries and frameworks provide pre-built code that **streamlines the development process**. While both libraries and frameworks serve to **improve productivity** and **standardize coding practices**, they differ in their **approach** and **level of control** they provide to developers.

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

This UI is described using **JSX**, *a syntax extension* for JavaScript that looks similar to HTML but allows you to **write UI elements in a more declarative way**.

  ```jsx
  function Greeting() {
  const name = "John"
  {/* The result will be Hello John*/}
  return <h1 className="title">Hello {name}</h1>;
  }
  ```

  - We using `className` instead of `class` because in JavaScript, `class` is a **"reserved keyword"**. So, we need to use `className` *instead*.

  - We are using a **Capital** letter at the *beginning* of the component name because React treats components with a capital letter as **custom components/user-defined components**, while elements with **lowercase** letters are considered **built-in HTML elements**.

    - This subtle distinction helps React **differentiate** between native HTML tags and components that you create.

`Note`: When working with **JSX**, all *tags* and uses of *components* need to be explicitly **closed**. 

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

## import & export Components







&nbsp;

