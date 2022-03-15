import React from 'react';
import { Link } from 'react-router-dom';

import './form.style.css';

function Form(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.Title}</h1>
      <form className="login-container">
        <h1>{props.formTitle}</h1>
        {props.children}

        <br />
        <button>{props.buttonForm}</button>

        <h2>
          {props.haveAccountOrNot}
          <Link to={props.link}>{props.spanForm}</Link>
        </h2>
      </form>
    </div>
  );
}

export default Form;
