import React from "react";
// text, password, radio, checkbox, date, email
const TextInput = (props) => {
  return (
    <div>
      <label>{props.inputLabel}</label>
      <input
        value={props.inputValue}
        type={props.inputType}
        name={props.inputName}
        onChange={props.inputChange}
      />
    </div>
  );
};

export default TextInput;
