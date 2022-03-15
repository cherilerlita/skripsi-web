import React from 'react';

import './inputForm.style.css';

function InputForm(props) {
  return (
    <div>
      <label for={props.labelFor}>{props.labelName}</label> <br />
      <input type={props.inputType} id={props.inputId} name={props.nameInput} />
    </div>
  );
}

export default InputForm;
