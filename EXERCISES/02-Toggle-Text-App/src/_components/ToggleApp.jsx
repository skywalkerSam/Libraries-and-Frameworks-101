import { useState } from "react";

export function ToggleApp() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    // console.log(isVisible);
    setIsVisible(!isVisible);
    // console.log(isVisible);
    /**
     * If you looked at the console, you might have been surprised to see the value of `false` instead of `true`. This is happening because React doesn't immediately update state. The state will only be updated on the next render cycle.
     *
     * It is a common mistake for developers new to React to place console statements right after a set function. So this is something to be aware of as you build out your React applications.
     */
  }

  return (
    <div id="toggle-container">
      <button id="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
}
