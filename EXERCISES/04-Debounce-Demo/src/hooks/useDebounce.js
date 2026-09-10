/**
 * Debouncing is a programming technique that limits how often a function runs.
 *
 * It works by waiting until a user stops performing an action for a specified period of time before executing the function.
 *
 * For example, in a search box, instead of making an API call for every keystroke, debouncing waits until the user pauses typing for, say, 500 milliseconds.
 *
 */

import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
