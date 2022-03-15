import React from 'react';

import Form from '../components/form.component';
import InputForm from '../components/inputForm.component';

import './regisForm.style.css';

function RegisForm() {
  return (
    <div>
      <Form
        Title="Discover-U"
        formTitle="Register"
        buttonForm="Register"
        haveAccountOrNot="Already have an account?"
        spanForm="Login"
        link="/login"
      >
        <div className="regis-flex">
          <InputForm
            labelFor="fname"
            labelName="First Name"
            inputType="text"
            inputId="fname"
            inputName="fname"
          />
          <InputForm
            labelFor="lname"
            labelName="Last Name"
            inputType="text"
            inputId="lname"
            inputName="lname"
          />
        </div>

        <InputForm
          labelFor="email"
          labelName="Email Address"
          inputType="text"
          inputId="email"
          inputName="email"
        />
        <InputForm
          labelFor="pass"
          labelName="Password"
          inputType="password"
          inputId="pass"
          inputName="pass"
        />
        <InputForm
          labelFor="cpass"
          labelName="Confirm Password"
          inputType="password"
          inputId="cpass"
          inputName="cpass"
        />
      </Form>
    </div>
  );
}

export default RegisForm;
