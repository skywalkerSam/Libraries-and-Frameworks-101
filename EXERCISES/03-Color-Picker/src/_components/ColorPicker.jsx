import { useState } from "react";

export function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  function changeBackgroundColor(event) {
    setBackgroundColor(event.target.value);
  }
  return (
    <div
      id="color-picker-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <input
        type="color"
        id="color-input"
        value={backgroundColor}
        onChange={changeBackgroundColor}
      ></input>
    </div>
  );
}
